import { Component, OnInit } from '@angular/core';
import { Kbarticles } from '../kbarticles';
import { ServiceService } from '../service.service';
import { PagerInfo } from '../pager-info';
//import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-display-articles',
  templateUrl: './display-articles.component.html',
  styleUrls: ['./display-articles.component.css']
})
export class DisplayArticlesComponent implements OnInit {
kbarticles:Kbarticles;
arr:Kbarticles[];
all_articles:Kbarticles[];
page:number =1;
Page: PagerInfo;
totalPages: number;
totalItems: number;
currentPage: number;
editarticle:Kbarticles;
displayArticle: Kbarticles;
edit:boolean=false;
//editForm: FormGroup;
catid: number;

 articleId: number;
 articleName: string;
content: string;
previewContent: string;
categoryId: number;
categoryName: string;
createdBy: number;
 createdByName: string;
 createdDate: string;
 modifiedBy: number;
  modifiedByName: string;
  modifiedDate: string;
  constructor(public _data: ServiceService) { }

  ngOnInit() {
    this.getArticles();

  }

getArticles() {
    this._data.getAllKbArticle().subscribe(

        (data: Kbarticles[]) => {
console.log(data);
this.Page = data['pagerInfo'];
this.totalPages = this.Page.totalPages;
this.totalItems = this.Page.totalItems;
            this.arr = data;
            this.all_articles=this.arr['kbArticles'];

            console.log(this.all_articles);
        },
    );

}
onReadMore(item){
  this._data.getAllKbArticle().subscribe(

    (data: Kbarticles[]) => {
console.log(data);
        this.arr = data;
        this.all_articles = this.arr['kbArticles'];
        for(var i=0;i<this.all_articles.length;i++){
        if(this.all_articles[i].articleId==item.articleId)
      console.log(this.all_articles[i]);
        this.editarticle=this.all_articles[i];
        }
    },
);

}
onEditArticle(item){
  this._data.getAllKbArticle().subscribe(

    (data: Kbarticles[]) => {
console.log(data);
        this.arr = data;
        this.all_articles=this.arr['kbArticles'];
        for(var i=0;i<this.all_articles.length;i++){
        if(this.all_articles[i].articleId==item.articleId)
      console.log(this.all_articles[i]);
      this.edit=true;
        this.editarticle=this.all_articles[i];
        }

    },

);


}
loadPage(number: number) {

  number = this.page;

console.log(this.page);

  if (number != 0) {

      this._data.getPageByNumber(this.page).subscribe(

          (data: Kbarticles[]) => {

              this.arr = data;
console.log("pagedata")
              window.scroll(0, 0);

              this.all_articles = this.arr['kbArticles'];

          });

  }





}

onSearchClick(value) {
  let number=this.page;
  if (value != "") {
      this._data.getArticleBySearch(value,number).subscribe(
          (data: Kbarticles[]) => {
              this.arr = data;
              this.all_articles = this.arr['kbArticles'];



          });
        }
}
}
