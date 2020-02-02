import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { WifiData } from 'src/app/models/wifi-data';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, OnDestroy {
  private wifiDataSubscription: Subscription;

  // WIFI:S:MyNetWork;T:WPA2;P:fsdofjddsfjlgmfdgds;H:true;
  qrCodeText;
  encryptionMethod;
  wifiData: WifiData;

  constructor(private wifiDataService: SharedService) {}

  ngOnInit() {
    this.wifiDataSubscription = this.wifiDataService.wifiData.subscribe(
      wifiData => {
        this.wifiData = wifiData;
        this.qrCodeText =
          'WIFI:S:' +
          this.wifiData.ssidName +
          ';T:' +
          this.wifiData.encryptionMethod +
          ';P:' +
          this.wifiData.password +
          ';H:' +
          this.wifiData.isHidden +
          ';;';
      }
    );
  }

  ngOnDestroy(): void {
    this.wifiDataSubscription.unsubscribe();
  }
}
