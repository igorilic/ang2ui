import {Component, OnInit} from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { IZadaci } from './shared/api/zadaci/zadaci.interface';
import { ZadaciService } from './shared/api/zadaci/zadaci.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NavComponent, SideNavComponent, ContentComponent],
    providers: [ZadaciService]
    
})
export class AppComponent implements OnInit{
    title: string = 'Pošta Srpske';
    zadaci: IZadaci[];
    errorMessage: string;
    constructor(private _zadaciService: ZadaciService) {}
    
    ngOnInit(): void {
        this._zadaciService
            .getZadaci()
            .subscribe(
                zadaci => this.zadaci = zadaci,
                error => this.errorMessage = error
            );
    }
 }
