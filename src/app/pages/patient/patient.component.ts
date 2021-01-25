import { Observable } from 'rxjs';
import { initialPatient, IPatient } from 'src/app/core/interface/patient.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/redux/app.reducer';
import { TemplateType } from 'src/app/core/enums/template-type';
import { patientActionFactory, PatientActionTypes, PatientFetch } from './action/patient.action';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  public TemplateType = TemplateType;
  public selectedTemplateType = TemplateType.Empty;
  public patient: IPatient = initialPatient;

  public patient$: Observable<any> = this.store.select((state) => state.patient);

  constructor(
    private store: Store<AppState>
  ) {
    // this.store.dispatch(patientActionFactory.create<PatientFetch>(PatientActionTypes.PATIENT_FETCH, { fetch: true }));
  }

  ngOnInit(): void {
    this.patient$.subscribe((res) => {
      // console.log(res);
    })
  }

  editPatient(edit: boolean) {
    if (edit) {
      this.selectedTemplateType = TemplateType.Edit;
    }
  }

}
