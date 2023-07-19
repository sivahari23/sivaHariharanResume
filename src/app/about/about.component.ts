import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title = "Profile Summary:"

  list = [{
    point: `Highly skilled Front-End Developer with 2+ years of experience designing,
   developing, and implementing complex and innovative web applications.`}
    , {
    point: `Good knowledge in all stages of SDLC and Defect Life Cycle.`
  },
  {
    point: `Extensive knowledge JavaScript, jQuery, Typescript, HTML ,CSS,
   a client-side framework using Angular, and server-side framework using Node.js`
  },
  {
    point: `Good knowledge of Angular JS , HTML5, CSS3, JSON, JQuery and MS SQL Exposure to Ant and Maven.`
  },
  {
    point: `Strong understanding of UX/UI design principles and experience collaborating with UX/UI designers
   and back-end developers Committed to delivering 
  high-quality, responsive, and user-friendly web applications that provide exceptional user experiences.`

  },
  {
    point: `Sound knowledge of object –oriented Programming (OOP) patterns and concepts.`

  },
  {
    point: `Good knowledge on JavaScript ES5/ES6.`

  },
  ]

}
