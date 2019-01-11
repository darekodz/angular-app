import { Injectable } from '@angular/core';
import { AuthServiceInterface, HttpResponseModel } from '../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  private _access: boolean;

  get access(): boolean {
    return this._access;
  }

  constructor(private http: HttpClient) { 
    this.logged();
  }

  logged(): void {
    this.http.get(Api.LOGGED_END_POINT).subscribe((resp: HttpResponseModel) => {
      this._access = resp.ok;
    })
  }
  logIn(formData: { username: any; password: any; }): void {
    this.http
    .post(Api.LOGIN_END_POINT, formData)
    .subscribe((resp: HttpResponseModel)=>{
      this._access = resp.ok;
    })
  }
  logOut(): void {
    this.http.get(Api.LOGOUT_END_POINT).subscribe(()=>{
      this._access = false;
    })
  }
}
