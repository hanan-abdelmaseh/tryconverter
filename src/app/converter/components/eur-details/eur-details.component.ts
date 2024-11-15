import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConverterService } from '../../services/converter.service';
import { Symbols } from '../../Models/converter.model';

@Component({
  selector: 'app-eur-details',
  templateUrl: './eur-details.component.html',
  styleUrls: ['./eur-details.component.scss']
})
export class EURDetailsComponent  implements OnInit{
  fromCurrency:string ='';
  currencyTo:string =''
  currencyNamesList!:Symbols;
  constructor(private _ActivatedRoute: ActivatedRoute,private _ConverterService:ConverterService,
    private _Router: Router,private _FB:FormBuilder){

  }
  currencyForm = this._FB.group({
    amount: ['' ,Validators.required],
    currencyForm: ['', Validators.required],
    currencyTo: ['', Validators.required]
  });

  ngOnInit(): void {
     this._ActivatedRoute.queryParams.subscribe((params)=>{
        this.fromCurrency = params['from'];

     });

     this.getCurrencyValues();
  }


  
  getCurrencyValues(){
    this._ConverterService.getCureenciesNames().subscribe((res)=>{
      console.log(res);
      this.currencyNamesList= res.symbols;
     
    })
  }




  convertCurrency(currencyValues:any){
    let data = currencyValues.value;
   this.currencyTo = data.currencyTo;
    console.log(this.currencyTo);
//using api  
// this._ConverterService.convertCurrency(data.fromCurrency, data.toCurrency,data.amount).subscribe((res)=>{
//   console.log(res)
// })
}
}