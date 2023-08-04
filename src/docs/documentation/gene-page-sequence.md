## Gene page: Sequence

The Sequence section of a gene page provides a widget to download DNA
sequences for any gene, and amino acid sequences for protein-coding
genes, as well as links to send sequences to BLAST. For protein-coding
genes, the predicted amino acid sequence is displayed by default:

![peptide sequence section](assets/gene_page_sequence_aa.png){ .screenshot width="800"}

1.  If two or more transcripts are annotated for a gene, the primary
    transcript is shown by default. Use the selector to switch between
    transcript isoforms.

2.  Toggle to show the amino acid sequence for protein-coding genes
    (not available for non-coding RNA genes, which always show
    nucleotide sequence).

3.  Button to save the displayed sequence to a file, with the following
    options:
    * Displayed Sequence as FASTA
    * Genome region as GenBank: This feature downloads the **genome region**,
      in GenBank format. The file always includes the introns, exons and UTRs. You can include
      extra upstream or downstream sequences, if the "Show nucleotide sequence"
      is toggled but other settings are ignored. Files can be opened in
      sequence viewers (Snapgene, Ape, Benchling...) and contain the sequence
      feature annotations (CDS with labelled introns, translated sequence, UTRs,
      etc.).
    * Genome region as EMBL: Same as previous one, but in EMBL format.

4.  Links to send the displayed sequence to BLAST at
    [NCBI](https://blast.ncbi.nlm.nih.gov/Blast.cgi) or
    [Ensembl](http://fungi.ensembl.org/Multi/Tools/Blast?db=core).

5.  The peptide sequence header shows the transcript ID and the
    protein length.

For non-coding RNA genes, and for protein-coding genes with "Show
nucleotide sequence" selected, more options are available:

![DNA sequence section](assets/gene_page_sequence_nt.png){ .screenshot width="800"}

1.  Transcript selector (as above)

2.  Toggle to show the amino acid sequence (not available for non-coding RNA genes).

3.  Controls to add UTRs, introns, or flanking sequences to the
    displayed sequence. For upstream or downstream sequence, use the
    up/down control to increment by one base, or type or paste a
    number in the box.

4.  Link to save the displayed sequence to a file.

5.  Links to send the displayed sequence to BLAST at
    [NCBI](https://blast.ncbi.nlm.nih.gov/Blast.cgi) or
    [Ensembl](http://fungi.ensembl.org/Multi/Tools/Blast?db=core). DNA
    sequences link to BLASTN by default.

6.  The nucleotide sequence header shows the transcript ID and
    indicates what is included.

When the "Show translation" option is selected, irrelevant controls
are hidden and BLASTP links are shown:

![sequence section showing translation](assets/gene_page_sequence_translated.png){ .screenshot width="800"}

