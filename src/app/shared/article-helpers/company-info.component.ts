import { Component, Input } from '@angular/core';

import { Article } from '../models';

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html'
})
export class CompanyInfoComponent {
  @Input() article: Article;
}
