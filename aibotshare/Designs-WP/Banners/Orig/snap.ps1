# Export every banner to png\ with Chrome headless.
$d = $PSScriptRoot
$c = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$all = "728x90","300x250","160x600","970x250","320x50","1200x628","1080x1080","1080x1920"
$twice = "300x250","160x600","1080x1080","1080x1920"
function Snap($s, $scale, $suffix) {
  $w,$h = $s -split "x"
  $url = "file:///$($d -replace '\\','/')/banner-$s.html"
  $a = @("--headless=new","--disable-gpu","--hide-scrollbars","--virtual-time-budget=6000","--force-device-scale-factor=$scale","--window-size=$w,$h","--screenshot=$d\png\banner-$s$suffix.png",$url)
  Start-Process -Wait -NoNewWindow $c -ArgumentList $a
}
foreach ($s in $all) { Snap $s 1 "" }
foreach ($s in $twice) { Snap $s 2 "@2x" }
