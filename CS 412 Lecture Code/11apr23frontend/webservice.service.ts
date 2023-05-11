import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "./response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) { }

  getString(inputString: string | undefined) : Observable<Response> {
    return this.http.get<Response>('http://localhost:3000/' + inputString)
  }
}

