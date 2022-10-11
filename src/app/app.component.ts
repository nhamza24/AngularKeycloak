import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


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
export class AppComponent implements OnInit{

  constructor(private httpClient:HttpClient) {
  }
  title = 'AngularKeyclock';

  ngOnInit(){
this.httpClient.get('http://localhost:3000/posts').subscribe(data=>{
  let data1 = <Entry[]>data;
  console.log(data1);
  console.log(data1[0].title);
  this.title=data1[0].title;
})
  }
}
