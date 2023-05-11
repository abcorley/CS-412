import { Component } from '@angular/core';
import {TMDBService} from "../services/tmdb.service";
import {FormControl, Validators} from "@angular/forms";
import {Response} from "../interfaces/Search";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  search: string = '';

  response: Response | undefined;
  constructor(private tmdbService: TMDBService,) { }

  searchControl: FormControl = new FormControl('',
    [Validators.required, Validators.minLength(1)]);

  getSearchResults(){
    this.search = this.searchControl.value;
    this.tmdbService.getMovieSearchResults(this.search).subscribe(response => {
      this.response = response;
    })
  }
}
