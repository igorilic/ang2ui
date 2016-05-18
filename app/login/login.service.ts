import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IRadnikLogin } from '../shared/radnici/radnik-login.interface';
import { IRadnik } from '../shared/radnici/radnik';
import { SessionStorageService } from '../shared/api/zadaci/sessionStorage.service';

@Injectable()
export class LoginService {
    private loginApiUrl: string = 'http://localhost:5000/api/login/'; //TODO smestiti na sigurnije mesto
    
    radnik: IRadnik;
    
    constructor(private _http: Http,
                private _sessionStorageService: SessionStorageService) { }
    
    postLogin(radnikLogin: IRadnik): Observable<IRadnik> {
        
        
        let body = JSON.stringify(radnikLogin);
        let headers = new Headers({ 
            'Content-Type': 'application/json'
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Origin, Content-Type'
        });
        let options = new RequestOptions({headers: headers});
        
        return this._http.post(this.loginApiUrl, body, options)
                   .map(this.extractData)
                   .do(data => this.setRadnikToSessionStorage(data))
                   .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
    private setRadnikToSessionStorage (body: JSON) {
        this._sessionStorageService
            .setToSessionStorage(body);
    }
   

    // private urlEncode(obj: Object): string {
    //     let urlSearchParams = new URLSearchParams();
    //     for (let key in obj) {
    //         urlSearchParams.append(key, obj[key]);
    //     }
    //     return urlSearchParams.toString();
    // }
}