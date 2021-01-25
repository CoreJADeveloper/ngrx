import { IPatient } from './../../../core/interface/patient.interface';
import { ActionFactory, ActionTemplate } from './../../../core/redux/action.factory';

export enum PatientActionTypes {
    PATIENT_FETCH = '[PATIENT] FETCH',
    PATIENT_FETCH_SUCCESS = '[PATIENT] SUCCESS'
}

export let patientActionFactory = new ActionFactory<PatientActionTypes>();

export interface PatientFetch {
    fetch: boolean
}

export interface PatientFetchSuccess {
    patinet: IPatient
}

export type All =
    | ActionTemplate<PatientFetch>
    | ActionTemplate<PatientFetchSuccess>;