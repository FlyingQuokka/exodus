<?php
/**
 * WordPress shows this file after a PHP fatal error. WordPress leaves the status to this drop-in, so it is sent
 * here. Installed from btv-sync/error-pages by deploy.sh.
 */
if (!headers_sent()) {
    http_response_code(500);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
}
$page = dirname(__DIR__) . '/btv-error-500.html';
if (is_readable($page)) {
    readfile($page);
} else {
    echo '<!DOCTYPE html><html lang="en-GB"><head><meta charset="utf-8"><title>Botterverse</title></head><body><h1>Something went wrong on our side.</h1><p>Please try again in a few minutes.</p></body></html>';
}
