import { Component, OnInit, Input } from '@angular/core';

import { Util } from '../shared/util';
import { GenotypeDetails, GenotypeShort, AlleleShort } from '../pombase-api.service';

@Component({
  selector: 'app-genotype-allele-summary',
  templateUrl: './genotype-allele-summary.component.html',
  styleUrls: ['./genotype-allele-summary.component.css']
})
export class GenotypeAlleleSummaryComponent implements OnInit {
  @Input() genotype: GenotypeDetails|GenotypeShort;

  constructor() { }

  tidyAlleleName(allele: AlleleShort): string {
    return Util.tidyAlleleName(allele);
  }

  alleleDisplayDescription(allele: AlleleShort): string {
    let description = Util.descriptionWithResidueType(allele);
    if (description) {
      return description.replace(/,/g, ',&#8201;');
    } else {
      return '';
    }
  }

  ngOnInit() {
  }
}
