import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { FinancialComponent } from './financial/financial.component';
import { TradingComponent } from './trading/trading.component'

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    FinancialComponent,
    TradingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
