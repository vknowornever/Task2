import { Routes,RouterModule,} from "@angular/router";
  import { DisplayComponent } from './display/display.component';
const arr : Routes=[
  {path:'display',component:DisplayComponent},

];

export const routing=RouterModule.forRoot(arr);
