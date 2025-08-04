import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fees } from '../../../../service/fees';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addexpense',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addexpense.html',
  styleUrl: './addexpense.css'
})
export class Addexpense {

  private _FormBuilder = inject(FormBuilder)
  private _ToastrService = inject(ToastrService)
  private readonly _Fees = inject(Fees)
  ExpenseForm: FormGroup = this._FormBuilder.group({
    amount: [null, [Validators.required, Validators.min(1)]],
    date: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', [Validators.required]],
    paidBy: ['']
  });
onSubmit() {
  if (this.ExpenseForm.valid) {
    this._Fees.addExpense(this.ExpenseForm.value).subscribe({
      next: (res) => {
        console.log(res);

        this._ToastrService.success('Expense added successfully!', 'Success');
        this.ExpenseForm.reset(); // clear form
      },
      error: (err) => {
        console.error(err);
        this._ToastrService.error('Something went wrong.', 'Error');
      }
    });
  }
}


}
