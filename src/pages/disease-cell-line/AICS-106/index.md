---
templateKey: disease-cell-line
cell_line_id: 106
disease: Cardiomyopathy
date: 2024-02-26T21:30:55.945Z
snp: NM_000257.4(MYH7):c.872C>T(p.Ser291Phe)
parental_line: 75
status: released
clones:
  - type: Control
    clone_number: 40
    transfection_replicate: A
    genotype: WT/WT
  - type: Control
    clone_number: 86
    transfection_replicate: B
    genotype: WT/WT
  - type: Mutant
    clone_number: 104
    transfection_replicate: A
    genotype: S291F/WT
  - type: Mutant
    clone_number: 134
    transfection_replicate: A
    genotype: S291F/WT
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0106&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0106_CofA.pdf
images_and_videos:
  images:
    - caption: "One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one, four and five days
        post-thaw using a Leica microscope 4x and 10x magnification. A four
        panel image of clone 88 is shown here and is a representative image for
        all clones in the collection. Viability and colony formation one day and
        four days post-thaw. Scale bars are shown. "
      image: aics-106_clone88_s291f.png
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      image: aics-0106_s291f_sanger_exported_highres.png
      caption: Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. Results confirmed respective genotype as indicated in table
        above with no additional mutations present. 
    - title: Mono-Clonality Confirmation via ddPCR Assay
      image: aics-0106_s291f_mono-clonality-confirmation.png
      caption: Verification of genomic copy number of WT and mutant alleles.
        S291F:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
    - title: Karyotype Analysis
      image: aics-0106_s291f_cl40_karyotype.png
      caption: After cells banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 40. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: 5’ GCTCAGGCTTTTTGTTAGAC[AGG] 3’
  dna_donor_sequence: 5’ ACTCACCCAGCAGCTCAGGCTTTTT[G]TTAAACAGGATTTGGTAG AAAATGTGATAATCT 3’
  cas9: " TrueCut™ Cas9 Protein "
  f_primer: 5’ GCTAGGTGTCTTTCTCTGGG 3’
  r_primer: 5’ GATCAGCAGCATGTCTAGGG 3’
  diagrams:
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below."'
      caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation
        site at isoform NM_000257.4(MYH7):c.872C>T(p.Ser291Phe)"
      image: s291f_fullfigure-4x.png
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below."'
      caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP
        insertion site at ACTN2 C-terminus"
      image: actn2_fullfigure.png
stem_cell_characteristics:
  - clone_number: 40
    positive_cells: 73
  - clone_number: 88
    positive_cells: 66
  - clone_number: 104
    positive_cells: 75
  - clone_number: 134
    positive_cells: 73
---
