import { ActionFactory, ActionTemplate } from "src/app/core/redux/action.factory";
import { IPatient } from "src/app/core/interface/patient.interface";

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