import { Component, Input, OnInit } from '@angular/core';
import { TermAnnotation } from '../pombase-api.service';

import { getAnnotationTableConfig, AnnotationTableConfig } from '../config';

@Component({
  selector: 'app-annotation-table-full',
  templateUrl: './annotation-table-full.component.html',
  styleUrls: ['./annotation-table-full.component.css']
})
export class AnnotationTableFullComponent implements OnInit {
  @Input() annotationTypeName: string;
  @Input() hideColumns: Array<string>;
  @Input() annotationTable: Array<TermAnnotation>;

  config: AnnotationTableConfig = getAnnotationTableConfig();
  showGenotypeDetails = false;
  hideColumn = {};
  showColumn = {};
  termNameColSpan = 0;

  constructor() { }

  trackByTermId(index: number, item: any) {
    return item.term.termid;
  }

  ngOnInit() {
    let typeConfig = this.config.getAnnotationType(this.annotationTypeName);

    for (let columnName of typeConfig.columnsToShow) {
      this.showColumn[columnName] = true;
    }

    for (let columnName of this.hideColumns) {
      this.showColumn[columnName] = false;
    }

    for (let columnName of Object.keys(this.showColumn)) {
      if (this.showColumn[columnName]) {
        this.termNameColSpan++;
      }
    }
  }
}
