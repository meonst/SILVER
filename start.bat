@echo off
start cmd /k "virt\scripts\activate & cd backend & py manage.py runserver"
start cmd /k "cd frontend & npm start"


exit