import { StorageService } from './pages/patient/service/storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './core/redux/app.reducer';
import { PatientEffect } from './pages/patient/effect/patient.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([PatientEffect])
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
