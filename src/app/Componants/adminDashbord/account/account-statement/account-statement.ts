import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Fees } from '../../../../service/fees';

@Component({
  selector: 'app-account-statement',
  imports: [CommonModule],
  templateUrl: './account-statement.html',
  styleUrl: './account-statement.css'
})
export class AccountStatement implements OnInit {
     totalRevenue: number = 0;
  totalExpenses: number = 0;
  netProfit: number = 0;
  paidFees: any[] = [];
  expenses: any[] = [];

private readonly reportService=inject(Fees)
  ngOnInit(): void {
    this.reportService.getAllreport().subscribe((res) => {
      this.totalRevenue = res.totalRevenue;
      this.totalExpenses = res.totalExpenses;
      this.netProfit = res.netProfit;
      this.paidFees = res.paidFees;
      this.expenses = res.expenses;
    });
  }
}
