import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  technicalSkills=[
    {
      'img':"../../assets/angular.png",
      'border':"#0b97da",
      'Field':"FrontEnd Development",
      'Skill':[
          {'Languages':"Angular",'Percentage':"95%","color": 'linear-gradient(to right, #2196F3, #0b4779ff)'},
          {'Languages':"Typescript",'Percentage':"95%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
          {'Languages':"Reactive Form",'Percentage':"95%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
          {'Languages':"Jspdf Library",'Percentage':"80%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
      ]
      
    },
    {
      'img':"../../assets/database.png",
      'border':"#029002",
      'Field':"Backend & APIs",
     'Skill':[
          {'Languages':"Asp .Net Core",'Percentage':"75%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Sql Database",'Percentage':"75%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Restful APIs",'Percentage':"60%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Authentication",'Percentage':"93%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
      ]
    },
    {
      'img':"../../assets/rockett.png",
      'border':"#a159ff",
      'Field':"Performance & DevOps",
      'Skill':[
          {'Languages':"Performance Optimization",'Percentage':"85%","color": 'linear-gradient(to right, #a34ef3ff, #4e24a2ff)'},
          {'Languages':"CI/CD & Deployment",'Percentage':"95%","color": 'linear-gradient(to right, #a34ef3ff, #4e24a2ff)'},
          {'Languages':"Version Control(Git)",'Percentage':"80%","color": 'linear-gradient(to right, #a34ef3ff, #4e24a2ff)'},
          {'Languages':"Unit Testing",'Percentage':"90%","color": 'linear-gradient(to right, #a34ef3ff, #4e24a2ff)'},
      ]
    },
  ]

  workExperienceskill=[
    {
      'project':"Concent Management System",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'border':"#0b97da",
      'Technical':"The Mconnect Consent & Grievance Management System is an enterprise-grade extension built within the existing Mconnect ecosystem. It is designed to digitize, secure, and streamline the end-user consent lifecycle and provide a robust mechanism for handling consumer grievances (complaints). The system features a distinct split architecture consisting of a Public-Facing Customer Portal (triggered via SMS automation) and a Secure Admin Dashboard protected by token-based authentication."
    },
    {
      'project':"Mconnect NASA Loan Management System",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"95",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'border':"#029002",
      'Technical':"Developed and integrated robust APIs using .NET Core.Directly interacted with the SQL Database for efficient data fetching and management.Used integrated Full-Stack ownership to diagnose and resolve cross-layer issues promptly.Responsible for Unit testing, project building, and IIS server publishing/deployment."
    },
    {
      'project':"Rinraksha System Optimization & Backend",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'border':"#a159ff",
      'Technical':"Performed precise calculation of tank measurements using a specific formula.Implemented Robust Authorization and Authentication (including automatic email/OTP generation).Utilized a SQL database for data storage and supported flexible database migration."
    },
    {
      'project':"Oil Tank Management System",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'border':"#0b97da",
      'Technical':"Effective use of core Angular features like Reactive Forms and HTTP Client API integration.Designed Responsive and Maintainable layouts using HTML grids.Developed key features including a feature-rich email application (with spam filtering), a B2B e-commerce platform (for product management), and a chat application."
    },
    {
      'project':"B2B E-commerce & Diverse Web Applications",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'border':"#029002",
      'Technical':"Proficient in leveraging Angular's Reactive Forms and HTTP Client to architect scalable front-end systems, featuring a high-performance B2B E-commerce engine, real-time Chat modules, and an intelligent Email client with spam filtering."
    }
  ]

  modernweb=[
    {
      'modernImg':"../../assets/pwa.gif",
      'label':"Progressive Web App(PWA)",
      'keyPoints':"Management\nDesign/Crafting\nIntegrity\nReliability",
      'border':"#0b97da",
    },
    {
      'modernImg':"../../assets/RealTime.gif",
      'label':"Real-time Features",
      'keyPoints':"Monitoring\nprecise calculation mechanisms\nAPI Development\nData Handling/Data Transaction",
      'border':"#029002",
    },
    {
      'modernImg':"../../assets/B_Api.gif",
      'label':"Browser APIs",
      'keyPoints':"PDF Generation\nAngular's Forms\nHTTP Client API Integration\nFeatures/Core Components",
      'border':"#a159ff",
    },
    {
      'modernImg':"../../assets/performance.gif",
      'label':"Performance",
      'keyPoints':"Unit Testing\nCompilation\nEnd-to-End Optimization.",
      'border':"#0b97da",
    },
    {
      'modernImg':"../../assets/security.gif",
      'label':"Security",
      'keyPoints':"Versioning\nAuthentication\nCryptography",
      'border':"#a159ff",
    }
  ]

  constructor() { }
  

}
