import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  imports: [CommonModule],
  templateUrl: './account-statement.html',
  styleUrl: './account-statement.css'
})
export class AccountStatement {
    transactions = [
    { type: 'Income', date: '2025-07-01', description: 'Salary', amount: 5000 },
    { type: 'Expense', date: '2025-07-05', description: 'Rent', amount: 1500 },
    { type: 'Income', date: '2025-07-10', description: 'Freelance', amount: 1200 },
    { type: 'Expense', date: '2025-07-15', description: 'Groceries', amount: 600 },
  ];

}
