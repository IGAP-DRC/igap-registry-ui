import { Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  currentStep = 0;
  progressWidth = '0%';
  
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
