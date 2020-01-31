import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  // WIFI:S:MyNetWork;T:WPA2;P:fsdofjddsfjlgmfdgds;H:true;
  qrCodeText;
  encryptionMethod;

  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.data.subscribe(encryptionMethod => this.encryptionMethod = encryptionMethod)
  }



}
