import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";


interface Entry{
id: string;
title:string;
author:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private  readonly keycloakAngular: KeycloakService) {
  }
  title = 'AngularKeyclock';


  onClick() {
this.keycloakAngular.logout("http://localhost:4200/");
    console.log(window.sessionStorage)
    console.log(window.localStorage)
    console.log("cookies"+document.cookie)
window.sessionStorage.removeItem('isLoggedIn');

//window.caches.
  }
}
