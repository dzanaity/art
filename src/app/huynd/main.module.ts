import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { HuyndComponent } from "./huynd.component";

@NgModule({
  declarations: [HuyndComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HuyndComponent
      }
    ])
  ],
  exports: [
    HuyndComponent
  ],
  bootstrap: [HuyndComponent]
})
export class MainModule {}
