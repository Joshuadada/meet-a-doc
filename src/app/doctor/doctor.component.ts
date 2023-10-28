import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
  verifyPatientForm!: FormGroup;

  ngOnInit(): void {
    initFlowbite();
  }
}
