import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    GetAllArticles: string;
    cat:string;
    cat2:string;

  constructor(private http: HttpClient, public router: Router) {
    this.GetAllArticles = "https://e6fb0d34.ngrok.io/api/KB/GetArticles?getall=0&categ=1";
   }

   public getAllKbArticle() {
    return this.http.get(this.GetAllArticles);
}


public getPageByNumber(number:number){
this.cat="&Page="+number;
console.log("pagination"+this.cat);
return this.http.get(this.GetAllArticles+this.cat);
}


public getArticleBySearch(value:string,number:number){
this.cat2="&Page="+number+"&SearchString="+value;
console.log(this.cat2);
return this.http.get(this.GetAllArticles+this.cat2);
}
}
