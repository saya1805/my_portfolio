import { Component } from '@angular/core';
import { ArrayServiceService } from '../services/array-service.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  workarray:any=[]

  constructor(private arrayservice:ArrayServiceService){
    this.workarray = this.arrayservice.workExperienceskill

    this.workarray = this.workarray.map((item:any) => ({
      ...item, // 'spread operator' वापरून मूळ ऑब्जेक्टमधील सर्व properties जशाच्या तशा ठेवा
      
      // '\n' (New Line) ने स्ट्रिंग विभाजित करा आणि नवीन 'TechnicalBullets' ॲरे तयार करा.
      TechnicalBullets: item.Technical
        .split('\n') // स्ट्रिंगला '\n' कॅरेक्टरनुसार विभाजित करून ॲरे बनवा
        .filter((sentence:any) => sentence.trim() !== '') // रिकाम्या (empty) किंवा फक्त whitespace असलेल्या एंट्रीज वगळा
    }));
  }

}
