import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";

import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router
    
  ) { }

  getDocument(collection: string): Observable<any[]> {
    //return this.firestore.collection("StudentCollection").valueChanges();
    return this.firestore.collection("1").valueChanges({idField: 'id'});
  
  }

  // Add a new document
  addDocument(data: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection("1").doc(id).set(data);
  }

  // Update a document
  updateDocument(id: string, data: any): Promise<void> {
    return this.firestore.collection("1").doc(id).update(data);
  }

  // Delete a document
  deleteDocument(id: string): Promise<void> {
    return this.firestore.collection("1").doc(id).delete();
  }

}