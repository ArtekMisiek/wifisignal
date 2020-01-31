import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-wifi-form',
  templateUrl: './wifi-form.component.html',
  styleUrls: ['./wifi-form.component.scss']
})
export class WifiFormComponent implements OnInit {
  @Output() encryptionChange = new EventEmitter<string>();
  @Output() networkChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();
  @Output() checkboxHiddenChange = new EventEmitter<boolean>();

  ALL_ENCTYPTION_METHODS: Array<any> = [
    {value: 'WPA2 + AES' , name: 'WPA2 + AES'},
    {value: 'WPA + AES', name: 'WPA + AES'},
    {value: 'WPA + TKIP/AES', name: 'WPA + TKIP/AES'},
    {value: 'WPA + TKIP', name: 'WPA + TKIP'},
    {value: 'WEP', name: 'WEP'},
    {value: 'none', name: 'Open Network (no security)'},
    {value: 'unknown', name: 'I don\'t know'},
  ]

  sEncryptionMethod: string;
  sNetworkName: string;
  sPassword: string;
  bWifiHidden: boolean = false;

  constructor(private data: SharedService) { }

  ngOnInit() {
  }

  onEncryptionChange(event) {
    this.sEncryptionMethod = event.value;
    
    this.dataChange()
  }

  onNetworkChange(event) {
    this.sNetworkName = event.target.value;
    this.networkChange.emit(this.sNetworkName);
  }

  onPasswordChange(event) {
    this.sPassword = event.target.value;
    this.passwordChange.emit(this.sPassword);
  }

  onCheckboxHiddenChange(event) {
    this.bWifiHidden = event.checked;
    this.checkboxHiddenChange.emit(this.bWifiHidden);
  }

  dataChange(){
    this.data.dataHasChanged(this.sEncryptionMethod, this.sNetworkName, this.sPassword, this.bWifiHidden);
  }
}
