import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-float-buttons',
  imports: [NzFloatButtonModule, NzIconModule],
  template: `
    <nz-float-button-group
      id="float-btns-group"
      nzType="primary"
      [nzTrigger]="trigger"
      [nzIcon]="icon"
    >
      <nz-float-button><nz-icon nzType="setting" nzTheme="outline"></nz-icon></nz-float-button>
      <nz-float-button></nz-float-button>
    </nz-float-button-group>
    <ng-template #icon>
      <nz-icon nzType="menu" nzTheme="outline"></nz-icon>
    </ng-template>
  `,
  styles: `
    #float-btns-group{
      right: 24px;
    }
  `
})
export class FloatButtonsComponent {
@Input() trigger: 'click'|'hover' = "click";
}
