import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})

export class Dropdown {


@Input() title:string = '';
@Input() icon:string = '';
@Input() links:{label:string,route:string,icon:string}[] = [];

@Output() linkClicked = new EventEmitter<void>();

onLinkClick() {
  this.linkClicked.emit(); // تبعت الإشارة لما يضغط المستخدم
}



  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }
}
