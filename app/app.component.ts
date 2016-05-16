import {Component} from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NavComponent, SideNavComponent, ContentComponent]
    
})
export class AppComponent {
    title: string = 'Pošta Srpske';
 }
