import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {
  name =""
  DescribeYourFriend =""
  friendNickName = ""

  readValue = () =>
  {
    let data:any = {"name":this.name,"DescribeYourFriend":this.DescribeYourFriend,"friendNickName":this.friendNickName}
    console.log(data)
  }

}
