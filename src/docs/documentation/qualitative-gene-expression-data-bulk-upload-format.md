## Qualitative gene expression bulk upload file format

PomBase welcomes submissions of published large-scale gene expression
data sets. We have devised a tab-delimited text file format for bulk
data representing qualitative assessments of protein or RNA levels.

Note: Please use this format only for data that you want to appear in
the "Qualitative gene expression" section of PomBase gene pages. If
you have gene expression data that should be included as a data track
in the PomBase genome browser (microarray, RNASeq, etc.), please use
the [data submission form for HTP sequence-linked data](submit-data/data-submission-form-for-HTP-sequence-linked-data).

Include a header line that labels the columns -- use the entry in the
Contents column below as the column header text.

Column | Contents | Example | Mandatory? | Multiple entries allowed?
-------|----------|---------|------------|--------------------------
1 | Gene systematic ID | SPBC11B10.09 | Yes | No
2 | Gene name | cdc2 | No | No
3 | Type | protein | Yes | No
4 | Evidence | ECO:0000006 | Yes | No
5 | Qualifier | increased | Yes | No
6 | Extension | during(GO:0000084) | Yes | Yes
7 | Reference | PMID:18203864 | Yes | No
8 | Taxon | 4896 | Yes | No
9 | Date | 2014-05-01 | Yes | No

1.  Include the systematic ID for each gene. You can look up
    systematic IDs on gene pages, or refer to the file of all gene
    names from the dataset download page.
2.  Gene names are optional. If you include them, use standard names
    in column 2 (see gene pages or the file of all gene names from the
    dataset download page.
3.  Type: what was measured; use "RNA" or "protein"
4.  For the Evidence column, we use a small selection from the
    [Evidence Ontology](http://www.evidenceontology.org/) (ECO). You
    are welcome to enquire with us in advance to find out which ECO
    terms/IDs fit your experiments, but we can accept files with brief
    descriptions, which curators will convert to ECO IDs.
5.  The Qualifier column uses a small vocabulary to describe what is
    observed about the RNA or protein level. Use one of: present,
    absent, unchanged, increased, decreased, constant, fluctuates
6.  The Extension column documents circumstances under which the RNA
    or protein level is observed (or changes). Follow one of these
    patterns: "during (GO:0000084)" - when a specific biological
    process, such as a response to a stimulus, is taking place, or
    during a cell cycle phase; "in_presence_of(CHEBI:18420)" - when a
    specific chemical substance is present; "occurs_in(GO:0005634)"
    when the level is observed in part, rather than all, of a cell.
7.  The Reference column has the publication's PubMed ID (PMID).
8.  The taxon will usually be 4896 (the NCBI taxon ID for
    *Schizosaccharomyces pombe*), although if you have an NCBI taxon ID
    for a specific *S. pombe* strain you are welcome to use it
9.  The date is the date on which the annotations are created; you may
    use the paper publication date or the date on which you prepare
    your data file. Format: YYYY-MM-DD
