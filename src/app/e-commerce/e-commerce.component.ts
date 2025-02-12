import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-commerce',
  imports: [FormsModule],
  templateUrl: './e-commerce.component.html',
  styleUrl: './e-commerce.component.css'
})
export class ECommerceComponent {

  userText = {userName:'', passWord:'' }

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
    console.log('Login', loginForm?.style.display);
    console.log('create', createForm?.style.display);
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
      console.log('Login', loginForm?.style.display);
      console.log('create', createForm?.style.display);
    }
  }

  backToLogin(){
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("formToCreate");
    if(loginForm && createForm){
      loginForm.style.display = "block";
      createForm.style.display = "none";
      console.log('Login', loginForm?.style.display);
      console.log('create', createForm?.style.display);
    }
  }

  userLogin(){
    const crtUser = this.users.find((d:any) => d.user == this.userText.userName)
    console.log(crtUser);
    console.log(this.userText);
    if(crtUser){
      if(crtUser.pass == this.userText.passWord){
        alert('Successfull');
      }
      else{
        alert('Incorrect Password');
      }
    }
    else{
      alert('User does not Exist');
    }
  }

}
