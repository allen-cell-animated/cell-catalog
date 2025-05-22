---
templateKey: disease-cell-line
cell_line_id: 107
disease: Cardiomyopathy
date: 2025-05-19T22:56:39.905Z
snp: NM_000257.4(MYH7):c.1816G>A(p.Val606Met)
parental_line: 75
status: released
clones:
  - type: Mutant
    clone_number: 9
    transfection_replicate: A
    genotype: V606M/WT
    positive_cells: 72
  - type: Mutant
    clone_number: 17
    transfection_replicate: A
    genotype: V606M/WT
    positive_cells: 74
  - type: Control
    clone_number: 63
    transfection_replicate: B
    genotype: WT/WT
    positive_cells: 73
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0107&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0107_CofA.pdf
images_and_videos:
  images:
    - caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). A four panel
        image of clone 17 (V606M/wt) is shown here and is a representative image
        for all clones in the collection. Cultures were observed daily. Colonies
        were imaged one (D1) and four (D4) days post-thaw using a Leica
        microscope at 4x and 10x magnification. Scale bars are shown.
      image: aics107108_clone17_v606m.png
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      image: v606m_sanger_results.png
      caption: Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. The V606M mutation (NM_000257.4(MYH7):c.1816G>A(p.Val606Met))
        is indicated by a G > A. Results confirmed respective genotype as
        indicated in the figure above with no additional mutations present. 
    - title: Mono-Clonality Confirmation via ddPCR Assay
      image: aics-0107_v606m_mono-clonality-confirmation.png
      caption: Verification of genomic copy number of WT and mutant alleles.
        V606M:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
    - title: Karyotype Analysis
      image: aics-0107_v606m_cl9_karyotype.png
      caption: After cells banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 9. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: 5’ CCTCTCAATGAGACTGTCGT[GGG] 3’
  dna_donor_sequence:
    - sequence: " 5’ AGAACAAGGATCCTCTCAATGAGACTGTC[A]TGGGCTTGTATCAGAAGTCTTCCCTCAAG 3’"
      type: Mutant
    - sequence: " 5’ AGAACAAGGATCCTCTCAATGAGACTGTGGTGGGCTTGTATCAGAAGTCTTCCCTCAAG 3’"
      type: WT
  cas9: " TrueCut™ Cas9 Protein "
  f_primer: 5’ TGCATGATGACCTCCCACAC 3’
  r_primer: 5’ TGCAGAGCTGACACAGTCTG 3’
  diagrams:
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below."'
      caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation
        site at isoform NM_000257.4(MYH7):c.1816G>A(p.Val606Met)"
      image: v606m_fullfigure.png
    - title: '"Header Caption: CRISPR-Cas9 methodology was used to introduce a single
        base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown
        below."'
      caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP
        insertion site at ACTN2 C-terminus"
      image: actn2_fullfigure.png
---
