@echo off
cd /d "%~dp0"
echo ============================================
echo   Publication du portfolio sur GitHub
echo ============================================
echo.
git add -A
git commit -m "Mise a jour du portfolio"
git push
echo.
echo ---- Termine. Tu peux fermer cette fenetre. ----
pause
