import {Component} from '@angular/core';
import {WxServiceService} from "./services/wx.service";
import {GeocodeService} from "./services/geocode.service";
import {WeatherResponse} from "./interfaces/Weather";
import {Geocode} from "./interfaces/geocode";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './forms/way3.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularForms';
  weatherData?: WeatherResponse;
  city!: string;
  units: string = "imperial";
  temperature?: number;
  humidity?: number;
  pressure?: number;
  state!: string;

  getWeather() {
    this.wxService.getCurrentWeather(42.4, -71.0).subscribe(
      response => {
        this.temperature = response.current.temp;
        this.humidity = response.current.humidity;
        this.pressure = response.current.pressure;
      }
    );
  }

  getWeatherByCity() : void {
    this.geoCode.getGeocode(this.city, this.state).subscribe(geo => {
      const lat = geo?.lat ?? 42;   //BOS, nullish coalescing
      const lon = geo?.lon ?? -71;  //BOS, nullish coalescing
      this.wxService.getCurrentWeather(lat, lon).subscribe(response => {
        this.temperature = response.current.temp;
        this.humidity = response.current.humidity;
        this.pressure = response.current.pressure;
      })
    })
  }

  constructor(private wxService: WxServiceService, //dependency injection
              private geoCode: GeocodeService,
              private form: FormBuilder) {

  }

  //Forms
  cityControl2: FormControl = new FormControl('boston',
    [Validators.required,Validators.max(6)]);
  stateControl2: FormControl = new FormControl('ma');

  getWeatherByCityWay2() {
    //Get the city and state vals from the form
    this.city = this.cityControl2.value;
    this.state = this.stateControl2.value;
    this.getWeatherByCity();
  }

  weatherFormGroup = this.form.group({
    cityControl3: ['boston', Validators.required],
    stateControl3: [''],
    subform: this.form.group({
      detail: ['']
    })
  })

  getWeatherByCityWay3() {
    this.city = this.weatherFormGroup.get('cityControl3')?.value ?? 'Boston';
    this.state = this.weatherFormGroup.get('stateControl3')?.value ?? 'MA';
    this.getWeatherByCity();
  }
}
