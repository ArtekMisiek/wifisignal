import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';

import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { WifiFormComponent } from './components/wifi-form/wifi-form.component';

import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeComponent } from './components/qr-code/qr-code.component';

@NgModule({
  declarations: [AppComponent, HomeDashboardComponent, WifiFormComponent, QrCodeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    QRCodeModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
