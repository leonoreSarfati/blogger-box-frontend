import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post_service";
import {CategoryService} from "../../services/category_service";
import {Category} from "../../data/category";

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.css'
})
export class AddPostFormComponent implements OnInit{
  categories: Category[] = []
  postForm: FormGroup = this.formBuilder.group({
    title:['',
      {validators:[Validators.required, Validators.minLength(5), Validators.maxLength(150)]}],
    category:['',
      {validators:[Validators.required]}],
    content:['',
      {validators:[Validators.required, Validators.maxLength(2500)]}]
  });

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {}

  get title(){
    return this.postForm.controls['title'];
  }

  get category(){
    return this.postForm.controls['category'];
  }

  get content(){
    return this.postForm.controls['content'];
  }

  ngOnInit():void{
    this.loadCategories();
  }

  loadCategories():void{
    this.categoryService.getAll().subscribe(categories=>
      this.categories=categories)
  }


  onSubmit():void{

  }
}
