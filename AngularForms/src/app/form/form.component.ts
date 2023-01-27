import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
  }


  //ON Initialised
  ngOnInit(): void {

  }

  public button(){
    console.log("Button Clicked")
  }

  onFormSubmit() {
    console.log(this.form.value);
}

}
