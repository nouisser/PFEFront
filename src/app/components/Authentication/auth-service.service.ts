import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from './signin/UserType';
const AUTH_API = 'http://localhost:8089/SpringMVC/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient) { }
  login(credentials: { username: string, password: string }): Observable<any> {
    console.log(credentials.username,credentials.password);
    return  this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  
  register(user: {
    completeAddress:string,
    clientType:string,
   country: string,
   revenue:number,
    username: string,
    email: string,
    password: string,
    role: any,
    userType: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    activitySector?: string,
    url?: string,
    description?: string,
    shopName?: string,
    companyName?: string,
    paymentEmail?: string,
    category?: string,
    phoneNumberSite?: string,
    emailSite:string,
    address:string,
    technicianName:string,
    profilePic: File | null,
    postCode:string,
    city :string,
    nameTechnician:string



  }): Observable<any> {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('role', user.role);
  // formData.append('userType', user.role === 'mar' ? UserType.marchand : UserType.client);
formData.append('userType', user.role === 'mar' ? UserType.marchand : UserType.client);
  //if (user.role === 'mar') {
  //  formData.append('userType', UserType.MARCHAND); // Assignez UserType.marchand si le rôle est 'mar'
  //} else {
    //formData.append('userType', UserType.CLIENT); // Sinon, assignez UserType.client
 // }

   //if (user.role === 'MARCHAND') {
   // formData.append('userType', UserType.marchand);
  //} else {
    //formData.append('userType', UserType.client);
  //}
  
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('phoneNumber', user.phoneNumber);
    formData.append('activitySector', user.activitySector || '');
    formData.append('url', user.url || '');
    formData.append('description', user.description || '');
    formData.append('shopName', user.shopName || '');
    formData.append('companyName', user.companyName || '');
    formData.append('paymentEmail', user.paymentEmail || '');
    formData.append('category', user.category || '');
    formData.append('phoneNumberSite', user.phoneNumberSite || '');
    formData.append('country', user.country || '');
    formData.append('revenue', user.revenue.toString());
    formData.append('clientType', user.clientType); 
    formData.append('completeAddress', user.completeAddress);
formData.append('emailSite', user.emailSite);
formData.append('address', user.address);
if (user.profilePic) {
  console.log('Profile picture exists:', user.profilePic);

  formData.append('profilePic', user.profilePic);
}
formData.append('postCode', user.postCode);
formData.append('technicianName', user.technicianName);
formData.append('  nameTechnician', user.nameTechnician);

formData.append('city', user.city);
console.log(formData)

    return this.http.post(AUTH_API + 'signup', formData);

  }
}   