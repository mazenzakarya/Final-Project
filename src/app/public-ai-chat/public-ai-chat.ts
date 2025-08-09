// import { CommonModule } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AiChats } from '../service/ai-chats';
// import { finalize } from 'rxjs';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-public-ai-chat',
//   imports: [CommonModule, FormsModule],
//     templateUrl: './public-ai-chat.html',
//   styleUrl: './public-ai-chat.css'
// })
// export class PublicAiChat {
//   private readonly _aiChat = inject(AiChats);

//   userQuestion: string = '';
//   isLoading: boolean = false;
//   messages: { text: string, type: 'user' | 'ai' }[] = [];
// ask(scrollArea: HTMLElement) {
//   if (!this.userQuestion.trim()) return;

//   const questionText = this.userQuestion.trim();
//   this.messages.push({ type: 'user', text: questionText });
//   this.isLoading = true;

//   this._aiChat.publicAskQuestion({ question: questionText })
//     .pipe(finalize(() => {
//       this.isLoading = false;
//       this.userQuestion = '';
//       setTimeout(() => {
//         scrollArea.scrollTop = scrollArea.scrollHeight;
//       }, 100);
//     }))
//     .subscribe({
//       next: (res) => {
//         this.messages.push({ type: 'ai', text: res.answer });
//       },
//       error: () => {
//         this.messages.push({ type: 'ai', text: 'Something went wrong. Try again later.' });
//       }
//     });
// }

// }
