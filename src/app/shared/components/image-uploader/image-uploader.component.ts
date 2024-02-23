import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent {
  @Output() onImageUpload: EventEmitter<string> = new EventEmitter();

  bmeToken: string = '';
  fileHeaders: HttpHeaders = new HttpHeaders();
  url: string = 'https://clientapi.benchmarkemail.com/Images/';

  constructor() {
    this.bmeToken = environment.bmeToken;
    this.fileHeaders = this.fileHeaders.append('AuthToken', this.bmeToken);
  }

  onUploadImage(response: any) {
    const url = response.originalEvent.body.Response.Detail;
    this.onImageUpload.emit(url);
  }
}
