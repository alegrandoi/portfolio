# Script de ayuda para gestionar Docker del Portfolio
# Uso: .\docker-helper.ps1 [comando]

param(
    [Parameter(Position=0)]
    [ValidateSet('build', 'start', 'stop', 'restart', 'logs', 'clean', 'help')]
    [string]$Command = 'help'
)

function Show-Help {
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host "  Portfolio - Docker Helper Script" -ForegroundColor Cyan
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Comandos disponibles:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  build    " -ForegroundColor Green -NoNewline
    Write-Host "- Construir la imagen Docker"
    Write-Host "  start    " -ForegroundColor Green -NoNewline
    Write-Host "- Iniciar el contenedor (http://localhost:3000)"
    Write-Host "  stop     " -ForegroundColor Green -NoNewline
    Write-Host "- Detener el contenedor"
    Write-Host "  restart  " -ForegroundColor Green -NoNewline
    Write-Host "- Reconstruir y reiniciar"
    Write-Host "  logs     " -ForegroundColor Green -NoNewline
    Write-Host "- Ver logs en tiempo real"
    Write-Host "  clean    " -ForegroundColor Green -NoNewline
    Write-Host "- Limpiar contenedores e imágenes"
    Write-Host "  help     " -ForegroundColor Green -NoNewline
    Write-Host "- Mostrar esta ayuda"
    Write-Host ""
    Write-Host "Ejemplos:" -ForegroundColor Yellow
    Write-Host "  .\docker-helper.ps1 build"
    Write-Host "  .\docker-helper.ps1 start"
    Write-Host "  .\docker-helper.ps1 restart"
    Write-Host ""
}

function Build-Image {
    Write-Host "🔨 Construyendo imagen Docker..." -ForegroundColor Cyan
    docker-compose build --no-cache
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Imagen construida exitosamente!" -ForegroundColor Green
    } else {
        Write-Host "❌ Error al construir la imagen" -ForegroundColor Red
    }
}

function Start-Container {
    Write-Host "🚀 Iniciando contenedor..." -ForegroundColor Cyan
    docker-compose up -d
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Contenedor iniciado!" -ForegroundColor Green
        Write-Host "📱 Aplicación disponible en: http://localhost:3000" -ForegroundColor Yellow
        Write-Host "📋 Ver logs: .\docker-helper.ps1 logs" -ForegroundColor Gray
    } else {
        Write-Host "❌ Error al iniciar el contenedor" -ForegroundColor Red
    }
}

function Stop-Container {
    Write-Host "🛑 Deteniendo contenedor..." -ForegroundColor Cyan
    docker-compose down
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Contenedor detenido!" -ForegroundColor Green
    } else {
        Write-Host "❌ Error al detener el contenedor" -ForegroundColor Red
    }
}

function Restart-Container {
    Write-Host "🔄 Reiniciando contenedor..." -ForegroundColor Cyan
    Stop-Container
    Build-Image
    Start-Container
}

function Show-Logs {
    Write-Host "📋 Mostrando logs (Ctrl+C para salir)..." -ForegroundColor Cyan
    docker-compose logs -f
}

function Clean-Docker {
    Write-Host "🧹 Limpiando Docker..." -ForegroundColor Cyan
    docker-compose down -v
    docker system prune -f
    Write-Host "✅ Limpieza completada!" -ForegroundColor Green
}

# Ejecutar comando
switch ($Command) {
    'build'   { Build-Image }
    'start'   { Start-Container }
    'stop'    { Stop-Container }
    'restart' { Restart-Container }
    'logs'    { Show-Logs }
    'clean'   { Clean-Docker }
    'help'    { Show-Help }
    default   { Show-Help }
}
