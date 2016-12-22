import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TermAnnotation } from '../pombase-api.service';

import { getAnnotationTableConfig, AnnotationTableConfig } from '../config';

@Component({
  selector: 'app-annotation-table-summary',
  templateUrl: './annotation-table-summary.component.html',
  styleUrls: ['./annotation-table-summary.component.css']
})
export class AnnotationTableSummaryComponent implements OnInit {
  @Input() annotationTable: Array<TermAnnotation>;

  annotationTypeDisplayName = null;

  extensionSummariesByTerm = {};

  constructor() { }

  trackByTermId(index: number, item: any) {
    return item.term.termid;
  }

  compactExtensions(extensions: Array<any>) {
    console.log(extensions);
    let compacted = [];
    for (let ext of extensions) {
      if (ext.length > 1) {
        compacted.push(ext.map(part =>
                               {
                                 return {
                                   rel_type_name: part.rel_type_name,
                                   ext_range: [part.ext_range]
                                 };
                               }
                              )
                      );
      } else {
        let updateExt = null;
        for (let existing of compacted) {
          if (existing.length == 1 &&
              existing[0].rel_type_name == ext[0].rel_type_name) {
            updateExt = existing;
          }
        }
        if (!updateExt) {
          updateExt = [
            {
            rel_type_name: ext[0].rel_type_name,
            ext_range: [],
            }
          ];
          compacted.push(updateExt);
        }

        updateExt[0].ext_range.push(ext[0].ext_range);
      }
    }
    return compacted;
  }

  makeExtensionSummaries() {
    for (let term_annotation of this.annotationTable) {
      let termid = term_annotation.term.termid;
      let thisTermExtensions =
        term_annotation.annotations.map(annotation => annotation.extension)
        .filter(extension => extension && extension.length > 0);
      if (thisTermExtensions.length > 0) {
        this.extensionSummariesByTerm[termid] = this.compactExtensions(thisTermExtensions);
      }
    }
  }

  ngOnInit() {
    if (this.annotationTable) {
      this.makeExtensionSummaries();
    }
  }
}
