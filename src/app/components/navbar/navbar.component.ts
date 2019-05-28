import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Component to handle the functionality of the navigation bar
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['search']);
  }

}
