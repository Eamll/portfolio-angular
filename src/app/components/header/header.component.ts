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
        label: 'HOME',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'ABOUT',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: ['/about']
      },
      {
        label: 'PROJECTS',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/projects']
      },
      {
        label: 'CONTACT',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
      }
    ];
  }
}
