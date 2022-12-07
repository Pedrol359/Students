
import { Injectable } from '@angular/core';
import { Student } from "../models/student";
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor(private firestore: AngularFirestore) {

  }

  public getStudents() {
    return this.firestore.collection('students').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Student;
          const id = a.payload.doc.id;
          return { id, ...data }; 
        });
      })
    );
  }

  
  public newStudent(student: Student) {
      this.firestore.collection('students').add(student);
    }
  public removeStudent(id: string){
    this.firestore.collection('students').doc(id).delete();
  }
  public getStudentById(id: string){
    let result = this.firestore.collection('students').doc(id).valueChanges();
    return result;
  }

  public updateStudent(student: Student, id: string){
    this.firestore.doc('students/'+id).update(student);
  }

  public getStudentByControlNumber(controlnumber: string): Student {
    let item: Student = this.students.find((student)=> {
      return student.controlnumber===controlnumber;
    });
    return item;
  }
}
