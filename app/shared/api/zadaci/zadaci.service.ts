import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IZadaci } from './zadaci.interface';

@Injectable()
export class ZadaciService {
    private zadaciApiUrl: string = 'http://localhost:5000/api/zadaci/';
    constructor(private _http: Http) {}
    
    getZadaci(): Observable<IZadaci[]> {
        return this._http.get(this.zadaciApiUrl)
                   .map((response: Response) => response.json())
                   .do(data => console.log(JSON.stringify(data)))
                   .catch(this.handleError);
    }
    
    private handleError(err: Response) {
        return Observable
                .throw(err.json().error || 'Server Error');
    }

}