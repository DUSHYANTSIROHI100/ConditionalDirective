import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conditionaldirective';

  videos=[
    {title:'My Video 1', share:415,likes:8257,dislikes:812,thumbnail:'assets/img1.jpg'},
    {title:'My Video 2', share:215,likes:1257,dislikes:412,thumbnail:'assets/img2.jpg'},
    {title:'My Video 3', share:515,likes:7257,dislikes:312,thumbnail:'assets/img3.jpg'}
  ]

  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo(){
    let videoCopy=[...this.videos];
    return videoCopy.sort((curr,next)=>next.likes-curr.likes)[0];
  }
}
