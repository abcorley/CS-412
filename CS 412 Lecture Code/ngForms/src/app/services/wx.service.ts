import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather'
import {WeatherResponse} from '../interfaces/Weather'

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.baseURL
  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, lon: number): Observable<WeatherResponse> {
    const url = `${API.baseURL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API.apiKey}&units=${API.units}`;
    return this.http.get<WeatherResponse>(url);
  }
  getWeatherX(city: string) {
    //return canned values for testing
  }
  getWeatherByCity(city: string, units: string = 'imperial') {
    console.log(`in getWeatherByCity `)
    return this.http.get(API.baseURL + city + '&units=' + units + '&appid='+ API.apiKey);

  }
  getWeatherByFormGroup(form: FormGroup) {
    console.log(`in getWeatherByCity `);
    let city = form.value.cityControl;
    let units = form.value.unitsControl;
    return this.http.get(API.baseURL + form.value.cityControl + '&units=' + units + '&appid=' + API.apiKey);

  }
}
