import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakService, KeycloakAuthGuard} from 'keycloak-angular';
import {Observable} from "rxjs";

@Injectable(
 {providedIn: 'root'}
)
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected override readonly router: Router, protected override readonly keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        console.log("####### authenticated " + this.authenticated)
     this.keycloakAngular.login();
        return ;

      }
      console.log("####### no authentication " + this.authenticated)
      const requiredRoles = route.data['roles'];
      console.log("const requiredRoles = route.data['roles']  ", requiredRoles)
      if (!requiredRoles || requiredRoles.length === 0) {
        console.log("####### resolve true !requiredRoles || requiredRoles.length === 0")
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          console.log("####### resolve false because of !this.roles || this.roles.length === 0 ")
          window.alert("You don't have permission to view this page");
          resolve(false);
        }
        let granted: boolean = false;
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            break;
          }
        }
        console.log("####### resolve granted "+granted)
        if(granted==false){

          this.router.navigate(["/redirect"])
        }
        resolve(granted);
      }
    });
  }

}
