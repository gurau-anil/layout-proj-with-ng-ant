import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TopnavComponent } from "../topnav/topnav.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';
import { FloatButtonsComponent } from '../float-buttons/float-buttons.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NzLayoutModule, TopnavComponent, SidenavComponent, CommonModule, ScrollTopComponent, FloatButtonsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less'
})
export class LayoutComponent {

  isCollapsed = false;
  isAutoCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMenu() {
    this.isCollapsed = true;
  }

  handleAutoCollapseChanged(data: boolean) {
    this.isCollapsed = this.isAutoCollapsed = data?? false;
  }
}
