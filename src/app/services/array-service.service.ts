import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {
  technicalSkills=[
    {
      'img':"../../assets/paint.png",
      'Field':"FrontEnd Development",
      'Skill':[
          {'Languages':"Angular",'Percentage':"95%","color": 'linear-gradient(to right, #2196F3, #0b4779ff)'},
          {'Languages':"Typescript",'Percentage':"95%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
          {'Languages':"Reactive Form",'Percentage':"95%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
          {'Languages':"Jspdf Library",'Percentage':"80%","color": 'linear-gradient(to right,  #2196F3, #0b4779ff)'},
      ]
      
    },
    {
      'img':"../../assets/highvoltage.png",
      'Field':"Backend & APIs",
     'Skill':[
          {'Languages':"Asp .Net Core",'Percentage':"75%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Sql Database",'Percentage':"75%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Restful APIs",'Percentage':"60%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
          {'Languages':"Authentication",'Percentage':"93%","color": 'linear-gradient(to right, #8BC34A, #547555ff)'},
      ]
    },
    {
      'img':"../../assets/rocket.png",
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
      'project':"Mconnect NASA Loan Management System",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'Technical':"Utilized Angular functionalities (Pipes, Directives, Routing) for efficient data structuring.\nGenerated professional PDF documents/reports using the jsPDF library.\nEnsured Project Coordination with Business and Underwriting teams for effective solution delivery.\nManaged Version Control (Git) and prepared comprehensive Technical Documentation."
    },
    {
      'project':"Rinraksha System Optimization & Backend",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'Technical':"Developed and integrated robust APIs using .NET Core.\nDirectly interacted with the SQL Database for efficient data fetching and management.\nUsed integrated Full-Stack ownership to diagnose and resolve cross-layer issues promptly.\nResponsible for Unit testing, project building, and IIS server publishing/deployment."
    },
    {
      'project':"Oil Tank Management System",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'Technical':"Performed precise calculation of tank measurements using a specific formula.\nImplemented Robust Authorization and Authentication (including automatic email/OTP generation).\nUtilized a SQL database for data storage and supported flexible database migration."
    },
    {
      'project':"B2B E-commerce & Diverse Web Applications",
      'pSummary':"Core Angular Front-End and PDF Reporting Application for SBI Life Insurance.",
      'performace':"98",
      'Accessibilty':"100",
      'Matrix':"System Stability",
      'matrixnumber':"100",
      'Technical':"Effective use of core Angular features like Reactive Forms and HTTP Client API integration.\nDesigned Responsive and Maintainable layouts using HTML grids.\nDeveloped key features including a feature-rich email application (with spam filtering), a B2B e-commerce platform (for product management), and a chat application.\nFocused on delivering impactful and functional front-end solutions."
    }
  ]

  modernweb=[
    {
      'modernImg':"../../assets/pwa.gif",
      'label':"Progressive Web App(PWA)",
      'keyPoints':"Management\nDesign/Crafting\nIntegrity\nReliability"
    },
    {
      'modernImg':"../../assets/RealTime.gif",
      'label':"Real-time Features",
      'keyPoints':"Monitoring\nprecise calculation mechanisms\nAPI Development\nData Handling/Data Transaction"
    },
    {
      'modernImg':"../../assets/B_Api.gif",
      'label':"Browser APIs",
      'keyPoints':"PDF Generation\nAngular's Forms\nHTTP Client API Integration\nFeatures/Core Components"
    },
    {
      'modernImg':"../../assets/performance.gif",
      'label':"Performance",
      'keyPoints':"Unit Testing\nCompilation\nEnd-to-End Optimization."
    },
    {
      'modernImg':"../../assets/security.gif",
      'label':"Security",
      'keyPoints':"Versioning\nAuthentication\nCryptography"
    }
  ]

  constructor() { }
  

}
