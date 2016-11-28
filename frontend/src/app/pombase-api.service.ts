import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { TermShort, GeneSummary, GeneQuery, PomBaseResults } from './common/pombase-query';

export class Metadata {
  db_creation_datetime: Date;
  gene_count: number;
  term_count: number;
}

export interface ReferenceShort {
  title: string,
  uniquename: string,
  citation: string,
  authors_abbrev: string,
  publication_year: string,
}


export interface Allele {
  gene_uniquename: string,
  uniquename: string,
  name: string,
  allele_type: string,
  description: string,
}

export interface GenotypeShort {
  uniquename: string,
  name: string,
  background: string,
  alleles: Array<Allele>,
}

export interface GenotypeShort {
  alleles: Array<Allele>,
}
export interface Annotation {
  descDist: number,
  descRelName: string,
  reference?: ReferenceShort,
  evidence?: string,
  conditions: Array<TermShort>,
  with?: string,
  residue?: string,
  qualifiers: Array<TermShort>,
  term?: TermShort,
  gene?: GeneShort,
  genotype?: GenotypeShort,
  extension: Array<any>,
  is_not: boolean,
}

export interface Annotations {
  [type_name: string]: Array<Annotation>
}

export interface InteractionAnnotation {
  reference: ReferenceShort,
  evidence: string,
  gene: GeneShort,
  interactor: GeneShort,
}

export interface InteractionAnnotations {
  [type_name: string]: Array<InteractionAnnotation>
}

export interface OrthologAnnotation {
  reference: ReferenceShort,
  ortholog: GeneShort,
}

export interface ParalogAnnotation {
  reference: ReferenceShort,
  paralog: GeneShort,
}

export interface ChromosomeLocation {
  chromosome_name: string,
  start_pos: number,
  end_pos: number,
  strand: string,
}

export class GeneShort {
  uniquename: string;
  name: string;
}

export interface SynonymDetails {
  name: string,
  type: string,
}

export class GeneDetails {
  uniquename: string;
  name: string;
  feature_type: string;
  characterisation_status: string;
  location: ChromosomeLocation;
  cds_location: ChromosomeLocation;
  synonyms: Array<SynonymDetails>;
  annotations: Annotations;
  interaction_annotations: InteractionAnnotations;
  ortholog_annotations: Array<OrthologAnnotation>;
  paralog_annotations: Array<ParalogAnnotation>;
}

export class TermDetails {
  definition: string;
  termid: string;
  cv_name: string;
  name: string;
  is_obsolete: false;
  annotations: Annotations;
}

export class ReferenceDetails {
  uniquename: string;
  title: string;
  citation: string;
  authors: string;
  authors_abbrev: string;
  pubmed_publication_date: string;
  publication_year: string;
  annotations: Annotations;
  interaction_annotations: InteractionAnnotations;
  ortholog_annotations: Array<OrthologAnnotation>;
  paralog_annotations: Array<ParalogAnnotation>;
}


function makeResults(res: number): PomBaseResults {
  return new PomBaseResults();
}

@Injectable()
export class PombaseAPIService {

  private apiUrl = 'http://pombase2.bioinformatics.nz/api/v1/dataset/latest';

  constructor (private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getGene(uniquename: string): Promise<GeneDetails> {
    return this.http.get(this.apiUrl + '/data/gene/' + uniquename)
      .toPromise()
      .then(response => response.json() as GeneDetails)
      .catch(this.handleError);
  }

  getTerm(termid: string): Promise<TermDetails> {
    return this.http.get(this.apiUrl + '/data/term/' + termid)
      .toPromise()
      .then(response => response.json() as TermDetails)
      .catch(this.handleError);
  }

  getReference(uniquename: string): Promise<ReferenceDetails> {
    return this.http.get(this.apiUrl + '/data/reference/' + uniquename)
      .toPromise()
      .then(response => response.json() as ReferenceDetails)
      .catch(this.handleError);
  }

  getMetadata(): Promise<Metadata> {
    return this.http.get(this.apiUrl + '/data/metadata')
      .toPromise()
      .then(response => response.json() as Metadata)
      .catch(this.handleError);
  }

  getGeneSummaries(): Promise<Array<GeneSummary>> {
    return this.http.get(this.apiUrl + '/data/gene_summaries')
      .toPromise()
      .then(response => response.json() as Array<GeneSummary>)
      .catch(this.handleError);
  }

  getTermByNameFuzzy(cvName: string, queryText: string): Observable<TermShort[]> {
    let url = this.apiUrl + '/search/term/by_name/fuzzy/' + cvName + '/' + queryText;
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  postQuery(query: GeneQuery): Observable<PomBaseResults> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + '/search/gene_query', { query }, options)
    .map((res) => { console.log(res); return makeResults(res.json()); });
  }
}
