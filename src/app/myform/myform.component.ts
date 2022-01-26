import { Dictators } from './../interfaces/dictators';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { RequestsService } from '../Services/requests.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {


  constructor(private fb:FormBuilder,private request: RequestsService) { }
  registrationForm = this.fb.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    birthdate: ['',Validators.required],
    deathdate: ['',Validators.required],
    description: ['',[Validators.required,Validators.maxLength(100)]],

  })

  submitForm()
  {
    this.request.SendData(this.registrationForm.value).subscribe(() =>{});

    this.request.GetData().subscribe((data: Dictators[]) => {
      next: this.request.reposlist = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
