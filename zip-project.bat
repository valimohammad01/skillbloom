@echo off
echo Creating SkillBloom project zip file...
powershell Compress-Archive -Path "skillbloom" -DestinationPath "skillbloom.zip" -Force
echo SkillBloom project has been zipped successfully!
echo File: skillbloom.zip
pause 