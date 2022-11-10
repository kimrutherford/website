# ${database_name} ongoing projects

In addition to adding value to data through the curation process, at ${database_name} we also contribute to the broader curation life cycle by working with other resources to develop, adopt and promote curation best practices. In this role, we contribute to the development of global standards, improve data dissemination, develop rigorous annotation quality control procedures, and share the tools and resources we have developed.

- **Database and website development:** we develop the Open Source code for this website and the underlying database, constantly improving it so that researchers can quickly and intuitively interrogate our annotations. The code is modular, easily configurable and extendable to support other model organisms (see [PMID:35380656](https://pubmed.ncbi.nlm.nih.gov/35380656/)). Visit our [code repository](https://github.com/pombase/website) and publications [PMID:30321395](https://pubmed.ncbi.nlm.nih.gov/30321395/), [PMID:35100366](https://pubmed.ncbi.nlm.nih.gov/35100366/).

- **High quality literature curation:** we manually curate papers, request or create new ontology terms for new observations, and actively work to quality control and improve our existing annotations. We involve authors in this process to ensure curation quality. Curation is particularly important to “FAIRify” and maximise the impact of results coming from small-scale publications that address mechanistic details, as it integrates the new knowledge into a greater body of annotations that can be queried, reused and more easily discovered. We have more than 300.000 manually curated annotations. See our [curation stats](https://curation.pombase.org/pombe/stats/annotation).

- **Ontology development:** we contribute to the development of several ontologies, to extend and improve standards that represent the knowledge produced by researchers. We are the sole developers of [FYPO](https://pubmed.ncbi.nlm.nih.gov/23658422/), the Fission Yeast Phenotype Ontology, but we are also major contributors to the Gene Ontology and contribute substantially to the Monarch disease ontology (MONDO). We contribute to the sequence ontology, Protein Ontology (PR) and CHEBI ontology as required for our annotation and ontology development work.

- **Development of Canto:** Canto is an Open Source web-based curation tool that provides an intuitive interface for ontology-based literature curation, and a literature management system where publications are triaged by broad content type and classified by their curation stage. Canto is generic and extendable, and is used by other model organism databases (including FlyBase, PHI-base, japonicusDB) . Canto is actively developed and adapted to the needs of different resources and researchers. See “Community curation” below, our [code repository](https://github.com/pombase/canto) and [PMID:24574118](https://pubmed.ncbi.nlm.nih.gov/24574118/).

- **Community curation:** ${database_name} involves authors in the curation of their papers, in a way that, without dedicated training, they can contribute detailed and structured annotations. Community curation is supported by our web-based curation tool, Canto, which allows for an iterative dialogue with authors that speeds up the curation process, improves annotation quality through expert approval, makes authors more familiar with the curation process and supported data-types and often leads to feedback from the authors about existing annotations. For more on community curation visit our [curation stats](https://curation.pombase.org/pombe/stats/annotation) and [PMID:32353878](https://pubmed.ncbi.nlm.nih.gov/32353878/).

- **Maintenance of the genome annotation:** To allow accurate functional genomics and genomic interrogation in fission yeast we periodically incorporate new data to keep the genome annotation current. Updates can include revisions to existing protein coding gene structures, or more precise transcript boundaries, and new non-coding RNAs) sourced from user communications, gene specific publications or transcriptomics and proteomic datasets. Our updates are propagated to NCBI/ENA/Ensembl reference genomes, and UniPROT reference proteome.

- **Causal modelling of biological pathways:** We have piloted a system to generate ‘causal’ networks (connecting genes and their activities into pathways using casual relationships) directly from Gene Ontology annotation data. To date almost 55% fission yeast proteins are included in at least one automated process network. We are currently using these networks to target literature curation gaps. During our current funding cycle, we will collaborate with GO to formalise these causal connections into [GO-CAM](http://geneontology.org/docs/gocam-overview/) syntax and then to provide automated biological pathway visualisation based on curated data.

- **Human and budding yeast ortholog curation:** We provide a manually refined inventory of consensus ortholog datasets (3991 *S. cerevisiae* and 3597 human orthologs) and actively work to extend it by targeting missing components of complexes involved in conserved eukaryotic biology. Distant orthologs are still being found even in heavily researched model organisms. Some recent examples using AlphaFold and Reciprocal Best Structure Hits (RBSH) can be found [here](https://doi.org/10.1101/2022.07.04.498216).

- **Priority unstudied genes:** we have developed a method to generate inventories of proteins of unknown biological role based on GO process slims ([PMID:30938578](https://pubmed.ncbi.nlm.nih.gov/30938578/)). In *pombe*, 133 genes that are conserved in vertebrates have unknown functions. We actively encourage ${database_name} researchers and the wider community users to investigate the unknown”ome”. See [the list](/status/priority-unstudied-genes).

- **Disease gene annotation:** identification of disease gene connections between yeast and humans increases the relevance of the study of yeast genes. We integrate with several databases of human disease genes (Malacards, Monarch, OMM) and use data from publications to connect disease ontology terms to fission yeast orthologs.

- **Fission yeast gene nomenclature:** we approve requested gene names in consultation with the [fission yeast Gene Naming committee](/submit-data/gene-naming-committee-members), and name certain unstudied genes based on orthology.

- **Fission yeast allele nomenclature:** we are currently consulting the fission yeast community to develop nomenclature guidelines to standardise allele naming. They will cover new constructs that are becoming more common, such as chimeras.

- **Annotation quality control:** Often an overlooked component of curation work, refining existing annotations is crucial to ensure accurate queries and knowledge representation. We revisit our existing annotations through small projects where we review a biological process, develop methods to automatically identify annotation errors (GO Term Matrix - [PMID:32875947](https://pubmed.ncbi.nlm.nih.gov/32875947/)) and adapt to changes in annotation criteria, which generally become stricter.

- **Outreach and user support:** we maintain [documentation](/documentation) pages for all features of ${database_name}. We communicate website updates in our [pombe mailing list](https://lists.cam.ac.uk/sympa/info/ucam-pombelist). In the next months, we plan to release curation tutorials for authors that curate their papers using Canto.

- **Non-experimental GO annotation:** we actively review literature from other model organisms and make inferred annotations to GO terms for genes that are not studied in fission yeast. This ensures breadth of curation, for GO enrichment analysis and for identification of truly unstudied genes. We host 14723 GO annotations that do not come from fission yeast literature, of which 11200 are manually assigned.