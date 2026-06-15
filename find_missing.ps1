# Check for truly missing examples
$missing = Get-Content '.planning\MISSING_EXAMPLES.md' | Where-Object { $_ -match '^- webgl_' }
$existing = Get-ChildItem 'code\examples\webgl' -Recurse -Filter '*.tsx' | ForEach-Object { $_.BaseName.ToLower() }

$trulyMissing = @()

foreach ($m in $missing) {
    $mClean = ($m -replace '^- ', '').ToLower()
    $found = $false

    # Try multiple matching strategies
    $var1 = $mClean
    $var2 = $mClean -replace 'webgl_', ''
    $var3 = $mClean -replace '_', ''
    $var4 = $mClean -replace 'geometry_', 'geometry'
    $variants = @($var1, $var2, $var3, $var4)

    foreach ($e in $existing) {
        foreach ($v in $variants) {
            if ($e -eq $v -or $e -like "*$v*" -or $v -like "*$e*") {
                $found = $true
                break
            }
        }
        if ($found) { break }
    }

    if (-not $found) {
        $trulyMissing += $mClean
    }
}

Write-Output "=== WEBGL TRULY MISSING ($($trulyMissing.Count)) ==="
$trulyMissing | ForEach-Object { Write-Output "  - $_" }

# Also check other categories
Write-Output ""
Write-Output "=== OTHER CATEGORIES ==="

$miscMissing = Get-Content '.planning\MISSING_EXAMPLES.md' | Where-Object { $_ -match '^- misc_' }
$existingMisc = Get-ChildItem 'code\examples\misc' -Recurse -Filter '*.tsx' | ForEach-Object { $_.BaseName.ToLower() }

foreach ($m in $miscMissing) {
    $mClean = ($m -replace '^- ', '').ToLower()
    $found = $false
    foreach ($e in $existingMisc) {
        if ($e.Contains($mClean) -or $mClean.Contains($e)) {
            $found = $true
            break
        }
    }
    if (-not $found) {
        Write-Output "  misc: $mClean"
    }
}

$physicsMissing = Get-Content '.planning\MISSING_EXAMPLES.md' | Where-Object { $_ -match '^- physics_' }
$existingPhysics = Get-ChildItem 'code\examples\physics' -Directory | ForEach-Object { $_.Name.ToLower() }

foreach ($m in $physicsMissing) {
    $mClean = ($m -replace '^- ', '').ToLower()
    $found = $false
    foreach ($e in $existingPhysics) {
        if ($e.Contains($mClean) -or $mClean.Contains($e)) {
            $found = $true
            break
        }
    }
    if (-not $found) {
        Write-Output "  physics: $mClean"
    }
}

$cssMissing = Get-Content '.planning\MISSING_EXAMPLES.md' | Where-Object { $_ -match '^- css' }
$existingCSS = Get-ChildItem 'code\examples\css2d', 'code\examples\css3d' -Recurse -Filter '*.tsx' | ForEach-Object { $_.BaseName.ToLower() }

foreach ($m in $cssMissing) {
    $mClean = ($m -replace '^- ', '').ToLower()
    $found = $false
    foreach ($e in $existingCSS) {
        if ($e.Contains($mClean) -or $mClean.Contains($e)) {
            $found = $true
            break
        }
    }
    if (-not $found) {
        Write-Output "  css: $mClean"
    }
}

Write-Output ""
Write-Output "Total count of all .tsx files:"
(Get-ChildItem code\examples -Recurse -Filter '*.tsx' | Measure-Object).Count