import { Component, inject } from '@angular/core';
import { AiChats } from '../../../service/ai-chats';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css',
})
export class AiChat {
  private readonly _aiChat = inject(AiChats);

  userQuestion: string = '';
  isLoading: boolean = false;

  messages: { text: string, type: 'user' | 'ai' }[] = [];

ask() {
  if (!this.userQuestion.trim()) return;

  const questionText = this.userQuestion.trim();
  this.messages.push({ text: questionText, type: 'user' }); // Add user message
  this.isLoading = true;
  this.userQuestion = '';

  const body = { question: questionText };

  this._aiChat.askQuestion(body).subscribe({
    next: (res) => {
      this.messages.push({ text: res.answer, type: 'ai' }); // Add AI reply
      this.isLoading = false;
    },
    error: () => {
      this.messages.push({ text: 'Something went wrong.', type: 'ai' });
      this.isLoading = false;
    }
  });
}

}
