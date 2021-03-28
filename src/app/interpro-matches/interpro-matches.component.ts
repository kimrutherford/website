import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

import { PombaseAPIService, InterProMatch, APIError, InterProMatchLocation, GeneSubsets } from '../pombase-api.service';
import { getXrfWithPrefix, XrfDetails } from '../config';

interface DisplayMatch extends InterProMatch {
  locations: Array<InterProMatchLocation>;
  dbEntryUrl: string;
  dbDisplayName: string;
}

@Component({
  selector: 'app-interpro-matches',
  templateUrl: './interpro-matches.component.html',
  styleUrls: ['./interpro-matches.component.css']
})
export class InterproMatchesComponent implements OnInit, OnChanges {
  @Input() geneDisplayName: string;
  @Input() uniprotIdentifier: string;
  @Input() matches: Array<InterProMatch>;
  @Input() highlightedId: string;
  @Output() highlightedIdChange = new EventEmitter<string>();

  displayMatches: Array<DisplayMatch> = [];
  apiError?: APIError;

  geneSubsets: GeneSubsets = null;

  constructor(private pombaseApiService: PombaseAPIService) { }

  highlightMatch(id: string) {
    this.highlightedId = id;
    this.highlightedIdChange.emit(id);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    let displayMatches =
      this.matches.map(match => {
        let newId = match.id;
        let interProEntryUrl = undefined;
        if (match.interpro_id) {
          let result = getXrfWithPrefix('InterPro', match.interpro_id);
          if (result) {
            interProEntryUrl = result.url;
          }
        }
        let xrfResult: XrfDetails|undefined;
        if (match.dbname === 'MOBIDBLT') {
          newId = newId + ':' + this.uniprotIdentifier;
          xrfResult = getXrfWithPrefix(match.dbname, this.uniprotIdentifier);
        } else {
          const id = match.id.replace(/G3DSA:/, '');
          xrfResult = getXrfWithPrefix(match.dbname, id);
        }
        let newMatch = Object.assign({}, match) as DisplayMatch;
        newMatch.id = newId;
        if (interProEntryUrl) {
          newMatch.interProEntryUrl = interProEntryUrl;
        }

        if (xrfResult) {
          newMatch.dbEntryUrl = xrfResult.url;
          newMatch.dbDisplayName = xrfResult.displayName || match.dbname;
          newMatch.dbDescription = xrfResult.description || newMatch.dbDisplayName;
          newMatch.dbWebsite = xrfResult.website;
        } else {
          newMatch.dbDisplayName = match.dbname;
          newMatch.dbDescription = newMatch.dbDisplayName;
        }
        return newMatch;
      });

    this.displayMatches = displayMatches;

    const processMatches =
      () => {
      for (let match of displayMatches) {
        match.geneCount = null;
        match.countLinkTitle = '';
        match.countLinkUrl = '';
        if (match.interpro_id) {
          let subsetId = 'interpro:' + match.interpro_id;
          let subset = this.geneSubsets[subsetId];
          if (subset) {
            match.geneCount = subset.elements.length;
            match.countLinkTitle = `View all ${match.interpro_id} (${match.interpro_name}) genes`;
            match.countLinkUrl = `/gene_subset/${subsetId}`;
          }
        } else {
          let subsetId = 'interpro:' + match.dbname + ':' + match.id;
          let subset = this.geneSubsets[subsetId];
          if (subset) {
            match['geneCount'] = subset.elements.length;
            if (match.id === match.name) {
              match['countLinkTitle'] = `View all ${match.id} genes`;
            } else {
              match['countLinkTitle'] = `View all ${match.id} (${match.name}) genes`;
            }
            match['countLinkUrl'] = `/gene_subset/${subsetId}`;
          }
        }
      }

      this.displayMatches.sort((a, b) => (a.geneCount || 0) - (b.geneCount || 0));
    }

    if (this.geneSubsets) {
      processMatches();
    } else {
      this.pombaseApiService.getGeneSubsets()
        .then(subsets => {
          this.geneSubsets = subsets;
          processMatches();
        })
        .catch(error => {
          this.apiError = error;
        });
      }
  }
}
