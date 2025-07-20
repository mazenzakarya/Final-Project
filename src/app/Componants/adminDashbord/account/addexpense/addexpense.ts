import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addexpense.html',
  styleUrl: './addexpense.css'
})
export class Addexpense {

  private _FormBuilder=inject(FormBuilder)
  ExpenseForm : FormGroup = this._FormBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
  });
  onSubmit() {
    if (this.ExpenseForm.valid) {
      console.log(this.ExpenseForm.value);
      // Here you can add the logic to handle the form submission, like sending data to a server
    }
  }

}
