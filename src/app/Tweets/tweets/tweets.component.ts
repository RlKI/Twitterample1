import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/Models/Tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  miTweet:Tweet;
  constructor() { 
    this.miTweet = {id:1, texto:"Esto es un tweet", autor:"LeYo"};
  }

  ngOnInit() {
  }

}
