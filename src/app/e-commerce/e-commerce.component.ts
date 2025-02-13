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

  users:any = [
    {
      user:'khadvi' , pass:'khadvi09'
    },
    {
      user:'sharath' , pass:'raccha143'
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

}
