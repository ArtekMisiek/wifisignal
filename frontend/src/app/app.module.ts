import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { WifiFormComponent } from './components/wifi-form/wifi-form.component';

@NgModule({
  declarations: [AppComponent, HomeDashboardComponent, WifiFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
