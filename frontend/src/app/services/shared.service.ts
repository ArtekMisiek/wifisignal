import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WifiData } from '../models/wifi-data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  wifiData = new BehaviorSubject(new WifiData('', '', '', false));

  constructor() {}

  // dataHasChanged(data: WifiData) {
  //   this.WifiData.next(data);
  // }
}
