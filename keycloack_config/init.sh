#!/bin/sh
 java -jar /config/keycloak-config-cli-19.0.1.jar \
    --keycloak.url=http://localhost:8080 \
    --keycloak.ssl-verify=true \
    --keycloak.user=admin \
    --keycloak.password=admin \
    --keycloak.availability-check.timeout=120 \
    --keycloak.connect-timeout=10 \
    --import.files.locations=/config/keycloak_config.json

#./opt/keycloak/bin/kc.sh start-dev &  sleep 120 &&
