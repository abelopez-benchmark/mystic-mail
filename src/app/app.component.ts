import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChatGptService } from './core/services/chat-gpt.service';
import { ImageUploaderComponent } from './shared/components/image-uploader/image-uploader.component';
import { HtmlViewerComponent } from './shared/components/html-viewer/html-viewer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ImageModule,
    ButtonModule,
    InputTextareaModule,
    ImageUploaderComponent,
    HtmlViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mysticmail';

  uploadedImageUrl: string | null = null;
  analysisResult: string = '';

  rawHtml: string = '';
  processingEmail: boolean = false;

  constructor(private _chatgptService: ChatGptService) {}

  async onUploadImage(imageUrl: string) {
    this.uploadedImageUrl = imageUrl;
    const data = await this._chatgptService.analyzeImage(imageUrl);
    this.analysisResult = data;
  }

  async generateHtml() {
    this.processingEmail = true;
    const htmlEmail = await this._chatgptService.generateEmail(
      this.analysisResult,
      this.uploadedImageUrl ?? ''
    );
    this.processingEmail = false;
    this.rawHtml = htmlEmail;
  }
}
