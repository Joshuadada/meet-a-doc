import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
  verifyPatientForm!: FormGroup;

  ngOnInit(): void {
    this.initVerifyPatientForm();
  }

  initVerifyPatientForm() {
    this.verifyPatientForm = new FormGroup({
      ssnId: new FormControl([]),
    });
  }
}
