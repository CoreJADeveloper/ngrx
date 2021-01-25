import { PatientComponent } from './patient.component';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient.routing.module';

import { StorageService } from './service/storage.service';
import { patientReducer } from './reducer/patient.reducer';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PatientRoutingModule,
        StoreModule.forFeature('patient', patientReducer),
    ],
    declarations: [
        PatientComponent
    ],
    providers: [
        StorageService
    ]
})
export class PatientModule { }