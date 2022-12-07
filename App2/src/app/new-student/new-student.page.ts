/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public student: Student;
  public myForm: FormGroup;
  public validationMessages: object;

  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      /*controlnumber:["", Validators.compose([Validators.minLength(8), Validators.required, Validators.pattern('^[0-9]+$')])],
      name:["", Validators.required],
      curp:["", Validators.compose([Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      age:[0, Validators.compose([Validators.required, Validators.min(17)])],
      nip:[0, Validators.compose([Validators.required, Validators.min(10)])],
      email:["", Validators.compose([Validators.required, Validators.email])],
      career:["", Validators.required],
      photo:["", Validators.compose([Validators.required])]*/
      controlnumber:["18401082", Validators.compose([Validators.minLength(8), Validators.required, Validators.pattern('^[0-9]+$')])],
      name:["PEDRO AVILA", Validators.required],
      curp:["AIBP000629HNTVRDA3", Validators.compose([Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      age:[22, Validators.compose([Validators.required, Validators.min(17)])],
      nip:[5136, Validators.compose([Validators.required, Validators.min(10)])],
      email:["peavilabe@ittepic.edu.mx", Validators.compose([Validators.required, Validators.email])],
      career:["ISC", Validators.required],
      photo:["https://scontent.ftpq1-1.fna.fbcdn.net/v/t1.6435-9/119482051_3263222990451881_8459055027636276360_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhjo7GfRfa8Dt8pTrvaLyGOCwV3m_cG_Y4LBXeb9wb9q-1pEHTNjYln7ZtzDYnOPungKa0wFxNf567VHnw3w8W&_nc_ohc=MXtaiji453MAX8zTHkw&_nc_oc=AQmIz9tP5qGQSwvCUJqVorqP67v90inBlahA2vRbynkU0M3eJiXjPeCsQTx795HXoTg&_nc_ht=scontent.ftpq1-1.fna&oh=00_AfDeH8BizrApZvt8qMar806Q3HRxlN3G6fbZgLvdsLFWMw&oe=63B1259E", Validators.compose([Validators.required])]
    });

    this.validationMessages = {
      'controlnumber': [
        { type: 'required', message: "Debe capturar el número de control"},
        { type: 'minlength', message: "El número de control parece estar mal formado"},
        { type: 'pattern', message: "El número de control debe contener sólo números"}
      ],
      'name': [
        { type: 'required', message: "Debe capturar el nombre"}
      ],
      'curp': [
        { type: 'required', message: "Debe capturar la CURP"},
        { type: 'pattern', message: "La CURP parece estar mal formada"}
      ],
      'age': [
        { type: 'required', message: "Debe capturar la edad"},
        { type: 'min', message: "La edad es incorrecta"}
      ],
      'nip': [
        { type: 'required', message: "Debe capturar el NIP"},
        { type: 'min', message: "El NIP debe ser mayor a 9"}
      ],
      'email': [
        { type: 'required', message: "Debe capturar el email"},
        { type: 'email', message: "El email parece estar mal formado"}
      ],
      'career': [
        { type: 'required', message: "Debe capturar la carrera"}
      ],
      'photo': [
        { type: 'required', message: "Debe capturar la url de la fotografía"}
      ]
    }
  }

  public newStudent() {
    this.student = {
      controlnumber: this.myForm.controls.controlnumber.value,
      name: this.myForm.controls.name.value,
      curp: this.myForm.controls.curp.value,
      age: this.myForm.controls.age.value,
      nip: this.myForm.controls.nip.value,
      email: this.myForm.controls.email.value,
      career: this.myForm.controls.career.value,
      photo: this.myForm.controls.photo.value,
    }

    this.studentService.newStudent(this.student);
    this.back();
    
  }

  back(): void{
    this.router.navigate(['..']);
  }

}
