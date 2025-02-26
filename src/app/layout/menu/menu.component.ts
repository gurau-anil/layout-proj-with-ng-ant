import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface MenuItem {
  title: string;
  routerLink: string;
  icon: string|'';
  submenu?: MenuItem[];  // Optional submenu array for nested menu items
}

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MenuItemComponent, NzMenuModule, CommonModule, NzIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.less'
})
export class MenuComponent {
  @Input() isCollapsed: boolean = false;  // Receives isCollapsed from parent component
  @Input() menuItems: MenuItem[] = [];
}
