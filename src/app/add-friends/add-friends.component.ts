import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name =""
  DescribeYourFriend =""
  friendNickName = ""

  constructor(private api:ApiService){}
  

  readValue = () =>
  {
    let data:any = {"name":this.name,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
    console.log(data)
    
    this.api.addFriends(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Added Successfully")
          this.name=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
