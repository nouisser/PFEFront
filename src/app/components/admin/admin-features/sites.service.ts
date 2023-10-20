import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Sites } from './Sites';
@Injectable({
  providedIn: 'root'
})
export class SitesService {
  constructor(private httpClient: HttpClient) { }

  
  getSites(): Observable<Array<Sites>> {
    return this.httpClient

    .get<Array<Sites>>(`http://localhost:8089/SpringMVC/api/getallSite/
    `)
    .pipe(map((d: Array<Sites>) => d));
  }


  deleteSites(id:any[]){
    return this.httpClient.delete('http://localhost:8089/SpringMVC/api/deleteSite/'+id)
  }

  addSites(site: any, headers: HttpHeaders): Observable<any> {
    const options = { headers: headers };
    return this.httpClient.post<any>('http://localhost:8089/SpringMVC/api/addSite/', site, options);
  }
  
  updateSite(id:any, Site:Sites):Observable<Object>{
    return this.httpClient.put<Sites>('http://localhost:8089/SpringMVC/api/modify-Site/'+id, Site)
    
    
    
    }

    getSitebyid(id:any ):Observable<Sites>{
      return this.httpClient.get<Sites>('http://localhost:8089/SpringMVC/api/getSiteby/'+id)
    }

}
