import { Component, Input } from '@angular/core';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-scroll-top',
  imports: [NzIconModule, NzBackTopModule, NzButtonModule],
  template: `
    <nz-back-top [nzTarget]="scrollTopTarget" [nzTemplate]="scrolltoptemplate" style="right: 80px; bottom: 48px;"></nz-back-top>
    <ng-template #scrolltoptemplate>
      <button nz-button nzType="primary" nzShape="circle" nzSize="large">
        <nz-icon nzType="arrow-up" />
      </button>
    </ng-template>
  `,
  styles:[]
})
export class ScrollTopComponent {
  @Input() scrollTopTarget: string="";
}
