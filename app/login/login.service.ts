import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IRadnikLogin } from '../shared/radnici/radnik-login.interface';

@Injectable()
export class LoginService {
    private loginApiUrl: string = 'http://localhost:5000/api/login/'; //TODO smestiti na sigurnije mesto
    
    radnik: IRadnikLogin;
    
    constructor(private _http: Http) { }
    
    postLogin(sifraRadnika: string, tajnaSifraRadnika: string): Observable<IRadnikLogin> {
        let body = JSON.stringify({sifraRadnika, tajnaSifraRadnika});
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({headers: headers});
        
        return this._http.post(this.loginApiUrl, body, options)
                   .map(this.extractData)
                   .do(data => console.log(JSON.stringify(data)))
                   .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}