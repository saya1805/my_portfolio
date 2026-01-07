import { Component } from '@angular/core';
import { ArrayServiceService } from '../services/array-service.service';

@Component({
  selector: 'app-modern-web-capabilities',
  standalone: true,
  imports: [],
  templateUrl: './modern-web-capabilities.component.html',
  styleUrl: './modern-web-capabilities.component.css'
})
export class ModernWebCapabilitiesComponent {
  moderArr:any=[]

  constructor(private modernService:ArrayServiceService){
    this.moderArr = this.modernService.modernweb
  }
}
