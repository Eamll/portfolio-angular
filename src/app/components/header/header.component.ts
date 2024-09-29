import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: ['/about']
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/projects']
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
      }
    ];
  }
}
