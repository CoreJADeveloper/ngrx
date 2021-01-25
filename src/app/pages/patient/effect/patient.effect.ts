import { STORAGE_KEY } from './../../../core/constant/storage';
import { ActionTemplate } from './../../../core/redux/action.factory';
import { PatientFetch, PatientFetchSuccess } from './../action/patient.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { patientActionFactory, PatientActionTypes } from '../action/patient.action';
import { StorageService } from '../service/storage.service';

@Injectable()
export class PatientEffect {
    constructor(
        private actions: Actions,
        private storageService: StorageService
    ) { }

    @Effect()
    patient: Observable<any> = this.actions.pipe(
        ofType(PatientActionTypes.PATIENT_FETCH),
        tap((action: ActionTemplate<PatientFetch>) => {
            const patient: any = this.storageService.get(STORAGE_KEY, {});
            return patientActionFactory.create<PatientFetchSuccess>(PatientActionTypes.PATIENT_FETCH_SUCCESS, patient);
        })
    );
}