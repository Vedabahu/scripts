@echo off
Title Ludusavi Game Backup

set saveLocation=%USERPROFILE%\ludusavi-backup\ludusavi-backup.log

@echo ------------------------ > %saveLocation%
@echo       Backed Up On         >> %saveLocation%
@echo ------------------------ >> %saveLocation%
@echo: >> %saveLocation%
@echo Date:  %date% >> %saveLocation%
@echo Time: %time% >> %saveLocation%
@echo: >> %saveLocation%
@echo ------------------------ >> %saveLocation%
@echo: >> %saveLocation% 

echo Backing up the games

ludusavi backup --force --compression bzip2 --compression-level 9 --cloud-sync --sort status >> %saveLocation%

echo Done. Logs can be found at %saveLocation%

timeout /T 3