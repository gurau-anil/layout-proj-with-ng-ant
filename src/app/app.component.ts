import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  isCollapsed = false;
  @ViewChild('sidenav', { static: false }) sidenav!: NzSiderComponent;

  triggered(data: boolean){
    console.log(this.sidenav)
  }
}
