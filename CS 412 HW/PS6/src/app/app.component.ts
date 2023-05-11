import { Component } from '@angular/core';
import {MOVIES} from "./mock-Movies";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Search';
  movies = MOVIES;
  display = false;
  show(search:string){
    if(search === 'Star Wars'){
      this.display=true;
    } else{
      this.display=false;
    }
  }
}
