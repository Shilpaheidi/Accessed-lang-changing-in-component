import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
declare var GoogleTranslate: Function;
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  headerTitle$!: Subscription;
  getsterAccessControlForm: UntypedFormGroup = new UntypedFormGroup({});
  tabName: string = 'Table';

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  firstFormGroup!: UntypedFormGroup;
  formvalue: any;
  showTranslate: boolean = true;
  audit_trail_btn_state: boolean = false;
  audit_trail$!: Observable<any>;
  audit_trail_type!: string;
  menuName: any;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private dialog: MatDialog,
 
    private _formBuilder: UntypedFormBuilder,
 
    media: MediaMatcher
  ) {
    this.firstFormGroup = this._formBuilder.group({
      languageControl: [''],
    });
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => _cdRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidenav;

   
  }

  stopClose($event: any) {
    $event.stopPropagation();
    //Another instructions
  }

  sideOnclickClose() {
    if (this.sidenav.mode == 'side') {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  menu = [
    { label: 'Input Field Types', link: '/app-name/input-types' },
    {
      label: 'File upload / Dialog / Forms',
      link: '/app-name/fileUpload-dialog-form',
    },
    { label: 'Table', link: '/app-name/my-table' },
    { label: 'Tabs', link: '/app-name/my-tab' },
    { label: 'Stepper', link: '/app-name/my-stepper' },
    {
      label: 'Date And Time Guidelines And Demo',
      link: '/app-name/date-and-time-guidelines',
    },
    { label: 'Tree View', link: '/app-name/tree-view' },
    { label: 'video', link: '/app-name/video' },

    // { label: 'File Upload', link: '/app-name/file-upload' },
    // { label: 'Dialog', link: '/app-name/dialog' },
    // { label: 'Form', link: '/app-name/form' },
    // { label: 'Address Form', link: '/app-name/address-form' },
    // {
    //   label: 'Telephone Input with country code',
    //   link: '/app-name/telephone-input',
    // },
    // { label: 'Audit Trail', link: '/app-name/audit-trail' },
    // { label: 'Multiselect Country', link: '/app-name/multiselect-country' },
    // { label: 'Tree Radio Button', link: '/app-name/tree' },
    // { label: 'Tree View', link: '/app-name/tree-view' },
    // { label: 'Tree Checkbox', link: '/app-name/tree-form-checkbox' },
    {
      label: 'Readme',
      link: '/app-name/readme-file',
    },
    {
      label: 'Coding Guidelines - Frontend',
      link: '/app-name/Frontend-coding-guidelines',
    },
    {
      label: 'Coding Guidelines - Backend',
      link: '/app-name/Backend-coding-guidelines',
    },
    {
      label: 'FAQ - Frontend',
      link: '/app-name/Faq-Frontend',
    },
    {
      label: 'FAQ - Backend',
      link: '/app-name/Faq-Backend',
    },
  ];

  getName(data: any) {
    this.menuName = data;
  }

  openAuditTrail() {
    let config: MatDialogConfig = {
      disableClose: true,
      minWidth: '400px',
      minHeight: 'calc(100vh - 500px)',
    };

    
  }

  ngOnDestroy(): void {
    if (this.headerTitle$) {
      this.headerTitle$.unsubscribe();
    }
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  get writer() {
    return this.firstFormGroup.get('languageControl');
  }

  onlanguagechange() {

    if (this.writer) {
      
      console.log(this.writer.value);
      this.formvalue = this.writer.value;
    }

    
    localStorage.setItem('googleTranslate', this.formvalue);
    GoogleTranslate();
  }

  showbtn() {
    this.showTranslate = !this.showTranslate;
  }

  googleLanguage: lang[] = [
    {
      value: 'af',
      label: 'Afrikaans',
    },
    {
      value: 'sq',
      label: 'Albanian',
    },
    {
      value: 'ar',
      label: 'Arabic',
    },
    {
      value: 'az',
      label: 'Azerbaijani',
    },
    {
      value: 'eu',
      label: 'Basque',
    },
    {
      value: 'bn',
      label: 'Bengali',
    },
    {
      value: 'be',
      label: 'Belarusian',
    },
    {
      value: 'bg',
      label: 'Bulgarian',
    },
    {
      value: 'ca',
      label: 'Catalan',
    },
    {
      value: 'zh-CN',
      label: 'Chinese Simplified',
    },
    {
      value: 'zh-TW',
      label: 'Chinese Traditional',
    },
    {
      value: 'hr',
      label: 'Croatian',
    },
    {
      value: 'cs',
      label: 'Czech',
    },
    {
      value: 'da',
      label: 'Danish',
    },
    {
      value: 'nl',
      label: 'Dutch',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'eo',
      label: 'Esperanto',
    },
    {
      value: 'et',
      label: 'Estonian',
    },
    {
      value: 'tl',
      label: 'Filipino',
    },
    {
      value: 'fi',
      label: 'Finnish',
    },
    {
      value: 'fr',
      label: 'French',
    },
    {
      value: 'gl',
      label: 'Galician',
    },
    {
      value: 'ka',
      label: 'Georgian',
    },
    {
      value: 'de',
      label: 'German',
    },
    {
      value: 'el',
      label: 'Greek',
    },
    {
      value: 'gu',
      label: 'Gujarati',
    },
    {
      value: 'ht',
      label: 'Haitian Creole',
    },
    {
      value: 'iw',
      label: 'Hebrew',
    },
    {
      value: 'hi',
      label: 'Hindi',
    },
    {
      value: 'hu',
      label: 'Hungarian',
    },
    {
      value: 'is',
      label: 'Icelandic',
    },
    {
      value: 'id',
      label: 'Indonesian',
    },
    {
      value: 'ga',
      label: 'Irish',
    },
    {
      value: 'it',
      label: 'Italian',
    },
    {
      value: 'ja',
      label: 'Japanese',
    },
    {
      value: 'kn',
      label: 'Kannada',
    },
    {
      value: 'ko',
      label: 'Korean',
    },
    {
      value: 'la',
      label: 'Latin',
    },
    {
      value: 'lv',
      label: 'Latvian',
    },
    {
      value: 'lt',
      label: 'Lithuanian',
    },
    {
      value: 'mk',
      label: 'Macedonian',
    },
    {
      value: 'ms',
      label: 'Malay',
    },
    {
      value: 'mt',
      label: 'Maltese',
    },
    {
      value: 'no',
      label: 'Norwegian',
    },
    {
      value: 'fa',
      label: 'Persian',
    },
    {
      value: 'pl',
      label: 'Polish',
    },
    {
      value: 'pt',
      label: 'Portuguese',
    },
    {
      value: 'ro',
      label: 'Romanian',
    },
    {
      value: 'ru',
      label: 'Russian',
    },
    {
      value: 'sr',
      label: 'Serbian',
    },
    {
      value: 'sk',
      label: 'Slovak',
    },
    {
      value: 'sl',
      label: 'Slovenian',
    },
    {
      value: 'es',
      label: 'Spanish',
    },
    {
      value: 'sw',
      label: 'Swahili',
    },
    {
      value: 'sv',
      label: 'Swedish',
    },
    {
      value: 'ta',
      label: 'Tamil',
    },
    {
      value: 'te',
      label: 'Telugu',
    },
    {
      value: 'th',
      label: 'Thai',
    },
    {
      value: 'tr',
      label: 'Turkish',
    },
    {
      value: 'uk',
      label: 'Ukrainian',
    },
    {
      value: 'ur',
      label: 'Urdu',
    },
    {
      value: 'vi',
      label: 'Vietnamese',
    },
    {
      value: 'cy',
      label: 'Welsh',
    },
    {
      value: 'yi',
      label: 'Yiddish',
    },
  ];
}

interface lang {
  value: string;
  label: string;
}
