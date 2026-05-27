import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {


  constructor(){}

  ngOninit(){}

  scrollToWork() {
    this.scrollToSection('workExperienceSection');
  }

  scrolltoproject(){
    this.scrollToSection('ProjectWorkSection');
  }

  scrolltoprojectmodern(){
    this.scrollToSection('ProjectWorkSectionmodern');
  }

  scrolltoprojecttech(){
    this.scrollToSection('ProjectWorkSectiontech');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'    
      });
    }
  }

}
