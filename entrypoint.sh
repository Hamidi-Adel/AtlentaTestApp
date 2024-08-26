#!/bin/sh

python manage.py makemigrations
python manage.py migrate --no-input
python manage.py collectstatic --no-input

# Start the Gunicorn server
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000 -w 2