<?php
/**
 * Run the Botterverse sync from the command line.
 *
 *   php run-sync.php [--wp=PATH_TO_WORDPRESS] [--user=LOGIN] [--publish]
 *
 * It finds wp-load.php from --wp or the BTV_WP_PATH variable or by searching upward from here.
 * It reads the WordPress database settings through WordPress itself and never prints them.
 */

if (php_sapi_name() !== 'cli') {
    exit('Command line only.');
}

$options = getopt('', ['wp::', 'user::', 'db::', 'publish']);
$wpPath = isset($options['wp']) ? $options['wp'] : getenv('BTV_WP_PATH');
if (!$wpPath) {
    $dir = __DIR__;
    for ($i = 0; $i < 8; $i++) {
        if (file_exists($dir . '/wp-load.php')) {
            $wpPath = $dir;
            break;
        }
        $parent = dirname($dir);
        if ($parent === $dir) {
            break;
        }
        $dir = $parent;
    }
}
if (!$wpPath || !file_exists(rtrim($wpPath, '/\\') . '/wp-load.php')) {
    fwrite(STDERR, "Cannot find wp-load.php. Pass --wp=PATH or set BTV_WP_PATH.\n");
    exit(1);
}

define('WP_USE_THEMES', false);
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_HOST'] ?? 'localhost';
$_SERVER['HTTPS'] = 'on';
require rtrim($wpPath, '/\\') . '/wp-load.php';

// --db=NAME points the run at another database on the same server, such as a throwaway copy for a rehearsal.
// It stops if the switch does not take, so a rehearsal can never write to the site's own database by mistake.
if (!empty($options['db'])) {
    global $wpdb;
    $target = $options['db'];
    if ($target === DB_NAME) {
        fwrite(STDERR, "--db names the site's own database. Leave --db out to run there.\n");
        exit(1);
    }
    $wpdb->select($target); // returns nothing, so the check below is the test
    if ($wpdb->get_var('SELECT DATABASE()') !== $target) {
        fwrite(STDERR, "Cannot switch to the database {$target}. Nothing was changed.\n");
        exit(1);
    }
    wp_cache_flush();
    echo "Rehearsal: using the database {$target}\n";
}

if (!defined('BTV_SYNC_DIR')) {
    define('BTV_SYNC_DIR', dirname(__DIR__));
    require_once BTV_SYNC_DIR . '/includes/runtime.php';
}
require_once BTV_SYNC_DIR . '/includes/sync.php';

$login = isset($options['user']) ? $options['user'] : 'agentuser';
$user = get_user_by('login', $login);
if (!$user) {
    fwrite(STDERR, "No WordPress user called {$login}.\n");
    exit(1);
}
wp_set_current_user($user->ID);

try {
    $sync = new BTV_Sync(['publish' => isset($options['publish'])]);
    $sync->run();
    echo "Done.\n";
} catch (Throwable $e) {
    fwrite(STDERR, 'Sync stopped: ' . $e->getMessage() . "\n");
    exit(1);
}
