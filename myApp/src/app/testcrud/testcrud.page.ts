import { Component, OnInit } from '@angular/core';
import { CRUDService } from './crudservice.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-testcrud',
  templateUrl: './testcrud.page.html',
  styleUrls: ['./testcrud.page.scss'],
})
export class TestcrudPage implements OnInit {

  items: any[] = [];

  
  constructor(private crudService: CRUDService, private alertController: AlertController) { }

  ngOnInit() {
    // Fetch documents from Firestore
    console.log("hello");
    this.crudService.getDocument('items').subscribe((data) => {
      this.items = data;
      console.log(this.items);
    });  
    
  }
  async alertAddForm() {

    const alert = await this.alertController.create({
      header: 'Input Alert',
      subHeader: 'Enter your information',
      inputs: [
        {
          name: 'fuulname',
          type: 'text',
          placeholder: 'Enter fullname'
        },
        {
          name: 'salary',
          type: 'number',
          placeholder: 'Enter salary'
        },
        {
          name: 'dob',
          type: 'date',
          placeholder: 'Enter DOB'
        },
        {
          name: 'city',
          type: 'text',
          placeholder: 'Enter city'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ADD',
          handler: (data) => {
        //make something
            this.crudService.addDocument(data);
            console.log("save"+data);
  
          }
         
        }
      ]
    });
  
    await alert.present();
  }//func

  async alertEditForm(tmpid: string, tmpdata: any) {

    const alert = await this.alertController.create({
      header: 'Input Alert',
      subHeader: 'Enter your information',
      inputs: [
        {
          name: 'fuulname',
          type: 'text',
          placeholder: 'Enter fullname',
          value: tmpdata.fuulname
        },
        {
          name: 'salary',
          type: 'number',
          placeholder: 'Enter salary',
          value: tmpdata.salary
        },
        {
          name: 'dob',
          type: 'date',
          placeholder: 'Enter DOB',
          value: tmpdata.dob
        },
        {
          name: 'city',
          type: 'text',
          placeholder: 'Enter city',
          value: tmpdata.city
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: (data) => {
        //make something
            this.crudService.updateDocument(tmpid,data);
            console.log("save"+data);
  
          }
         
        }
      ]
    });
  
    await alert.present();
  }//

  async deleteItem(tmpid: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete canceled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            // Call the delete method in your service
            this.crudService.deleteDocument(tmpid);
            console.log('Deleted item with id:', tmpid);
          }
        }
      ]
    });

    await alert.present();
  }
}


