import { Component, OnInit } from '@angular/core';
import { Kbarticles } from '../kbarticles';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  kbarticles:Kbarticles[];
  arr:Kbarticles[];

  constructor(public _data:ServiceService) { }

  ngOnInit() {
    this.getArticles();
  }
  getArticles() {
    //  this.spinner=false;
    this._data.getAllKbArticle().subscribe(

        (data: Kbarticles[]) => {

            this.arr = data;
        },
    );

}
}
