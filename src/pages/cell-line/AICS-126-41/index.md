---
templateKey: cell-line
cell_line_id: 126
status: released
clone_number: 41
parental_line: 0
genetic_modifications:
  - gene: CDH5
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: bi
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0126-041&Product=iPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0126-041_CofA.pdf
donor_plasmid: 
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-66
images_and_videos:
  images:
    - image: single_plane_image_cl41.png
      caption: "Single, mid-level plane of hiPSC-derived endothelial cells expressing mEGFP-tagged VE-cadherin (scalebar, 20 µm). Five days after the onset of differentiation, cells were magnetically sorted using CD144 antibodies and subsequently cryopreserved. Upon thawing, the cells were grown on fibronectin-coated tissue culture plates until they reached confluence. They were then re-plated onto fibronectin-coated glass plates and imaged four days later. Cells were imaged live in 3D on a spinning-disk confocal microscope."
    - image: AICS-126_cl41_CDH5.jpg
      caption: "One vial of distribution lot was thawed (cells were treated with ROCK inhibitor for 24hrs post-thaw-refer to culture protocol). Cultures were observed daily. Colonies were imaged one and three days post-thaw using a Leica microscope at 4x and 10x magnification."
  videos:
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: GGAGGAGCTGCTGTATTAGG
  linker: N/A
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: CDH5_GFP.png
          caption: "Top: CDH5 locus showing 3 CDH5 isoforms; Bottom: Zoom in on mEGFP insertion site at CDH5 C-terminal exon."
category_labels: 
 - Endothelial
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: CDH5_cl41_full_allele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to amplify the tagged allele. Gel shows untagged allele in an unedited control and tagged allele (larger band) from single PCR reaction. (1% Agarose gel with Thermo Fisher 1kb ladder). Clone 41 is available from Coriell."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-126_cl41_CDH5_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "CDH5-mEGFP"
      junction: "5'"
      expected_size: "1477"
      confirmed_sequence: "Yes"
    - editedGene: "CDH5-mEGFP"
      junction: "3'"
      expected_size: "1304"
      confirmed_sequence: "Yes"
    - editedGene: "CDH5-mEGFP"
      junction: "WT"
      expected_size: "1355"
      confirmed_sequence: "Yes"
    - editedGene: "CDH5-mEGFP"
      junction: "Full junctional allele"
      expected_size: "2528"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion."
  ddpcr:
    - tag: CDH5-mEGFP
      clone: 41
      fp_ratio: 1.07
      plasmid: N/A
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. RPP30 is known 2n reference gene."
---