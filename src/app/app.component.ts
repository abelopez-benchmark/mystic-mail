import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ChatGptService } from './core/services/chat-gpt.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FileUploadModule,
    ImageModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mysticmail';

  bmeToken: string = '';
  fileHeaders: HttpHeaders = new HttpHeaders();
  url: string = 'https://clientapi.benchmarkemail.com/Images/';
  uploadedImageUrl: string | null = null;

  htmlPreview: SafeHtml | null = null;
  processingEmail: boolean = false;

  constructor(
    private _sanitizer: DomSanitizer,
    private _chatgptService: ChatGptService
  ) {
    this.bmeToken = environment.bmeToken;
    this.fileHeaders = this.fileHeaders.append('AuthToken', this.bmeToken);
  }

  onUploadImage(response: any) {
    const url = response.originalEvent.body.Response.Detail;
    this.uploadedImageUrl = url;
  }

  async generateHtml() {
    this.processingEmail = true;
    const htmlEmail = await this._chatgptService.generateEmail(
      this.uploadedImageUrl ?? ''
    );
    this.processingEmail = false;
    this.htmlPreview = this._sanitizer.bypassSecurityTrustHtml(htmlEmail);
  }
}
