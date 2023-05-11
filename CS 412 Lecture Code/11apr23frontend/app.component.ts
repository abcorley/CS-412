import { Component } from '@angular/core';
import {WebserviceService} from "./webservice.service";
import {Response} from "./response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the11apr23frontend';
  aString: string | undefined;
  aStringReversed : string | undefined;

  constructor(private webService: WebserviceService) {
}

  getString() {
    this.webService.getString(this.aString).subscribe(output => {
      this.aStringReversed = output.reversed;
    });
  }
}
