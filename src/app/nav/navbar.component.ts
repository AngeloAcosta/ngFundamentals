import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events';
import { EventService } from '../events/index';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px};
        #searchForm {margin-right: 100px};
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color:#f97924;}
    `]
})

export class NavbarComponent {

    searchTerm: String = '';
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService: EventService) {}

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: ISession[]) => {
                this.foundSessions = sessions;
                console.log(this.foundSessions);
            }
        );
    }
}
