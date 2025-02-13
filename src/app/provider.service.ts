import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Provider } from './provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseURL = "https://67a69a31510789ef0dfbc9e6.mockapi.io/api/v1/Provider";
  searchResults = new Subject();
  constructor(private httpClient: HttpClient) { }
  getProviderById(provider_id:string):Observable<any>{
  return this.httpClient.get(`${this.baseURL}/${provider_id}`);
 }

passResults(results:any):void{
  this.searchResults.next(results);
}
getPassedResults():Observable<any>{
  return this.searchResults.asObservable();
}
createProvider(provider: Provider): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, provider);
}
updateProvider(id: number, provider: Provider): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, provider);
}
}
