import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AllowanceComponent } from './allowance.component';
import { ApproveComponent } from './approve.component';
import { CheckbalanceComponent } from './checkbalance.component';
import { TransferComponent } from './transfer.component';
import { TransferfromComponent } from './transferfrom.component';

import { ConvertcurrencytoinrxComponent } from './convertcurrencytoinrx.component';
import { LockescrowinrxComponent } from './lockescrowinrx.component';
import { WithdrawasincinrxComponent } from './withdrawasincinrx.component';
import { ConvertcurrencytousdxComponent } from './convertcurrencytousdx.component';
import { LockescrowusdxComponent } from './lockescrowusdx.component';
import { WithdrawasincusdxComponent } from './withdrawasincusdx.component';
import { AgentRoutingModule } from './agent-routing.module';



@NgModule({
  imports: [
    AgentRoutingModule,
    BsDropdownModule
  ],
  declarations: [ 
AllowanceComponent,
ApproveComponent,
CheckbalanceComponent,
TransferComponent,
TransferfromComponent,
ConvertcurrencytoinrxComponent,
LockescrowinrxComponent,
WithdrawasincinrxComponent,
ConvertcurrencytousdxComponent,
LockescrowusdxComponent,
WithdrawasincusdxComponent






	]
})
export class AgentModule { }
