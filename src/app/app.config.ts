import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ChatGptService } from './core/services/chat-gpt.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom([
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ])]
};
