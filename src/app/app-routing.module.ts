import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {AuthGuard} from "./guard/auth.guard";
import {AppComponent} from "./app.component";
import {LoginRedirectComponent} from "./login-redirect/login-redirect.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'prod', component: ProductComponent , canActivate: [AuthGuard] , data: {
      roles: ['user']
    } },
  { path: 'redirect', component: LoginRedirectComponent  },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 // ,providers:[AuthGuard, and others guards]
})
export class AppRoutingModule { }
