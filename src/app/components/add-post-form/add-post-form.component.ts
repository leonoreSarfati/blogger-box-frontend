import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../services/post_service";

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.css'
})
export class AddPostFormComponent{
  postForm: FormGroup = this.formBuilder.group({
    title:[''],
    category:[''],
    content:['']
  });

  constructor(private formBuilder: FormBuilder) {
  }

  // ngOnInit(): void {
  //   this.postForm = new FormGroup({
  //     title: new FormControl(''),
  //     category: new FormControl(''),
  //     content: new FormControl('')
  //   });
  // }

  onSubmit():void{

  }
}
