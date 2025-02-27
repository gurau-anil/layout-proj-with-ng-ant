import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuComponent, MenuItem } from '../menu/menu.component';
import { CompanyConfig, CompanyConfigService } from '../../../services/company.config';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-sidenav',
  imports: [NzIconModule, NzMenuModule, NzLayoutModule, MenuComponent, NzButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.less'
})
export class SidenavComponent implements OnInit{
  @Input() isCollapsed: boolean = false;
  @Output() isAutoCollapsedChange = new EventEmitter<boolean>();
  @Output() isMenuClosed = new EventEmitter();
  companyConfig: CompanyConfig | null = null;
  menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      routerLink: '#',
      icon: 'dashboard',
      submenu: [
        {
          title: 'Welcome',
          routerLink: '/dashboard/welcome'
        }
      ]
    },
    {
      title: 'Monitor',
      routerLink: '#',
      icon: 'desktop'
    },
    {
      title: 'Workplace',
      routerLink: '#',
      icon: 'tool'
    },
    {
      title: 'Form',
      routerLink: '#',
      icon: 'form',
    }
  ];

  constructor(private configService: CompanyConfigService) {
    
  }
  
  ngOnInit() {
    this.companyConfig = this.configService.currentConfig;
    
    // Or subscribe to the observable if you want updates
    // this.configService.getConfig().subscribe(config => {
    //   this.companyConfig = config;
    // });
  }
  autoCollapsedChanged(data: any){
    this.isAutoCollapsedChange.emit(data);
  }
  closeMenu(){
    this.isMenuClosed.emit();
  }
}
