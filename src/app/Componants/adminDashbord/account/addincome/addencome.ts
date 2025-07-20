import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addencome',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addencome.html',
  styleUrl: './addencome.css'
})
export class Addencome {
private _FormBuilder=inject(FormBuilder)
  IncomeForm : FormGroup = this._FormBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
  });
  onSubmit() {
    if (this.IncomeForm.valid) {
      console.log(this.IncomeForm.value);
      // Here you can add the logic to handle the form submission, like sending data to a server
    }
  }
}
