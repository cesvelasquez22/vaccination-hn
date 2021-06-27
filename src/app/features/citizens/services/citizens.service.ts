import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Citizen } from '../models/citizen.interface';

@Injectable()
export class CitizensService {
  constructor(private afs: AngularFirestore) {}

  getCitizenByDni(dni: string) {
    return this.afs
      .collection('citizens', (ref) => ref.where('dni', '==', dni))
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((action) => {
            const data = action.payload.doc.data() as Citizen;
            data.uid = action.payload.doc.id;
            return data;
          });
        })
      );
  }
}
