import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {
  constructor(private router: Router) {}

  goDetails(id: number) {
    this.router.navigate(['/team', id]);
  }
}
