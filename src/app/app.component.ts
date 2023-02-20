import {Component} from '@angular/core';
import {UserDataService} from "./services/user-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-api';
  users: any;

  constructor(private userObj: UserDataService) {
    userObj.users().subscribe((data) => {
      console.log(data);
    })
  }
}
