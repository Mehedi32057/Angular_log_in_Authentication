import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route:Router){

  }


  http=inject(HttpClient)

  loginObj:any={
    "EmailId": " ",
    "Password": " "
  }

  logON(){
    // debugger;

    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
// debugger;
if(res.result){
  alert("Log in Success")
  this.route.navigateByUrl('dashboard');


}
else{
  alert("check your user name or password")


}




    })



  }












}
