import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from "../interfaces/Search";

@Injectable({
  providedIn: 'root'
})
export class TMDBService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  nodeEndpoint = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  getMovieSearchResults(search: string): Observable<Response> {
    return this.httpClient.post<Response>(this.nodeEndpoint, {search: search}, this.httpOptions);
  }
}
