import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: any[]; // Define the static array of users here

  email:string | null='';
  password:string | null='';
  userNotFound:boolean=false;

  constructor(private route:ActivatedRoute, private router: Router) {
    // Initialize the users array with sample data
    this.users = [
      { id: 1, name: 'John Doe', password: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', password: 25, email: 'jane@example.com' },
      { id: 3, name: 'Luber', password: 123, email: 'luberechavarria@gmail.com' },
    ];
  }


  ngOnInit() {
    
  }


  itemClick(){
    this.users.forEach(user => {
      if(user.email == this.email && user.password == this.password){
        this.router.navigateByUrl('/account');
      }else{
        this.userNotFound = true;
        // this.email= '';
        // this.password= '';
      }
    })
  }
}
