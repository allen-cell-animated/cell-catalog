---
templateKey: disease-cell-line
cell_line_id: 109
disease: Cardiomyopathy
date: 2024-04-02T18:32:23.320Z
snp: NM_000257.4(MYH7):c.1573G>A (p.Glu525Lys)
parental_line: 75
status: released
clones:
  - type: Control
    clone_number: 55
    transfection_replicate: B
    genotype: WT/WT
    positive_cells: 58
  - type: Mutant
    clone_number: 56
    transfection_replicate: B
    genotype: E525K/WT
    positive_cells: 76
  - type: Control
    clone_number: 72
    transfection_replicate: B
    genotype: WT/WT
    positive_cells: 73
  - type: Mutant
    clone_number: 93
    transfection_replicate: B
    genotype: E525K/WT
    positive_cells: 62
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0109&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0109_CofA.pdf
images_and_videos:
  images:
    - caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). A four panel
        image of clone 93 (E525K/wt) is shown here and is a representative image
        for all clones in the collection. Cultures were observed daily. Colonies
        were imaged one (D1) and four (D4) days post-thaw using a Leica
        microscope at 4x and 10x magnification. Scale bars are shown.
      image: aics-109_clone93_e525k.png
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      caption: Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. The E525K mutation (NM_000257.4(MYH7):c.1573G>A (p.Glu525Lys))
        is indicated by a G > A. Results confirmed respective genotype as
        indicated in the figure above with no additional mutations present. 
      image: e525k_sanger_results.png
    - title: Mono-Clonality Confirmation via ddPCR Assay
      caption: Verification of genomic copy number of WT and mutant alleles.
        E525K:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
      image: aics-0109_e525k_mono-clonality-confirmation.png
    - title: Karyotype Analysis
      caption: After cells banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 72. All clones resulted in normal karyotype.
      image: aics-0109_cl72_e525k_karyotype.png
editing_design:
  crna_target_site: 5’ AAAGAGGCACCTTCTCGATG[AGG] 3’
  dna_donor_sequence:
    - sequence: 5’ TCAGGTGGTAAGGCCAAAGAGGCACCTTCT[T]GATGAGGTCAATGC AGGCCTGCAGGTCC 3’
      type: Mutant
  cas9: "TrueCut™ Cas9 Protein "
  f_primer: " 5’ GGACTGTGTGGTGACAGAGG 3’"
  r_primer: " 5’ GTGTGGGAGGTCATCATGCA 3’"
  diagrams:
    - title: "CRISPR-Cas9 methodology was used to introduce a single base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown below."
      images:
        - image: e525k_fullfigure.png
          caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation site at isoform NM_000257.4(MYH7):c.1573G>A (p.Glu525Lys)"
        - image: actn2_fullfigure.png
          caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP insertion site at ACTN2 C-terminus"