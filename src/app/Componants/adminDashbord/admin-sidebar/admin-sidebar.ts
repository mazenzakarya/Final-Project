import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Dropdown } from "../../sharedComponent/dropdown/dropdown";

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule, Dropdown],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css'
})
export class AdminSidebar {


isSidebarVisible = false;

toggleSidebar() {
  this.isSidebarVisible = !this.isSidebarVisible;
}



hideSidebarOnMobile() {
  // يخفي الـ sidebar لو الشاشة صغيرة
  if (window.innerWidth < 768) {
    this.isSidebarVisible = false;
  }
}
}
