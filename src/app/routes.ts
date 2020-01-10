import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
} from './events/index';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];
