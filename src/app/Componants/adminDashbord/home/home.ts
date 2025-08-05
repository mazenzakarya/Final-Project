import { CommonModule } from '@angular/common';
import { Course } from '../../../service/course';
import { Fees } from '../../../service/fees';
import { Group } from '../../../service/group';
import { HomeWork } from '../../../service/home-work';
import { Counter } from './../../../service/counter';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName: string = '';
  stdCount: number = 0;
  instCount: number = 0;
  groupCount: number = 0;
  AssignmentsCount: number = 0;
  coursCount: number = 0;
  totalIncomeCount: number = 0;
  totalExpensesCount: number = 0;
  totalNetProfitCount: number = 0;
  private readonly _counter = inject(Counter)
  private readonly _Group = inject(Group)
  private readonly HomeWork = inject(HomeWork)
  private readonly Course = inject(Course)
  private readonly Fees = inject(Fees)

  getStudents() {
    this._counter.getAllStudent().subscribe({
      next: (res) => {
        this.stdCount = res.count;
      }
    })
  }

  getInstructor() {
    this._counter.getAllInstructor().subscribe({
      next: (res) => {
        this.instCount = res.count;
      }
    })
  }
  getGroups() {
    this._Group.getGroup().subscribe({
      next: (res) => {
        this.groupCount = res.length;
        console.log(this.groupCount);

      }
    })
  }

    getAllAssigment() {
    this.HomeWork.getHomeWork().subscribe({
      next: (res) => {
        this.AssignmentsCount = res.length;

      }
    })
  }

      getAllCourses() {
    this.Course.getAllCourses().subscribe({
      next: (res) => {
        this.coursCount = res.length;

      }
    })
  }

      getAllFees() {
    this.Fees.getAllreport().subscribe({
      next: (res) => {
        this.totalIncomeCount = res.totalRevenue;
        this.totalExpensesCount = res.totalExpenses;
        this.totalNetProfitCount = res.netProfit;

      }
    })
  }
  ngOnInit() {
    this.getStudents()
    this.getInstructor()
    this.getGroups();
    this.getAllAssigment()
    this.getAllCourses()
    this.getAllFees()
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.name || 'Unknown User';
  }
}
