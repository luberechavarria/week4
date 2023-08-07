import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  myVar: string = "//www.html.am/images/image-codes/milford_sound_t.jpg";
  
  

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
   
  }

}
