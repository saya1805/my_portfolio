import { Component } from '@angular/core';
import { ArrayServiceService } from '../services/array-service.service';

@Component({
  selector: 'app-technical-skill',
  standalone: true,
  imports: [],
  templateUrl: './technical-skill.component.html',
  styleUrl: './technical-skill.component.css'
})
export class TechnicalSkillComponent {
  arrays:any = []
  private readonly targetSectionId = 'Technicalskillsexperience';

  constructor(public arrayservice:ArrayServiceService){
     this.arrays = this.arrayservice.technicalSkills
  }

  scrollToWork() {
    this.scrollToSection(this.targetSectionId);
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
