import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";


export interface CustomerData {
id?: string;
fullname: string;
salary: number;
city: string;

}


@Injectable({
providedIn: 'root'
})


export class HomeCrudService {


private _DB : any;
constructor(private firestore: Firestore) { }


loadAllData(): Observable<CustomerData[]> {
        const notesRef = collection(this.firestore, 'StudentCollection');
        return collectionData(notesRef, { idField: 'id'}) as Observable<CustomerData[]>;
}


}//class