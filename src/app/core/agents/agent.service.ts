import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  baseUrl = environment.baseUrl;
  agentsUrl = this.baseUrl+environment.agents

  constructor(private http:HttpClient) { }


  createAgent(agent:any): Observable<any> {
    return this.http.post<any>(this.agentsUrl, agent);
  }

  getAgentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.agentsUrl}/${id}`);
  }

  getAllAgents(): Observable<[]> {
    return this.http.get<[]>(this.agentsUrl);
  }

  updateAgent(agent:any): Observable<any> {
    return this.http.put<any>(`${this.agentsUrl}/${agent.id}`, agent);
  }

  deleteAgent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.agentsUrl}/${id}`);
  }
}
