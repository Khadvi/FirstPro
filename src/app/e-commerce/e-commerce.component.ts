import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-commerce',
  imports: [FormsModule, CommonModule],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {

  userText = {user:'', pass:'' }
  message = '';
  currentTab = 'items';
  isCart = '';
  itemDetails:any = [
    {
      name: 'Kurama',
      title: 'Nine Tailed Beast',
      id: '9',
      img: 'https://th.bing.com/th/id/OIP.dBSnhZQxV8dWPdSbcoOSmgHaF6?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Gyuki',
      title: 'The Eight-Tailed Octo-Ox Beast',
      id: '8',
      img: 'https://vignette.wikia.nocookie.net/every-universe/images/a/ae/Hachibi_render_request_by_bechienot-d57j07e.png/revision/latest?cb=20170513065133'
    },
    {
      name: 'Chomei',
      title: 'The Seven-Tailed Flying Beetle Beast',
      id: '7',
      img:'https://vignette.wikia.nocookie.net/wwwdynapaul/images/5/57/Prototype_Seven_Tails.png/revision/latest?cb=20141120051850'
    },
    {
      name: 'Saiken',
      title: 'The Slimy Six-Tailed Slug Beast',
      id: '6',
      img: 'https://64.media.tumblr.com/a74632d81d6133d835da5f0cb693237a/394ffd127f10d1e8-02/s1280x1920/1098d395d1dfbb2be9672f83a988aa74ec9043ce.jpg'
    },
    {
      name: 'Kokuo',
      title: 'The Majestic Five-Tailed Beast',
      id: '5',
      img: 'https://th.bing.com/th/id/OIP.FwfslGjpqHQdki_0qTaH2wHaFk?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Son Goku',
      title: 'The Four-Tailed Monkey King Beast',
      id: '4',
      img: 'https://th.bing.com/th/id/OIP.4Gn4rRFF-XRvMd_tbwGePAHaHI?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Isobu ',
      title: 'The Three-Tailed Armored Sea Beast',
      id: '3',
      img: 'https://qph.cf2.quoracdn.net/main-qimg-42b705996d954f3eed0c71176c072f77'
    },
    { 
      name: 'Matatabi ',
      title: ' The Fiery Two-Tailed Cat Beast ',
      id: '2',
      img: 'https://qph.cf2.quoracdn.net/main-qimg-dae22dd5f3ce1dd34d2644f5d5cdfe39'
    },
    {
      name: 'Shukaku ',
      title: 'The Sandy One-Tailed Tanuki Beast',
      id: '1',
      img: 'https://th.bing.com/th/id/OIP.l-gIDCGzyghN9kRTE3ZaSgAAAA?rs=1&pid=ImgDetMain'
    }
  ]

    
    

  cartDetails: any = [];

  users:any = [
    {
      user:'khadvi' , pass:'khadvi'
    },
    {
      user:'sharath' , pass:'sharath'
    }
  ]

  ngOnInit() {
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("formToCreate");
    // console.log('Login', loginForm?.style.display);
    // console.log('create', createForm?.style.display);
    if (createForm) {
      createForm.style.display = "none";
    }
  }

  showCreateAccount() {
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("formToCreate");
    if(loginForm && createForm) {
      loginForm.style.display = "none";
      createForm.style.display = "block";
      // console.log('Login', loginForm?.style.display);
      // console.log('create', createForm?.style.display);
    }
  }

  backToLogin(){
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("formToCreate");
    if(loginForm && createForm){
      loginForm.style.display = "block";
      createForm.style.display = "none";
      // console.log('Login', loginForm?.style.display);
      // console.log('create', createForm?.style.display);
    }
  }

  userLogin(){
    const crtUser = this.users.find((d:any) => d.user == this.userText.user)
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("formToCreate");
    const eWebsite = document.getElementById('e-website');
    // console.log(crtUser);
    // console.log(this.users);
    // console.log(this.userText);
    if(crtUser){
      if(crtUser.pass == this.userText.pass){
        this.message = 'Login Successfull';
        if(loginForm && createForm && eWebsite){
          loginForm.style.display = "none";
          createForm.style.display = "none";
          eWebsite.style.display = "block";
        }
      }
      else{
        this.message = 'Incorrect Password. Try again...';
      }
    }
    else{
      this.message = 'Incorrect User Name or User does not Exist';
    }
  }

  createAccount(){
    this.users.push(this.userText);
    // console.log(this.users);
  }

  activeTab(p:any){
    if(p == 'items'){
      this.currentTab = 'items';
    }
    else if(p == 'cart'){
      this.currentTab = 'cart';
      // console.log(this.cartDetails.length);
      if(this.cartDetails.length < 1){
        this.isCart = 'empty';
      }
      else{
        this.isCart = 'notEmpty';
      }
    }
    else if(p == 'account'){
      this.currentTab = 'account'
    }
  }

  addToCart(d:any){
    const newItem = this.itemDetails.find((i: { id: any; }) => i.id === d);
    if(!this.cartDetails.includes(newItem)){
      newItem.numb = 1;
      this.cartDetails.push(newItem);
    }
    else{
      newItem.numb++;
    }
    console.log(this.cartDetails);
  }

  inItemCount(d: any){
    const itemCount = this.cartDetails.find((i: { id: any; }) => i.id === d);
    itemCount.numb++;
  }

  decItemCount(d: any){
    const itemCount = this.cartDetails.find((i: { id: any; }) => i.id === d);
    itemCount.numb--;
  }

  deleteItem(d:any){
    this.cartDetails = this.cartDetails.filter((i: {id: any}) => i.id !== d);
    console.log(this.cartDetails)
  }

}
