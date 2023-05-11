import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {config as API} from '../config/openweather';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = API.baseURL
  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    // returns an observable
    console.log(`Got ${city}`);
    return this.http.get(API.baseURL + city+ '&appid=' + API.apiKey + '');

  }
  getWeatherX(city: string) {
    //return cqnned values for testing
  }
  getWeatherByCity(city: string, units: string = 'imperial') {
    console.log(`in getWeatherByCity `)
    return this.http.get(API.baseURL + city + '&units=' + units + '&appid='+ API.apiKey);

  }
  getWeatherByFormGroup(form: FormGroup) {
    console.log(`in getWeatherByCity `)
    let city = form.value.cityControl;
    let units = form.value.unitsControl;
    return this.http.get(API.baseURL + form.value.cityControl + '&units=' + units + '&appid=' + API.apiKey);

  }
}
