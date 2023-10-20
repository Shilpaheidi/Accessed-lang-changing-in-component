import { Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  // @ViewChild('divelement', { static: true })
  // changedivElement!: ElementRef;

  // changeColor(){
  //   this.changedivElement.nativeElement.style.background = 'green';
  // }


  storingButton:any[]=[];

  increaseButtons(){
    this.storingButton.push('' + (this.storingButton.length +  1))
  }

  translatorId!: string;

  constructor() { }

  ngOnInit() {
    this.initGoogleTranslate();
  }

  initGoogleTranslate() {
    if (typeof google.translate.TranslateElement != 'undefined') {
      new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element',
        (translator: any) => {
          this.translatorId = translator.id;
          console.log('Translator ID:', this.translatorId);
        }
      );
    }
  }
}

