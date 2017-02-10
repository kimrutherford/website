import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TermAnnotation } from '../pombase-api.service';
import { TermId } from '../common/pombase-query';

import { getAnnotationTableConfig, AnnotationTableConfig,
         getAppConfig } from '../config';

@Component({
  selector: 'app-annotation-table-full',
  templateUrl: './annotation-table-full.component.html',
  styleUrls: ['./annotation-table-full.component.css']
})
export class AnnotationTableFullComponent implements OnInit, OnChanges {
  @Input() annotationTypeName: string;
  @Input() hideColumns: Array<string>;
  @Input() featureInFirstColumn?: boolean = false;
  @Input() annotationTable: Array<TermAnnotation>;

  config: AnnotationTableConfig = getAnnotationTableConfig();
  hideColumn = {};
  showColumn = {};
  termNameColSpan = -1;
  compactFirstRows = {};
  showExtensions = false;

  constructor() { }

  trackByTermId(index: number, item: any) {
    return item.term.termid;
  }

  init() {
    let typeConfig = this.config.getAnnotationType(this.annotationTypeName);

    for (let columnName of typeConfig.columnsToShow) {
      this.showColumn[columnName] = true;
    }

    if (this.hideColumns) {
      for (let columnName of this.hideColumns) {
        this.showColumn[columnName] = false;
      }
    }

    for (let columnName of Object.keys(this.showColumn)) {
      if (this.showColumn[columnName]) {
        this.termNameColSpan++;
      }
    }

    if (this.featureInFirstColumn) {
      this.termNameColSpan -= 1;
    }

    if (this.annotationTable && this.annotationTable.length > 0) {
      for (let termAnnotation of this.annotationTable) {
        this.compactFirstRows[termAnnotation.term.termid] =
          !this.showColumn['extension'] ||
          !termAnnotation.annotations[0].extension ||
          termAnnotation.annotations[0].extension.length == 0;
      }
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.init();
  }
}
