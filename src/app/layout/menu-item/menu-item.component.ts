import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuItem } from '../menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, NzIconModule, NzMenuModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.less'
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
}
