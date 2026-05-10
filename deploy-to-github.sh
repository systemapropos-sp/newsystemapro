#!/bin/bash
# ============================================================
# SystemaPro — Deploy Script to GitHub
# ============================================================
# Uso:
#   1. Extrae SystemaPro.zip en tu computadora
#   2. Abre terminal en esa carpeta
#   3. Ejecuta: bash deploy-to-github.sh
# ============================================================

set -e

REPO_NAME="${1:-systemapro}"
GITHUB_USER="${2:-}"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║         SystemaPro — Deploy to GitHub                  ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    echo "   Asegúrate de ejecutar este script desde la carpeta raíz del proyecto."
    exit 1
fi

if [ -z "$GITHUB_USER" ]; then
    echo -n "📝 Introduce tu usuario de GitHub: "
    read GITHUB_USER
fi

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Error: Se necesita un usuario de GitHub."
    exit 1
fi

echo ""
echo "📦 Preparando proyecto para subir a: github.com/$GITHUB_USER/$REPO_NAME"
echo ""

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    echo "📝 Creando .gitignore..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules
.pnp
.pnp.js

# Build
/dist
/build

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode
.idea
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Cache
.cache
.temp
*.tsbuildinfo
EOF
fi

# Inicializar git
echo "🔧 Inicializando repositorio git..."
git init

git config user.email "deploy@systemapro.local"
git config user.name "SystemaPro Deploy"

# Agregar todo
echo "📁 Agregando archivos..."
git add .

# Commit
echo "💾 Creando commit inicial..."
git commit -m "🚀 SystemaPro v5 — Initial commit

Features:
- 20 digital systems (8 PWA, 8 Digital Menus, 4 Landings)
- 12 screenshots per product with lightbox gallery
- Bilingual EN/ES
- Dark/Light theme toggle
- Neon particles, typewriter effects, animated counters
- Horizontal scroll catalog
- Countdown timer, testimonials, FAQ
- Individual product pages with demo mode

Tech stack: React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui"

# Crear rama main
echo "🌿 Configurando rama main..."
git branch -M main

# Configurar remote
echo "🔗 Configurando remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║  ✅ Listo para subir!                                   ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "Ahora ejecuta este comando para hacer push:"
echo ""
echo "   git push -u origin main"
echo ""
echo "Cuando pida contraseña, usa tu GitHub Personal Access Token:"
echo "   $GITHUB_PAT"
echo ""
echo "O si prefieres, configura el token en la URL del remote:"
echo ""
echo "   git remote set-url origin https://$GITHUB_USER:$GITHUB_PAT@github.com/$GITHUB_USER/$REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "──────────────────────────────────────────────────────────"
echo ""
