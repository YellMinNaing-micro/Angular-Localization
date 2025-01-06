import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test',
  standalone: false,

  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  lang: string = '';

  constructor(private translateService: TranslateService) {
  }
  ngOnInit(): void {
  }

}
