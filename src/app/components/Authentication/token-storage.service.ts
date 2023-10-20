import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  getToken(): string {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      return token;
    }
    return '';
  }
  
  saveToken(token: string): void {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  
  getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  
  saveUser(user: any): void {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}  