import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

export interface Project {
  id: number,
  jobTitle: string,
  company: string,
  domainImage: string
  projectInformation: string,
  rolePeriod: string
}
@Component({
  selector: 'app-root',
  imports: [NgClass, RouterModule, MatTooltipModule, MatTooltip, MatButtonToggleModule, MatCardModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'portfolio';
  linkedInUrl: string = "https://www.linkedin.com/in/thallada-sai-mounika-0ab153227/";
  gitHubUrl: string = "https://github.com/thalladasaimounika";
  aboutContent: string = "I'm a passionate and detail-oriented Frontend Developer with a strong focus on Angular. With hands-on experience building dynamic, scalable web applications, I specialize in crafting responsive user interfaces and maintaining clean, modular code. Over the years, I’ve worked on multiple enterprise-grade Angular projects, collaborating closely with designers, backend teams, and stakeholders to deliver high-performance applications. I thrive in fast-paced environments, love solving problems, and continuously seek to learn and improve. My goal is to create seamless digital experiences that are both functional and user-friendly. When I'm not coding, you'll likely find me exploring new web technologies, improving performance techniques, or mentoring junior developers.";
  selectedNav: string = "about";
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('educationSection') educationSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('interestsSection') interestsSection!: ElementRef;
  @ViewChild('awardsSection') awardsSection!: ElementRef;
  isNavMenuHidden: boolean = true;
  @ViewChild('tooltipRef') angularTooltip!: MatTooltip;
  skillsView: string = "iconView";
  projectsList: Array<Project> = [];
  dialog = inject(MatDialog);

  ngOnInit() {
    window.scrollTo(0, 0);
    this.selectedNav = "about";
    this.projectsList = [
      {
        id: 1,
        jobTitle: "Software Engineer",
        company: "Oracle India Pvt Ltd",
        domainImage: "construction.png",
        projectInformation: "Developed and enhanced a responsive, role-based web application using Oracle JET (JavaScript Extension Toolkit) for managing employee projects, roles, timesheets, and performance dashboards. The application is used across multiple business units to streamline internal operations...",
        rolePeriod: "May 2022 - Present"
      },
      {
        id: 2,
        jobTitle: "System Engineer",
        company: "Tata Consultancy Services",
        domainImage: "health_care1.png",
        projectInformation: "A responsive web application built for hospitals to manage patient data, schedule appointments, track prescriptions, and provide teleconsultation features. Designed for doctors, patients, and administrative staff to streamline operations and improve care delivery.",
        rolePeriod: "March 2020 - May 2022"
      },
      {
        id: 3,
        jobTitle: "Associate System Engineer",
        company: "Tata Consultancy Services",
        domainImage: "health_care2.png",
        projectInformation: "Reggie is a comprehensive healthcare web application designed to streamline patient management, health records and billing processes for hospitals and clinics. It enables healthcare professionals to deliver efficient and secure care while giving patients easy access to their health data.",
        rolePeriod: "December 2018 - March 2020"
      },
    ]
  }
  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("target:" + entry.target.id);
            this.selectedNav = entry.target.id;
          }
        });
      },
        {
          threshold: 0.5, //50% of the section must be visible
        }
      );
      observer.observe(this.aboutSection.nativeElement);
      observer.observe(this.experienceSection.nativeElement);
      observer.observe(this.educationSection.nativeElement);
      observer.observe(this.skillsSection.nativeElement);
      observer.observe(this.interestsSection.nativeElement);
      observer.observe(this.awardsSection.nativeElement);
    }
    else {
      console.warn('IntersectionObserver is not available in this environment.');
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.selectedNav = "about";
  }
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'Thallada Sai Mounika _UI_Resume.pdf'; // Path to your PDF in src/assets/
    link.download = 'Thallada_Sai_Mounika_Resume.pdf';
    link.click();
  }
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.selectedNav = sectionId;
    this.isNavMenuHidden = true;
  }
  openNavigationMenu() {
    //let navMenu = document.getElementById("navbarResponsive");
    //let navButton = document.getElementById("navButton");
    this.isNavMenuHidden = !this.isNavMenuHidden;
  }
  showTooltip() {
    this.angularTooltip.show();

    // Optional: Auto-hide after 2 seconds
    setTimeout(() => this.angularTooltip.hide(), 4000);
  }
  openRolesAndResponsibilitiesModal(id: number) {
    this.dialog.open(ProjectContentDialog, {
      data: {
        id: id
      }
    });
  }
}

@Component({
  selector: 'project-content-dialog',
  templateUrl: 'project-content-dialog.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class ProjectContentDialog implements OnInit{
  data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    
  }
}
