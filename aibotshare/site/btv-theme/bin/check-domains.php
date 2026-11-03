<?php
/**
 * Fails when a typed domain appears in the theme source. Run it before every release.
 *
 *   php bin/check-domains.php
 *
 * Allowed: the token {{domain}}, a host that ends in a dot (the code adds the domain after it), the XML namespace addresses inside SVG files, and the schema address in theme.json.
 * Not allowed: any other web address with a host name, any bare botterverse.<tld> name and any email address.
 * Exit code 0 means clean and 1 means a typed domain was found.
 */

$root = dirname(__DIR__);
$skip_dirs = ['.git', 'node_modules'];
$skip_files = ['check-domains.php'];
$allowed_hosts = ['www.w3.org', 'schemas.wp.org'];
$text_ext = ['php', 'html', 'css', 'js', 'json', 'md', 'txt', 'svg'];

$found = [];
$iterator = new RecursiveIteratorIterator(new RecursiveCallbackFilterIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
    function ($file) use ($skip_dirs) {
        return !($file->isDir() && in_array($file->getFilename(), $skip_dirs, true));
    }
));

foreach ($iterator as $file) {
    if (!$file->isFile() || in_array($file->getFilename(), $skip_files, true)) {
        continue;
    }
    if (!in_array(strtolower($file->getExtension()), $text_ext, true)) {
        continue;
    }
    $rel = str_replace('\\', '/', substr($file->getPathname(), strlen($root) + 1));
    $lines = file($file->getPathname(), FILE_IGNORE_NEW_LINES);
    foreach ($lines as $n => $line) {
        // Web addresses: the host may be a token or built from one. A host that is typed in full is a failure.
        if (preg_match_all('~https?://([^/\s"\'<>)\]\\\\?#]+)~i', $line, $m)) {
            foreach ($m[1] as $host) {
                $host = strtolower($host);
                if (in_array($host, $allowed_hosts, true) || strpos($host, '{{domain}}') !== false || substr($host, -1) === '.') {
                    continue;
                }
                $found[] = "$rel:" . ($n + 1) . "  typed address host '$host'";
            }
        }
        if (preg_match_all('~\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|net|org|io|co|uk|debbie|test|local|app|dev)\b~i', preg_replace('~https?://\S+~', '', $line), $m2)) {
            foreach ($m2[0] as $name) {
                if (preg_match('~\.(?:js|css|php|json|html|svg|png|woff2|md)$~i', $name)) {
                    continue;
                }
                if (stripos($name, 'botterverse') !== false) {
                    $found[] = "$rel:" . ($n + 1) . "  typed domain '$name'";
                }
            }
        }
        if (preg_match('~[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}~', $line, $m3)) {
            $found[] = "$rel:" . ($n + 1) . "  email address '{$m3[0]}'";
        }
    }
}

if ($found) {
    fwrite(STDERR, "Typed domain found in the theme source:\n  " . implode("\n  ", $found) . "\n");
    exit(1);
}
echo "Clean. No typed domain in the theme source.\n";
exit(0);
