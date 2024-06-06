import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post_service";
import {CategoryService} from "../../services/category_service";
import {Category} from "../../data/category";
import {PostCreateInput} from "../../data/post";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

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
  postCreateInput!: PostCreateInput;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router) {}

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


  onSubmit() {
    console.log("in submit")
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    if (this.postForm.valid) {
      this.postCreateInput = {
        title: this.postForm.value.title,
        content: this.postForm.value.content,
        categoryId: this.postForm.value.category,
      };
      this.postService
        .create(this.postCreateInput)
        .subscribe(() =>
          this.router.navigate(['/']).then((r) => console.log(r)),
        );
      Toast.fire({
        icon: 'success',
        title: 'Post successfully'
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Please review your post'
      })
    }
  }
}
