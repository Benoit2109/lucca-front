import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendButtonComponent } from './send-button/send-button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DisplayWindowComponent } from './display-window/display-window.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SendButtonComponent,
    TextInputComponent,
    DisplayWindowComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
