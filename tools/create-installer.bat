@echo off
echo Relative path  "%~dp0"
set /p _path="Path "
echo "%_path%"

set /p _out="Output path "
echo "%_out%"

set /p _icon="icon path "
echo "%_icon%"

set /p _name="name of app "
echo "%_name%"

set /p _pro="Product name "
echo "%_pro%"

set /p _auth="Authors's "
echo "%_auth%"

set /p _desc="Description of '%_name%' "
echo "%_desc%"

set /p _title="Title "
echo "%_title%"

set /p _version="'%_name%' version "
echo "%_version%"

@echo off
CMD /C node installer.js """%_path%""" """%_out%""" """%_name%""" """%_pro%""" """%_auth%""" """%_desc%""" """%_title%""" """_icon""" """%_version%"""
pause
