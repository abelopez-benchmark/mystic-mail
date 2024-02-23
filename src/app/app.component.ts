import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ChatGptService } from './core/services/chat-gpt.service';
import { ImageUploaderComponent } from './shared/components/image-uploader/image-uploader.component';
import { HtmlViewerComponent } from './shared/components/html-viewer/html-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ImageModule,
    ButtonModule,
    ImageUploaderComponent,
    HtmlViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mysticmail';

  uploadedImageUrl: string | null = null;

  rawHtml: string = '';
  processingEmail: boolean = false;

  constructor(private _chatgptService: ChatGptService) {}

  onUploadImage(imageUrl: string) {
    this.uploadedImageUrl = imageUrl;
  }

  async generateHtml() {
    this.processingEmail = true;
    const htmlEmail = await this._chatgptService.generateEmail(
      this.uploadedImageUrl ?? ''
    );
    this.processingEmail = false;
    this.rawHtml = htmlEmail;
  }
}
