import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ModernWebCapabilitiesComponent } from './modern-web-capabilities/modern-web-capabilities.component';
import { GetInTouchFormComponent } from './get-in-touch-form/get-in-touch-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FrontPageComponent,TechnicalSkillComponent,WorkExperienceComponent,ModernWebCapabilitiesComponent,GetInTouchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'self';
}
