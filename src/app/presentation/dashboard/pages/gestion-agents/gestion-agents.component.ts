import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { SideNavComponent } from "../../../shared/side-nav/side-nav.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { AgentsComponent } from "../../../shared/agents-form/agents.component";
import { AgentService } from '../../../../core/agents/agent.service';

@Component({
  selector: 'app-gestion-agents',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, FooterComponent, AgentsComponent],
  templateUrl: './gestion-agents.component.html',
  styleUrl: './gestion-agents.component.css'
})
export class GestionAgentsComponent implements OnInit{
  
  data:any;

  constructor(private agent:AgentService){}
  
  ngOnInit(): void {
    this.onGetData();
  }

  onGetData(){
    this.agent.getAllAgents().subscribe({
      next: (response)=>{
        this.data = response;
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }
}
