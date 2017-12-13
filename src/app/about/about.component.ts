import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = "About";
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac eleifend eros, vel viverra nibh. Nullam porttitor tellus ac arcu porttitor, eu dignissim ipsum feugiat. Sed non dapibus arcu, at viverra justo. Nunc sit amet pulvinar quam. Suspendisse porttitor leo diam, molestie dictum purus dictum in. Suspendisse purus lacus, eleifend sit amet odio sed, maximus semper velit. Suspendisse potenti. Nunc posuere lectus sit amet nibh tempor scelerisque.";
  constructor() { }

  ngOnInit() {
  }

}
