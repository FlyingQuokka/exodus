<?php
/**
 * WordPress shows this file while it is updating. WordPress does not send a status for this drop-in, so it is sent
 * here. Installed from btv-sync/error-pages by deploy.sh.
 */
if (!headers_sent()) {
    http_response_code(503);
    header('Retry-After: 600');
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
}
$page = dirname(__DIR__) . '/btv-error-503.html';
if (is_readable($page)) {
    readfile($page);
} else {
    echo '<!DOCTYPE html><html lang="en-GB"><head><meta charset="utf-8"><title>Botterverse</title></head><body><h1>We are making an update.</h1><p>Botterverse will be back in a few minutes.</p></body></html>';
}
