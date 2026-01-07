import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {

  private readonly targetSectionId = 'workExperienceSection';

  constructor(){}

  ngOninit(){}

  scrollToWork() {
    this.scrollToSection(this.targetSectionId);
  }

  // स्क्रोलिंग लॉजिक (हा फंक्शन थेट id वापरून स्क्रोल करेल)
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', // ⬅️ स्मूथ ॲनिमेशनसाठी
        block: 'start'      // ⬅️ सेक्शन स्क्रीनच्या वरच्या बाजूला दिसेल
      });
    }
  }

}
