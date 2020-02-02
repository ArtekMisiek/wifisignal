import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-wifi-form',
  templateUrl: './wifi-form.component.html',
  styleUrls: ['./wifi-form.component.scss']
})
export class WifiFormComponent implements OnInit {
  ALL_ENCTYPTION_METHODS: Array<any> = [
    { value: 'WPA', name: 'WPA/WPA2' },
    { value: 'WEP', name: 'WEP' },
    { value: 'nopass', name: 'Open Network (no security)' }
    // { value: 'omit', name: "I don't know" }
  ];

  sEncryptionMethod: string = '';
  sNetworkName: string = '';
  sPassword: string = '';
  bWifiHidden = false;

  constructor(private wifiDataService: SharedService) {}

  ngOnInit() {}

  onEncryptionChange(event) {
    this.sEncryptionMethod = event.value;
    this.dataChange();
  }

  onNetworkChange(event) {
    // this.sNetworkName = this.escapeRegExp(event.target.value);
    this.sNetworkName = event.target.value;
    this.dataChange();
  }

  onPasswordChange(event) {
    // this.sPassword = this.escapeRegExp(event.target.value);
    this.sPassword = event.target.value;
    this.dataChange();
  }

  onCheckboxHiddenChange(event) {
    this.bWifiHidden = event.checked;
    this.dataChange();
  }

  dataChange() {
    this.wifiDataService.wifiData.next(
      Object.assign(this.wifiDataService.wifiData.value, {
        encryptionMethod: this.sEncryptionMethod,
        ssidName: this.sNetworkName,
        password: this.sPassword,
        isHidden: this.bWifiHidden
      })
    );
  }

  escapeRegExp(text) {
    // TODO: iOS without escaping chars (Android also works without)
    return text.replace(/[.*+?^$\',:;"[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  downloadQRCode() {
    let imageName;
    this.sNetworkName !== ''
      ? (imageName = this.sNetworkName + '.png')
      : (this.sNetworkName = 'default.png');
    const canvasElement = document
      .getElementById('wifi-qr-code')
      .getElementsByTagName('canvas')[0];
    const data64 = canvasElement.toDataURL();
    const imageBlob = this.dataURItoBlob(data64);

    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

    const linkElement = document.createElement('a');
    const url = URL.createObjectURL(imageFile);
    linkElement.setAttribute('href', url);
    linkElement.setAttribute('download', imageName);
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false
    });
    linkElement.dispatchEvent(clickEvent);
  }

  dataURItoBlob(dataURI) {
    // const byteString = window.atob(dataURI);
    // const arrayBuffer = new ArrayBuffer(byteString.length);
    // const int8Array = new Uint8Array(arrayBuffer);
    // for (let i = 0; i < byteString.length; i++) {
    //   int8Array[i] = byteString.charCodeAt(i);
    // }
    const blob = new Blob([dataURI], { type: 'image/png' });
    return blob;
  }
}
