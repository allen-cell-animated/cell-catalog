---
templateKey: disease-cell-line
cell_line_id: 119
disease: Laminopathy
date: 2024-02-26T21:35:41.941Z
snp: NM_170707.4(LMNA):c.1824C>T(p.Gly608=)
parental_line: 13
status: released
clones:
  - type: Mutant
    clone_number: 10
    transfection_replicate: A
    genotype: G608G/WT
  - type: Control
    clone_number: 23
    transfection_replicate: A
    genotype: WT/WT
  - type: Mutant
    clone_number: 39
    transfection_replicate: A
    genotype: G608G/WT
  - type: Control
    clone_number: 45
    transfection_replicate: A
    genotype: WT/WT
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0119&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0119_CofA.pdf
images_and_videos:
  images:
    - caption: "Immunofluorescent labeling of clones 23 and 39 to demonstrate
        expression of progerin proteins. hiPSCs were differentiated using the
        StemDIFF Endothelial Differentiation Kit (StemCell Technologies cat. No.
        08005). Cells were cryopreserved in CryoStor CS10 (StemCell Technologies
        cat. No. 100-1061), and subsequently thawed into STEMdiff™ Endothelial
        Expansion Medium Kit (Catalog #08007) onto plastic tissue culture plates
        coated with Animal Component-Free Cell Attachment Substrate. Cells were
        passaged according to the provided protocol onto plastic tissue culture
        plates until Passage 7, at which point they were plated onto glass
        coated with Animal Component-Free Cell Attachment Substrate. After 4
        days of culture the cells were fixed with a 4% paraformaldehyde in DPBS
        solution. Cells were then blocked and permeabilized in a solution of
        1.5% normal goat serum + 0.4% Triton-100x in PBS for 1 hour at RT. Cells
        were labeled with an anti-progerin antibody (Santa Cruz cat. No.
        sc-81611, diluted 1:60) overnight at 4C. The following day cells were
        labeled with anti-mouse AlexaFluor594 (ThermoFisher cat. No. A-11005,
        diluted 1:500) for 1 hour at RT. Cells were imaged on a widefield
        microscope. All scale bars are 100um."
      image: g608g_progerin-2-.png
    - caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one and four days post-thaw
        using a Leica microscope at 4x and 10x magnification. A four panel image
        of clone 10 is shown here and is also a representative image for clone
        39 (not pictured). Viability and colony formation one day and four days
        post-thaw. Scale bars are shown.
      image: aics-119_clone10_g608g.png
    - caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one and five days post-thaw
        using a Leica microscope at 4x and 10x magnification. A four panel image
        of clone 23 is shown here. Viability and colony formation one day and
        five days post-thaw. Scale bars are shown.
      image: aics-119_clone23_g608g.png
    - caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one and four days post-thaw
        using a Leica microscope at 4x and 10x magnification. A four panel image
        of clone 45 is shown here. Viability and colony formation one day and
        four days post-thaw. Scale bars are shown.
      image: aics-119_clone45_g608g.png
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      caption: Sanger Sequencing was performed on LMNA recombinant and wildtype
        alleles. Results confirmed respective genotype as indicated in table
        above with no additional mutations present. 
      image: aics-0119_g608g_sanger_exported_highres.png
    - title: Mono-Clonality Confirmation via ddPCR Assay (image is a placeholder)
      caption: Verification of genomic copy number of WT and mutant alleles.
        LMNA:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate heterozygous
        clone, values ~1 indicate unedited clone. RPP30 is known 2n reference
        gene. 
      image: aics-0109_e525k_mono-clonality-confirmation.png
    - title: Karyotype Analysis
      image: aics_0119_cl10_g608g_karyotype.png
      caption: After cells banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 10. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: 5’ GGAGATGGGTCCGCCCACCT[GGG] 3’
  dna_donor_sequence:
    - sequence: 5’ GAGGCAGAAGAGCCAGAGGAGATGGGTCC[A]CCCACCTGGGCTCCTGAGCCGCTGGCAGA 3’
      type: ""
  cas9: "TrueCut™ Cas9 Protein "
  f_primer: 5’ GCCTCTCTCCCCCATTCTTG 3’
  r_primer: 5’ ATGATGCTGCAGTTCTGGGG 3’
  diagrams:
    - title: CRISPR-Cas9 methodology was used to introduce a single base pair mutation
        to LMNA, and mEGFP at N-terminus of LMNB1 as shown below.
      image: g608g_fullfigure-2-.png
      caption: "Top: LMNA locus showing 7 LMNA isoforms; Bottom: Zoom in on mutation
        site at isoform NM_170707.4(LMNA):c.1824C>T(p.Gly608=)"
    - title: CRISPR-Cas9 methodology was used to introduce a single base pair mutation
        to LMNA, and mEGFP at N-terminus of LMNB1 as shown below.
      caption: "Top: LMNB1 locus showing 2 LMNB1 isoforms; Bottom: Zoom in on mEGFP
        insertion mutation site at N-terminal exon"
      image: lmnb1_gfp-1-.png
stem_cell_characteristics:
  - {}
---
