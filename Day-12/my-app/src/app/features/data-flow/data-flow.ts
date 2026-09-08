import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet , RouterLink, RouterLinkActive],
  selector: 'app-data-flow',
  styleUrl: './data-flow.css',
  templateUrl: './data-flow.html',
})
export class DataFlow {}
