import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  public activeLang = 'es';

  constructor(private translate: TranslateService) { this.translate.setDefaultLang(this.activeLang); }

  ngOnInit() {
  }

  public changeLang(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
