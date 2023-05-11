import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {WeatherResponse} from "../interfaces/Weather";
import {config as API} from "../config/openweather";
import {HttpClient} from "@angular/common/http";
import {Geocode} from "../interfaces/geocode";

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  getGeocode(city: string, state: string): Observable<Geocode | undefined> {
    const url = `${API.geoURL}?q=${city},${state},usa&appid=${API.apiKey}`;
    console.log(`URL in service: ${url}`)
    return this.http.get<Geocode[]>(url)
      .pipe(
        map((response) => (response.length > 0 ? response[0] : undefined)),

      )
  }
  constructor(private http: HttpClient) { }
}
