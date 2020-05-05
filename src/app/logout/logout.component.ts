import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  template: '<p>logout</p>',
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { 
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
