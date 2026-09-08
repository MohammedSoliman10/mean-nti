import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-team-detalis',
  styleUrl: './team-detalis.css',
  templateUrl: './team-detalis.html',
})
export class TeamDetalis implements OnInit{

  teamId: string | null = null;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.teamId = this.route.snapshot.paramMap.get('id');
  }
}

