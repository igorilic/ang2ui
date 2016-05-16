import { Component, OnInit } from '@angular/core';
import { FormaTestComponent } from '../forms/formatest/formatest.component';

@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'content.component.html',
    directives: [FormaTestComponent]
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}