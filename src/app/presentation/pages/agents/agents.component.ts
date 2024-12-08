import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AgentService } from '../../../core/agents/agent.service';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  currentStep = 0;
  progressWidth = '0%';

  agentForm:FormGroup;
  updateAgentForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private agent:AgentService){
    this.agentForm = this.formBuilder.group({

    });
    this.updateAgentForm = this.formBuilder.group({

    });
  }

  nextStep() {
    if (this.currentStep < 17) {
      this.currentStep++;
      this.updateProgress();
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.updateProgress();
    }
  }

  updateProgress() {
    this.progressWidth = `${(this.currentStep / 17) * 100}%`;
  }

  onSubmit() {
    console.log('Formulaire soumis :');
  }
}
