import { Component, inject, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit{
  authService = inject(AuthService);

  @ViewChild('messagesContainer') private messagesContainer?: ElementRef;

  loggedUser: any;
  newMessage: string ="";
  messages: any = [
    {ud: "user1",username: "pedrito01", userMessage: "Hola a todos"},
    {user: "ttTzXOC9nzc6i58AXkBhaND1kIo1",username: "pablito21", userMessage: "buenassss"},
    {user: "user3",username: "juan14", userMessage: "Como va?"},
    {user: "user5",username: "enzocarp912", userMessage: "Adiossss"},
  ];

  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      this.loggedUser = user;
    });
  }
  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage()
  {
    console.log(this.newMessage);
    let message = {
      user: this.loggedUser.uid,
      userMessage: this.newMessage
    }
    this.messages.push(message);
    this.newMessage = "";
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.log('Could not scroll to bottom: ', err);
      }
    }
  }

}
