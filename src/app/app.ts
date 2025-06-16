import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'portfolio';
  linkedInUrl: String = "https://www.linkedin.com/in/thallada-sai-mounika-0ab153227/";
  gitHubUrl: String = "https://github.com/thalladasaimounika";
  aboutContent: String = "I'm a passionate and detail-oriented Frontend Developer with a strong focus on Angular. With hands-on experience building dynamic, scalable web applications, I specialize in crafting responsive user interfaces and maintaining clean, modular code. Over the years, I’ve worked on multiple enterprise-grade Angular projects, collaborating closely with designers, backend teams, and stakeholders to deliver high-performance applications. I thrive in fast-paced environments, love solving problems, and continuously seek to learn and improve. My goal is to create seamless digital experiences that are both functional and user-friendly. When I'm not coding, you'll likely find me exploring new web technologies, improving performance techniques, or mentoring junior developers.";

  ngOnInit(){
    
  }
  scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
  }

}
