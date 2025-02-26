import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-topnav',
  imports: [NzLayoutModule, NzIconModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.less'
})
export class TopnavComponent {
  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  onCollapseToggle() {
    this.toggleCollapse.emit();
  }
}
