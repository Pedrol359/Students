
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from "../models/student";
import { StudentService } from "../services/student.service";
import { AlertController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];

  constructor(private studentService: StudentService, private alertController: AlertController, private router: Router) {
    this.studentService.getStudents().subscribe( res => {
      this.students = res;
      console.log(this.students);
    })
  }

  public async removeStudent(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            this.studentService.removeStudent(id);
          }
        }
      ]
    });
    await alert.present();
  }
  public getStudentByControlNumber(cn: string): void {
    this.router.navigate(['/view-student'], {
      queryParams: { cn: cn },
    });
  }

  public updateStudent(id: string) {
    this.router.navigate(['/edit-student'], { 
      queryParams: { id: id},
    });
  }

  public getStudentById(id: string){
    this.router.navigate(['/view-student'], {
      queryParams: { id: id},
    });
  }
  public goToNewStudent(): void {
    this.router.navigate(['/new-student']);
  }

}
