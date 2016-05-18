import {Component, OnInit} from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { IZadaci } from './shared/api/zadaci/zadaci.interface';
import { ZadaciService } from './shared/api/zadaci/zadaci.service';
import { SessionStorageService } from './shared/api/zadaci/sessionStorage.service';
import { LoginService } from './login/login.service';
import { IRadnikLogin } from './shared/radnici/radnik-login.interface';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NavComponent, SideNavComponent, ContentComponent],
    providers: [ZadaciService, SessionStorageService, LoginService]
    
})
export class AppComponent implements OnInit{
    title: string = 'Pošta Srpske';
    objekat: any = {
        test: 'proba',
        ime: 'igor'
    };
    radnikLogin: IRadnikLogin;
    zadaci: IZadaci[];
    errorMessage: string;
    constructor(private _zadaciService: ZadaciService,
                private _sessionStorageService: SessionStorageService,
                private _loginService: LoginService) {}
    
    ngOnInit(): void {
        // this._zadaciService
        //     .getZadaci()
        //     .subscribe(
        //         zadaci => this.zadaci = zadaci,
        //         error => this.errorMessage = error
        //     );
            
        //  this._sessionStorageService
        //      .setToSessionStorage(this.objekat);
             
         this._loginService.postLogin('685', '685')
             .subscribe(
                 radnik => this.radnikLogin = radnik,
                 error => this.errorMessage = error
             );
    }
 }
