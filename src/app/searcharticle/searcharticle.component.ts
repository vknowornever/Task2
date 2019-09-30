import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcharticle',
  templateUrl: './searcharticle.component.html',
  styleUrls: ['./searcharticle.component.css']
})
export class SearcharticleComponent implements OnInit {
  @Output() emit2=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSearchClick(searchTerm){

    this.emit2.emit(searchTerm);

    console.log(searchTerm);

    }
}
