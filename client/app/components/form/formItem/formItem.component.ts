import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, NgForm } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl,
  FormBuilder,
  FORM_DIRECTIVES
} from '@angular/forms';
import { ipPort } from '../../types/ipPort';

@Component({
  selector: 'form-item',
  templateUrl: './client/app/components/form/formItem/formItem.component.html',
  styles: [`
    input {
      color: #FFF;
    }
  `],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})

export class FormItemComponent {
  @Output() formUpdate: EventEmitter<ipPort> = new EventEmitter<ipPort>();
  model = new ipPort(null, null, null);
  formAdded = false;

  constructor() {}

  // Created a new form the first time the function is called
  onChange() {
    if (!(this.formAdded)) {
      this.formUpdate.emit(this.model);
      this.formAdded = true;
    }
  }
}
