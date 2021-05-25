import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  reactiveForm: FormGroup;
  formSubmitted = false;

  selectOptionsValues = [1, 2, 3, 4, 5, 6];

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.generateForm();
  }



  generateForm() {

    // create form using form-builder
    this.reactiveForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      experienceYear: ['', Validators.required],
      isFeatured: [false, Validators.requiredTrue],
      gender: ['', Validators.required],
      description: ['', Validators.required],
      fileUpload: ['', Validators.required]
    });
  }

  submitForm() {
    this.formSubmitted = true;
    if (!this.reactiveForm.valid) {
      alert('not');
      return;
    } 
    console.log(this.reactiveForm.value);
  }


}
