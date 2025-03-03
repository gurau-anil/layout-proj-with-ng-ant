import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-float-buttons',
  imports: [NzFloatButtonModule, NzIconModule, NzToolTipModule ],
  template: `
    <nz-float-button-group
      id="float-btns-group"
      nzType="primary"
      [nzTrigger]="trigger"
      [nzIcon]="floatBtnGroupIcon"
    >
      <nz-float-button [nzIcon]="floatBtnIcon1" nzTooltipTitle="help" nzTooltipPlacement="left" nz-tooltip></nz-float-button>
      <nz-float-button [nzIcon]="floatBtnIcon2" nzTooltipTitle="setting" nzTooltipPlacement="left" nz-tooltip></nz-float-button>
    </nz-float-button-group>
    <ng-template #floatBtnGroupIcon>
      <nz-icon nzType="menu" nzTheme="outline"></nz-icon>
    </ng-template>
    <ng-template #floatBtnIcon1>
      <nz-icon nzType="exclamation-circle" nzTheme="outline" />
    </ng-template>
    <ng-template #floatBtnIcon2>
      <nz-icon nzType="setting" nzTheme="outline"></nz-icon>
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
