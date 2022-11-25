#!/bin/sh
#wait for keycloak before running backend
set -e
seconds="$1"
until curl -s http://keycloak:8080 > dev/null; do
  echo "keycloak is unavailable - connection will be retried in $seconds seconds"
  sleep $seconds
done
echo "keycloak is up - boot up backend"
java -jar endpunktdemo.jar
