echo off
rem ** CodeDocRelease.cmd
rem ** There must be no space on either side of "=".
rem ** md requires folder to end with "\".
if %1%. == . goto Error

set toPath=%1%
call ../../../MkDir.cmd %toPath%\
echo LJCNavPHPCodeDoc.html
copy LJCNavPHPCodeDoc.html %toPath%
echo LJCPHPCodeDoc.html
copy LJCPHPCodeDoc.html %toPath%
echo ReadMeLJCPHPCodeDoc.txt
copy ReadMeLJCPHPCodeDoc.txt %toPath%

set folder=CSS
call ../../../MkDir.cmd %toPath%\%folder%
copy %folder% %toPath%\%folder%

set folder=HTML
call ../../../MkDir.cmd %toPath%\%folder%
xcopy /s /y %folder% %toPath%\%folder%

set folder=Script
call ../../../MkDir.cmd %toPath%\%folder%
copy %folder% %toPath%\%folder%

goto Exit
:Error
echo LJCPHPCodeDocRelease.cmd: Missing parameter 1 - toFolder.
pause
:Exit
