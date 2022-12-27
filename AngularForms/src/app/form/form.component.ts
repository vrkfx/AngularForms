import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public BookName: any = "";
  public Author: any = "";


  // constructor() {
  //   this.value = "Two way Biniding"
  // }

  ngOnInit(): void {

  }

}
