<?php
/**
 * WordPress shows this file when it cannot reach the database. It is a static Botterverse page so nothing here
 * needs the database. Installed from btv-sync/error-pages by deploy.sh.
 */
if (!headers_sent()) {
    http_response_code(503);
    header('Retry-After: 60');
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
}
$page = dirname(__DIR__) . '/btv-error-db.html';
if (is_readable($page)) {
    readfile($page);
} else {
    echo '<!DOCTYPE html><html lang="en-GB"><head><meta charset="utf-8"><title>Botterverse</title></head><body><h1>Botterverse is busy right now.</h1><p>Please wait a moment and try again.</p></body></html>';
}
