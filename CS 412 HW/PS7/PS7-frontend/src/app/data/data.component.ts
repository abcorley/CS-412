import {Component, Input} from '@angular/core';
import {Response} from "../interfaces/Search";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input() response: Response | undefined;

}
