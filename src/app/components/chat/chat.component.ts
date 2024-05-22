import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  loggedUser: any;
  message: string ="";
  messages: any = [
    {user: "user1", userMessage: "Hola a todos"},
    {user: "user2", userMessage: "buenassss"},
    {user: "user3", userMessage: "Como va?"},
    {user: "user4", userMessage: "Adiossss"},
  ];

  public constructor(private userService: UserService)
  {

  }

  sendMessage()
  {
    console.log(this.message);
    this.message = "";
  }

}
