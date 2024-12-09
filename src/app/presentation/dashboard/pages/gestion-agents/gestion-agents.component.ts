import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { SideNavComponent } from "../../../shared/side-nav/side-nav.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { AgentsComponent } from "../../../shared/agents-form/agents.component";

@Component({
  selector: 'app-gestion-agents',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, FooterComponent, AgentsComponent],
  templateUrl: './gestion-agents.component.html',
  styleUrl: './gestion-agents.component.css'
})
export class GestionAgentsComponent {

}
