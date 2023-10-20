import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { 


    
  }


  


  deleteUsers(id:any[]){
    return this.httpClient.delete('http://localhost:8089/SpringMVC/api/auth/deleteUser/'+id)
  }


  getAllUser(){
    return this.httpClient.get('http://localhost:8089/SpringMVC/api/auth/User/')
  }
  addUsers(user: any, headers: HttpHeaders): Observable<any> {
    const options = { headers: headers };
    return this.httpClient.post<any>('http://localhost:8089/SpringMVC/api/auth/addUser/', user, options);
  }

  updateUser(id:any, User:Users):Observable<Object>{
    return this.httpClient.put<Users>('http://localhost:8089/SpringMVC/api/auth/modify-User/'+id, User)
    
    
    
    }

    
    getUserbyid(id:any ):Observable<Users>{
      return this.httpClient.get<Users>('http://localhost:8089/SpringMVC/api/auth/getUserby/'+id)
    }
    accepterUser(idUser: number): Observable<any> {
      return this.httpClient.post<any>(`http://localhost:8089/SpringMVC/api/auth/accepterUser/${idUser}`, null);
    }
    
}
