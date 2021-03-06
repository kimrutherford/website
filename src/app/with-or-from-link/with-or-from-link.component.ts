import { Component, OnInit, Input } from '@angular/core';

import { getXrf } from '../config';

@Component({
  selector: 'app-with-or-from-link',
  templateUrl: './with-or-from-link.component.html',
  styleUrls: ['./with-or-from-link.component.css']
})
export class WithOrFromLinkComponent implements OnInit {
  @Input() withOrFrom: any;

  gene: any = null;
  term: any = null;
  identifier?: string;
  link?: string;

  constructor() { }

  displayIdOf(idWithPrefix: string): string {
    return idWithPrefix.replace(/^[^:]+:/, '');
  }

  ngOnInit() {
    this.gene = this.withOrFrom.gene;
    this.term = this.withOrFrom.term;

    if (this.withOrFrom.identifier) {
      this.identifier = this.withOrFrom.identifier;
      const xrfDetails = getXrf(this.withOrFrom.identifier);
      if (xrfDetails) {
        this.link = xrfDetails.url;
      } else {
        this.link = undefined;
      }
    }
  }
}
