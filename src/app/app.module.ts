import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { DataService } from '../app/data.service';
import { HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicStorageModule } from '@ionic/storage';
import { LanguagePopoverPageModule } from './pages/language-popover/language-popover.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpFactory,
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Media,
    StreamingMedia,
    TextToSpeech,
    SpeechRecognition,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// important for "ahead of time" compilation
export function HttpFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

  /* If you want to change the default translations folder do it like this */

  //return new TranslateHttpLoader(http, './assets/i18mnh/', '.json');
}