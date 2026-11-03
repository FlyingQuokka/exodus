<?php
/**
 * Plugin Name: Botterverse Sync
 * Description: Registers the Botterverse email design template and the domain smart code. The sync tool (bin/run-sync.php) creates and updates tags and automations from the files in this plugin and is safe to run again.
 * Version: 0.1.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('BTV_SYNC_DIR', __DIR__);

require_once __DIR__ . '/includes/runtime.php';
