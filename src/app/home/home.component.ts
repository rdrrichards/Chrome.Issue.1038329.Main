import { Component, OnInit } from '@angular/core';
import { PresentationControllerService } from '../presentation-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private presentationControllerServive: PresentationControllerService) { }

  ngOnInit() {
  }
  startPresentation(url: string = null) {
    this.presentationControllerServive.startPresentationRequest('http://localhost:4222');
    setTimeout(() => {
      const message = { url: 'http://localhost:4222/login'};
      this.presentationControllerServive.sendMessage(message);
    }, 5000);
  }
}
