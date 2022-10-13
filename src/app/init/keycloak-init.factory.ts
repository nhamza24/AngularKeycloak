export class KeycloakInit {
}
import {KeycloakAngularModule, KeycloakEventType, KeycloakService} from 'keycloak-angular';
export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () => {
     return keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'apps',
        clientId: 'angularApp',

      }
      ,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
        enableLogging: true,
        },
      bearerExcludedUrls:[],
      loadUserProfileAtStartUp: false
    });


  };

}
