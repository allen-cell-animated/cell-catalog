---
templateKey: disease-cell-line
cell_line_id: 104
disease: Cardiomyopathy
date: 2024-02-10T06:30:07.929Z
snp: NM_000257.4(MYH7):c.752C>A(p.His251Asn)
parental_line: 75
status: released
clones:
  - type: Mutant
    clone_number: 3
    transfection_replicate: A
    genotype: H251N/WT
    positive_cells: 82
  - type: Control
    clone_number: 4
    transfection_replicate: A
    genotype: WT/WT
    positive_cells: 92
  - type: Control
    clone_number: 6
    transfection_replicate: A
    genotype: WT/WT
    positive_cells: 49
  - type: Mutant
    clone_number: 85
    transfection_replicate: B
    genotype: H251N/WT
    positive_cells: 79
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0104&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0104_CofA.pdf
images_and_videos:
  images:
    - image: aics-104_cl85_h251n-1-.png
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one, four and five days
        post-thaw using a Leica microscope 4x and 10x magnification. A six panel
        image of clone 85 (H251N/wt) is shown here and is a representative image
        for all clones in the collection (except clone 4). Viability and colony
        formation one day and four days post-thaw. Scale bars are shown.
    - image: aics-104_cl4_h251n-1-.png
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). Cultures
        were observed daily. Colonies were imaged one, four and five days
        post-thaw using a Leica microscope 4x and 10x magnification. A six panel
        image of clone 4 (wt/wt) is shown here. Viability and colony formation
        one day and four days post-thaw. This cell line may exhibit transient
        poor morphology in the first three passages post thaw. Scale bars are
        shown.
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      image: aics-0104_h251n_sanger_exported_highres.png
      caption: Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. Results confirmed respective genotype as indicated in table
        above with no additional mutations present. 
    - title: Mono-Clonality Confirmation via ddPCR Assay
      image: aics-0104_h251n_mono-clonality-confirmation.png
      caption: Verification of genomic copy number of WT and mutant alleles.
        H251N:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
    - title: Karyotype Analysis
      image: aics-0104_h251n_cl3_karyotype.png
      caption: After cells banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 3. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: 5’ ATTCATTCGAATTCATTTTG[GGG] 3’
  dna_donor_sequence:
    - sequence: 5’ CCATCTCTCCAGGGGAAATTCATTCGAATT[A]ATTTTGGGGCAACAGGAAAGTTGGCATC 3’
      type: ""
  cas9: "TrueCut™ Cas9 Protein "
  f_primer: 5’ TCTCCTGATTTGAGGCTTGC 3’
  r_primer: 5’ AAAGACACCTAGCCATGCAG 3’
  diagrams:
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below. "'
      image: h251n_fullfigure-4x.png
      caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation
        site at isoform NM_000257.4(MYH7):c.752C>A(p.His251Asn)"
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below. "'
      image: actn2_fullfigure.png
      caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP
        insertion site at ACTN2 C-terminus"
---
