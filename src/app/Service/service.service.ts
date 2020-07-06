import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gato } from '../Modelo/Gato';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  gato:Gato
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/Cast/gatos';

  getGatos(){
    return this.http.get<Gato[]>(this.Url)
  }
}
