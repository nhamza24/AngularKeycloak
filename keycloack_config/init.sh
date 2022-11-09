#!/bin/sh
sleep 1&&java -jar /config/keycloak-config-cli-19.0.1.jar --import.files.locations=/config/keycloak_config.json --keycloak.url=http://localhost:8080 --keycloak.ssl-verify=true --keycloak.user=admin --keycloak.password=admin --keycloak.availability-check.timeout=120 --keycloak.connect-timeout=10 
