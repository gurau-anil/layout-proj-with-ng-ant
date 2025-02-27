import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TopnavComponent } from "../topnav/topnav.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NzLayoutModule, TopnavComponent, SidenavComponent, CommonModule, NzFloatButtonModule, NzIconModule],
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
