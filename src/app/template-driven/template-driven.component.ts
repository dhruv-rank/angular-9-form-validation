import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  selectOptionsValues = [1, 2, 3, 4, 5, 6];

  username: string;
  email: string;
  password: string;
  select: number;
  isFeatured: boolean;
  gender: string;
  description: string;
  uploadFile: File;
  @ViewChild('validationForm') validationForm: NgForm;

  ngOnInit(): void {

  }
  onSubmit(validationForm: NgForm) {
    if (validationForm.valid) {
      //get value from form using validationForm.form.value
      alert('validationForm is submmited');
    }
  }

}
