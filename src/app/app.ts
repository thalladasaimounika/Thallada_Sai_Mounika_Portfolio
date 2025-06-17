import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected title = 'portfolio';
  linkedInUrl: String = "https://www.linkedin.com/in/thallada-sai-mounika-0ab153227/";
  gitHubUrl: String = "https://github.com/thalladasaimounika";
  aboutContent: String = "I'm a passionate and detail-oriented Frontend Developer with a strong focus on Angular. With hands-on experience building dynamic, scalable web applications, I specialize in crafting responsive user interfaces and maintaining clean, modular code. Over the years, I’ve worked on multiple enterprise-grade Angular projects, collaborating closely with designers, backend teams, and stakeholders to deliver high-performance applications. I thrive in fast-paced environments, love solving problems, and continuously seek to learn and improve. My goal is to create seamless digital experiences that are both functional and user-friendly. When I'm not coding, you'll likely find me exploring new web technologies, improving performance techniques, or mentoring junior developers.";
  selectedNav: String = "about";
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('educationSection') educationSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('interestsSection') interestsSection!: ElementRef;
  @ViewChild('awardsSection') awardsSection!: ElementRef;

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
  }
  openNavigationMenu() {
    
  }
}
