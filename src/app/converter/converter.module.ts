import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HistoricalRatesComponent } from './components/historical-rates/historical-rates.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { CurrencyNamesComponent } from './components/currency-names/currency-names.component';
import { USDDetailsComponent } from './components/usd-details/usd-details.component';
import { EURDetailsComponent } from './components/eur-details/eur-details.component';
@NgModule({
  declarations: [
    ConverterComponent,

    CurrencyDetailsComponent,
     HistoricalRatesComponent,
     CurrencyNamesComponent,
     USDDetailsComponent,
     EURDetailsComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  
  ]
})
export class ConverterModule { }
