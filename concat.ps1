$outputFile = "D:\Developments\FengShui\meta-suyen\packages\@woby/three\node_modules\@types\three\src.txt"
$rootFolder = "D:\Developments\FengShui\meta-suyen\packages\@woby/three\node_modules\@types\three\src"

# Clear the output file if it exists
Clear-Content -Path $outputFile

# Get all files recursively from the root folder
Get-ChildItem -Path $rootFolder -File -Recurse | ForEach-Object {
    $filePath = $_.FullName
    $fileContent = Get-Content -Path $filePath

    # Write the file path to the output file
    Add-Content -Path $outputFile -Value $filePath
    Add-Content -Path $outputFile -Value ""

    # Write the file content to the output file
    Add-Content -Path $outputFile -Value $fileContent
    Add-Content -Path $outputFile -Value ""
}
