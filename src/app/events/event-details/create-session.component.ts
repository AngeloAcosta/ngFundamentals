import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
        em{ float:right; color:#E05C65; padding-left: 10px;}
        .error input, .error select, .error textarea {background-color: #E3C3C5;}
        .error :: -webkit-input-placeholder: {color: #999;}
        .error :: -moz-placeholder { color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :ms-input-placeholder {color:#999;}
    `]
})

export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    newSessionForm: FormGroup;

    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    constructor() {}

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['aa', 'foo', 'gg'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    public saveSession(formValues) {
        // tslint:disable-next-line: prefer-const
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    public cancel(): void {
        this.cancelAddSession.emit();
    }
}
