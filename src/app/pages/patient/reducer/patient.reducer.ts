import { initialPatient, IPatient } from 'src/app/core/interface/patient.interface';
import { All, PatientActionTypes } from '../action/patient.action';

export function patientReducer(state: IPatient = initialPatient, action: All) {
    switch (action.type) {
        case PatientActionTypes.PATIENT_FETCH:
        case PatientActionTypes.PATIENT_FETCH_SUCCESS: {
            return state;
        }
        default: {
            return state;
        }
    }
}