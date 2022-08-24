import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { FinancialComponent } from './financial/financial.component';
import { TradingComponent } from './trading/trading.component';


const routes: Routes = [{path: 'history', component: HistoryComponent},{path: 'financial', component: FinancialComponent},{path: 'trading', component: TradingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
