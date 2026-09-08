import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ngfor.html',
  styleUrl: './ngfor.css',
})
export class Ngfor {}
