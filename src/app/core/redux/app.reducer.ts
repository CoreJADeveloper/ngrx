import { patientReducer } from '../../pages/patient/reducer/patient.reducer';
import { IPatient } from "../interface/patient.interface";

export interface AppState {
    patient: IPatient
};

export const appReducers = {
    patient: patientReducer
};