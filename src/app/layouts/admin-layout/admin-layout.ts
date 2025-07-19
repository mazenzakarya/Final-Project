import { Component } from '@angular/core';
import { AdminSidebar } from "../../Componants/adminDashbord/admin-sidebar/admin-sidebar";
import { AdminNavBar } from "../../Componants/adminDashbord/admin-nav-bar/admin-nav-bar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [AdminSidebar, AdminNavBar, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

}
