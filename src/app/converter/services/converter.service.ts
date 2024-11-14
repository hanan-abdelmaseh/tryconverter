import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Converter } from '../Models/converter.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {


  apiUrl:string ="https://data.fixer.io/api/latest?access_key=a1fa04f892fe4e77a5b3ade0c2b31f3d";

  // /latest ? access_key = a1fa04f892fe4e77a5b3ade0c2b31f3d"

  constructor(private _HttpClient:HttpClient) { }



  getCurrencyValues():Observable<Converter>{
     return this._HttpClient.get<Converter>(this.apiUrl)
  }
}
