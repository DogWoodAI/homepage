$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$partialPath = Join-Path $root "partials/shared-head.html"
$utf8 = [System.Text.UTF8Encoding]::new($false)
$shared = [System.IO.File]::ReadAllText($partialPath, $utf8).Trim()
$shared = $shared -replace "`r`n", "`n"
$block = "<!-- shared-head:start -->`n$shared`n<!-- shared-head:end -->"

$markedPattern = "(?s)<!-- shared-head:start -->.*?<!-- shared-head:end -->"
$legacyPattern = "(?s)<meta name=""description"" content=""[^""]*"">\s*<meta property=""og:type"" content=""website"">.*?<meta name=""theme-color"" content=""#ffffff"">\s*"

Get-ChildItem -Path $root -Filter "*.html" | ForEach-Object {
  $path = $_.FullName
  $text = [System.IO.File]::ReadAllText($path, $utf8)
  $text = $text -replace "`r`n", "`n"

  if ($text -match $markedPattern) {
    $text = [regex]::Replace($text, $markedPattern, $block, 1)
  } elseif ($text -match $legacyPattern) {
    $text = [regex]::Replace($text, $legacyPattern, $block + "`n", 1)
  } else {
    $text = $text.Replace("<title>DogWoodAI</title>", "<title>DogWoodAI</title>`n$block")
  }

  [System.IO.File]::WriteAllText($path, $text, $utf8)
}

Write-Host "Synced shared head metadata to HTML files."
