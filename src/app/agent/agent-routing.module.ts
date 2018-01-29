import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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








const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Agent'
    },
    children: [
					{
						path: 'allowance',
						component: AllowanceComponent,
						data: 	{
								title: 'Allowance'
								}
					},
    
	 
					{
						path: 'approve',
						component: ApproveComponent,
						data: 	{
								title: 'Approve'
								}
					},
					{
						path: 'checkbalance',
						component: CheckbalanceComponent,
						data: 	{
								title: 'Checkbalance'
								}
					},
					{
						path: 'transfer',
						component: TransferComponent,
						data: 	{
								title: 'Transfer'
								}
					},
					{
						path: 'transferfrom',
						component: TransferfromComponent,
						data: 	{
								title: 'Transferfrom'
								}
					},
					{
						path: 'convertcurrencytoinrx',
						component: ConvertcurrencytoinrxComponent,
						data: 	{
								title: 'Convertcurrencytoinrx'
								}
					},
					{
						path: 'lockescrowinrx',
						component: LockescrowinrxComponent,
						data: 	{
								title: 'Lockescrowinrx'
								}
					},
					{
						path: 'withdrawasincinrx',
						component: WithdrawasincinrxComponent,
						data: 	{
								title: 'Withdrawasincinrx'
								}
					},
					{
						path: 'convertcurrencytousdx',
						component: ConvertcurrencytousdxComponent,
						data: 	{
								title: 'Convertcurrencytousdx'
								}
					},
					{
						path: 'lockescrowusdx',
						component: LockescrowusdxComponent,
						data: 	{
								title: 'Lockescrowusdx'
								}
					},
					{
						path: 'withdrawasincusdx',
						component: WithdrawasincusdxComponent,
						data: 	{
								title: 'Withdrawasincusdx'
								}
					}
					
				
				
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}
