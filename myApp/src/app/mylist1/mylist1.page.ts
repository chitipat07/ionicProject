import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Product {
  id: number;
  productname: string;
  price: string;
  quantity: number;
  icon: string;
}

@Component({
  selector: 'app-mylist1',
  templateUrl: './mylist1.page.html',
  styleUrls: ['./mylist1.page.scss'],
})
export class Mylist1Page implements OnInit {
  productlist: Product[];

  constructor(public alertController: AlertController) {
    this.productlist = [
      {
        id: 1,
        productname: "Perfume",
        price: "1055",
        quantity: 1,
        icon: "https://img.icons8.com/color/48/perfume-bottle.png",
      },
      {
        id: 2,
        productname: "Face-Powder",
        price: "355",
        quantity: 1,
        icon: "https://img.icons8.com/color/48/face-powder.png",
      },
      {
        id: 3,
        productname: "Nail Polish",
        price: "125",
        quantity: 1,
        icon: "https://img.icons8.com/color/48/eye-shadows.png",
      }
    ];
  }

  ngOnInit() {}

  async addOrder(item: Product) {
    let alert = await this.alertController.create({
      header: 'Edit',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'product name',
          value: item.productname
        },
        {
          name: 'inprice',
          placeholder: 'price',
          value: item.price
        },
        {
          name: 'inquantity',
          type: 'number',
          placeholder: 'Quantity',
          value: item.quantity.toString()
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            console.log("update", this.productlist.length);
            console.log(item);
            for (let i = 0; i < this.productlist.length; i++) {
              console.log(this.productlist[i]);
              if (this.productlist[i] === item) { // found
                console.log("data.inpname", data.inpname, data.inprice, data.inquantity);

                this.productlist[i].productname = data.inpname;
                this.productlist[i].price = data.inprice;
                this.productlist[i].quantity = data.inquantity;
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteOrder(item: Product) {
    const alert = await this.alertController.create({
      header: 'คุณแน่ใจว่าจะลบ',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.productlist = this.productlist.filter((product: Product) => product !== item);
            console.log("Deleted item:", item);
          }
        }
      ]
    });

    await alert.present();
  }
}
