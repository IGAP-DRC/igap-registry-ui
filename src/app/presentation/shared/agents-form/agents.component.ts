import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      birthPlace: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      identityCardType: ['', Validators.required],
      identityCardNumber: [''],
      identityCardIssueDate: [''],
      identityCardIssuePlace: [''],
      identityCardExpiryDate: [''],
      address: [''],
      maritalStatus: [''],
      numberOfChildren: [0],
      agentIDNumber: [''],
      isSalaried: [false],
      receivesAllowance: [false],
      isRegistered: [false],
      hasBiometricCard: [false],
      biometricCardNumber: ['']
    });
    this.updateAgentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      birthPlace: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      identityCardType: ['', Validators.required],
      identityCardNumber: [''],
      identityCardIssueDate: [''],
      identityCardIssuePlace: [''],
      identityCardExpiryDate: [''],
      address: [''],
      maritalStatus: [''],
      numberOfChildren: [0],
      agentIDNumber: [''],
      isSalaried: [false],
      receivesAllowance: [false],
      isRegistered: [false],
      hasBiometricCard: [false],
      biometricCardNumber: ['']
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

  addData(){
    if(confirm("Voulez-vous ajouter cette information")){
      this.agent.createAgent(this.agentForm.value).subscribe({
        next: (response)=>{
          alert("Information ajouté avec success");
        },
        error: (error)=>{
          alert(error);
        }
      })
    }
  }
}
