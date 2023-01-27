import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // public BookName: any = "";
  // public Author: any = "";

  @Input() formData: {
    username: string;
    password: string;
  } = { username: '', password: '' };
  @Output() formDataChange = new EventEmitter<{
    username: string;
    password: string;
  }>();

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });

  form = new FormGroup({
    username: new FormControl(this.formData.username, [Validators.required]),
    password: new FormControl(this.formData.password, [Validators.required]),
  });

  onInput() {
    this.formDataChange.emit(this.form.value);
  }

  //ON Initialised
  ngOnInit(): void {}

  // public button(){
  //   console.log("Button Clicked")
  // }

  onFormSubmit() {
    console.log(this.form.value);
  }
}
