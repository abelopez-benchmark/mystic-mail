import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  baseUrl: string = 'https://api.openai.com/v1';

  apiKey: string = '';
  systemPrompt: string = '';

  constructor(private _http: HttpClient) {
    this.apiKey = environment.openAiApiKey;
    this.systemPrompt = environment.systemPrompt;
  }

  async generateEmail(imageUrl: string): Promise<string> {
    const url = `${this.baseUrl}/chat/completions`;
    const headers = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.apiKey}`
    );

    const payload = {
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: this.systemPrompt,
        },
        {
          role: 'user',
          content: `${imageUrl}`,
        },
      ],
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    const response = await firstValueFrom(
      this._http.post<any>(url, payload, {
        headers,
      })
    );

    const html = response.choices[0].message.content;

    return `${html.replace('```html', '').replace('```', '')}`;
  }
}
