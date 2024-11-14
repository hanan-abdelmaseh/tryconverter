import { Component, OnInit } from '@angular/core';
import { ConverterService } from './services/converter.service';
import { Rates } from './Models/converter.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{
  ratesList!:Rates;
  baseCurrency:string='';
  baseValue:number= 0;
  currencyExchangeValue:number =0 ;

  constructor(private _ConverterService:ConverterService , private _FB:FormBuilder){

  }

  
 currencyForm = this._FB.group({
  amount: ['' ,Validators.required],
  currencyForm: ['', Validators.required],
  currencyTo: ['', Validators.required]
});



  ngOnInit(): void {
   this.getCurrencyValues()
  }


  getCurrencyValues(){
    this._ConverterService.getCurrencyValues().subscribe((res)=>{
      console.log(res);
      this.ratesList= res.rates;
      this.baseCurrency= res.base;
   this.baseValue = res.rates['EUR']
      console.log(this.ratesList);
      console.log(this.baseCurrency);
      console.log(this.baseValue)
    })
  }


  convertCurrency(currencyValues:any){
    console.log(currencyValues)
this.currencyExchangeValue = currencyValues.amount * currencyValues.currencyTo;

  }
}
