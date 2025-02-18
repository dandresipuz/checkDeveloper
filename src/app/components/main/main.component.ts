import { Component, OnInit } from '@angular/core';
import { SkillService } from './services/skill.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userName: string = '';
  visible:boolean = false;
  showName:boolean = false;
  listSkills: string = '';

  constructor(private apiService: SkillService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.visible = true;
  }

  go(): void {
    if (this.userName != '') {
      this.visible = false;
      this.showName = true;
    }
  }

  validate(): void {
    if (this.listSkills != '') {
      this.apiService.validate(this.listSkills)
      .subscribe({
        next: (res: boolean) => {
          this.messageService.add({ 
            severity: (res)?'success':'info',
            summary: 'Validación', 
            detail: (res)?'Eres developer, bienvenido a Banistmo':'muchas gracias, pero no cumples con los requisitos'});

            this.listSkills = '';
        },
        error: (error: any) => {
          console.error(error);
          this.messageService.add({ 
            severity: 'error',
            summary: 'Error', 
            detail: 'Ha ocurrido un error; intenta de nuevo'});
        }
      });
    }
  }
}
