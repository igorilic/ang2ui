import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

@Component({
    moduleId: module.id,
    selector: 'forma-test',
    templateUrl: 'formatest.component.html',
    styleUrls: ['formatest.component.css'],
    directives: [BreadcrumbComponent]
})
export class FormaTestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}