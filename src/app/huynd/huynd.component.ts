import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-huynd',
  templateUrl: './huynd.component.html',
  styleUrl: './huynd.component.scss'
})
export class HuyndComponent {

  clientIp?: string;

  constructor(private _httpClient: HttpClient) {
    this._httpClient.get<any>('https://geolocation-db.com/json/').subscribe((response): void => {
      this.clientIp = response.IPv4;
    })
  }
}
