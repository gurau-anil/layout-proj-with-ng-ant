import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CompanyConfig, CompanyConfigService } from '../../../services/company.config';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-topnav',
  imports: [NzLayoutModule, NzIconModule, NzFlexModule, NzAvatarModule, NzDropDownModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.less'
})
export class TopnavComponent {
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();
  companyConfig: CompanyConfig | null;

  constructor(private configService: CompanyConfigService){
    this.companyConfig = this.configService.currentConfig;
  }
  onCollapseToggle() {
    this.toggleCollapse.emit();
  }
}
