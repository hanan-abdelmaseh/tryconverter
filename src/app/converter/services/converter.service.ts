import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Converter, HistoricalRates, SymbolsResponse } from '../Models/converter.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {


  apiUrl:string ="https://data.fixer.io/api"

   apiKey:string = '8105562f5fd150443029c7560772f2fd';  

  //latest?access_key=8105562f5fd150443029c7560772f2fd;

  // /latest ? access_key = a1fa04f892fe4e77a5b3ade0c2b31f3d"
  //https://data.fixer.io/api/2023-12-24?base=EUR&symbols

  constructor(private _HttpClient:HttpClient) { }



  getCurrencyValues():Observable<Converter>{
     return this._HttpClient.get<Converter>(`${this.apiUrl}/latest?access_key=${this.apiKey}`)
  }
  getLatestRateRateForSingleSymbol(base:string, toCurrency:string):Observable<any>{
  return this._HttpClient.get<any>(`${this.apiUrl}/latest?base=${base}&symbols=${toCurrency}`)
  
  }
  getLatestRateForAllSymbols(base:string):Observable<any>{
    return this._HttpClient.get<any>(`${this.apiUrl}/latest?base=${base}&symbols`)
  }

  getHistoricalRatesFromToAllSymbols(date:string, base:string):Observable<HistoricalRates>{
   return this._HttpClient.get<HistoricalRates>(`${this.apiUrl}/${date}?base=${base}&symbols&access_key=${this.apiKey}`)
  }

  getHistoricalRatesFromToOneSymbol(date:string, base:string,symbol:string):Observable<HistoricalRates>{
    return this._HttpClient.get<HistoricalRates>(`${this.apiUrl}/${date}?base=${base}&symbols=${symbol}&access_key=${this.apiKey}`)
   
  
  }

  getCureenciesNames():Observable<SymbolsResponse>{
    return this._HttpClient.get<SymbolsResponse>(`${this.apiUrl}/symbols?access_key=${this.apiKey}`)
  }

  //convert
  convertCurrency(fromCurrency:string, toCurrency:string, amount:number):Observable<any>{
    return this._HttpClient.get<SymbolsResponse>(`${this.apiUrl}/convert?access_key=${this.apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
  } 
   
  
}
// https://data.fixer.io/api/2023-12-24?base=EUR&symbols