import { Component } from '@angular/core';
import {User} from "../../data/user";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  user:User = {
    name:'Leo',
    id: 1
  }
}
