import { Component, inject } from '@angular/core';
import { Fees } from '../../../service/fees';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fees',
  imports: [CommonModule],
  templateUrl: './fees.html',
  styleUrl: './fees.css'
})
export class fees {

  fees: any[] = [];

 private readonly feeService= inject(Fees)

  ngOnInit(): void {
    this.feeService.getStudentFees().subscribe({
      next: (res) => this.fees = res,
      error: (err) => console.error('Error loading fees:', err)
    });
  }

  isPaid(): boolean {
    return this.fees.some(f => f.status === 'Paid');
  }

}
