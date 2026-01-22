# Script to convert TypeScript files to JavaScript

$rootPath = "C:\Users\shuim\Desktop\Bespoke prestige\bespoke-prestige-new\bespoke-prestige"

# Function to convert TypeScript to JavaScript
function Convert-TsToJs {
    param (
        [string]$filePath,
        [string]$outputPath
    )
    
    $content = Get-Content -Path $filePath -Raw
    
    # Remove type annotations from function parameters
    $content = $content -replace '(\w+):\s*React\.ComponentProps<[^>]+>', '$1'
    $content = $content -replace '(\w+):\s*React\.[A-Za-z<>\.]+', '$1'
    $content = $content -replace '(\w+):\s*[A-Za-z]+\[?\]?', '$1'
    $content = $content -replace ':\s*string\b', ''
    $content = $content -replace ':\s*number\b', ''
    $content = $content -replace ':\s*boolean\b', ''
    $content = $content -replace ':\s*any\b', ''
    $content = $content -replace ':\s*void\b', ''
    
    # Remove interface and type definitions  
    $content = $content -replace 'interface\s+\w+\s*\{[^}]*\}\s*', ''
    $content = $content -replace 'type\s+\w+\s*=\s*[^;]+;\s*', ''
    $content = $content -replace 'import\s+type\s+\{[^}]+\}\s+from[^;]+;?\s*', ''
    $content = $content -replace ',?\s*type\s+[A-Za-z]+', ''
    
    # Remove VariantProps type
    $content = $content -replace '&\s*VariantProps<[^>]+>', ''
    $content = $content -replace 'VariantProps<[^>]+>', ''
    
    # Remove return type annotations
    $content = $content -replace '\):\s*[A-Za-z<>\.]+\s*\{', ') {'
    $content = $content -replace '\):\s*JSX\.Element\s*\{', ') {'
    
    # Clean up extra whitespace
    $content = $content -replace '\n\n\n+', "`n`n"
    
    # Write to output file
    $content | Set-Content -Path $outputPath -NoNewline
}

# Convert all .tsx files in components/css
Get-ChildItem -Path "$rootPath\components\ui" -Filter "*.tsx" | ForEach-Object {
    $jsxPath = $_.FullName -replace '\.tsx$', '.jsx'
    Write-Host "Converting $($_.Name) to $($_.BaseName).jsx"
    Convert-TsToJs -filePath $_.FullName -outputPath $jsxPath
}

Write-Host "Conversion complete!"
