---
templateKey: disease-cell-line
cell_line_id: 105
disease: Cardiomyopathy
date: 2024-02-26T21:30:55.945Z
snp: NM_000257.4(MYH7):c.1106G>A(p.Arg369Gln)
parental_line: 75
status: released
clones:
  - type: Control
    clone_number: 22
    transfection_replicate: A
    genotype: WT/WT
    positive_cells: 50
  - type: Mutant
    clone_number: 30
    transfection_replicate: A
    genotype: R369Q/WT
    positive_cells: 52
  - type: Mutant
    clone_number: 31
    transfection_replicate: A
    genotype: R369Q/R369Q
    positive_cells: 48
  - type: Mutant
    clone_number: 32
    transfection_replicate: A
    genotype: R369Q/WT
    positive_cells: 54
  - type: Mutant
    clone_number: 57
    transfection_replicate: B
    genotype: R369Q/WT
    positive_cells: 36
  - type: Control
    clone_number: 89
    transfection_replicate: B
    genotype: WT/WT
    positive_cells: 57
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0105&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0105_CofA.pdf
images_and_videos:
  images:
    - image: aics-105_clone57_r369q.png
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). A four panel
        image of clone 57 (R369Q/wt) is shown here and is a representative image
        for all clones in the collection (except clone 89). Cultures were
        observed daily. Colonies were imaged one (D1) and four (D4) days
        post-thaw using a Leica microscope at 4x and 10x magnification. Scale
        bars are shown.
    - image: r369q_cl89.png
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). A four panel
        image of clone 89 (wt/wt) is shown here. This cell line may exhibit
        transient poor morphology in the first three passages post-thaw.
        However, this sub-optimal phenotype resolves with continued passage.
        Cultures were observed daily. Colonies were imaged one (D1) and four
        (D4) days post-thaw using a Leica microscope at 4x and 10x
        magnification. Scale bars are shown.
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      image: r369q_sanger_results.png
      caption: Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. The R369Q mutation (NM_000257.4(MYH7):c.1106G>A(p.Arg369Gln))
        is indicated by a G > A. Results confirmed respective genotype as
        indicated in the figure above with no additional mutations present. 
    - title: Mono-Clonality Confirmation via ddPCR Assay
      image: aics-105_r369q_mono-clonality-confirmation.png
      caption: Verification of genomic copy number of WT and mutant alleles.
        R369Q:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
    - title: Karyotype Analysis
      image: aics-105_r369q_c31_karyotype.png
      caption: After cell banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 31. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: " 5’ GTTCAAGCTGAAGCAGCGGG[AGG] 3’"
  dna_donor_sequence:
    - sequence: 5’ TGGAAACATGAAGTTCAAGCTGAAGCAGCAGGAGGAGC[A]GGCGGAGCCAGACGGCACTG 3’
      type: Mutant
  cas9: "TrueCut™ Cas9 Protein "
  f_primer: 5’ GCCAGGAAGCATAAGTGGGT 3’
  r_primer: 5’ GGTGACGTACTCATTGCCCA 3’
  diagrams:
    - title: "CRISPR-Cas9 methodology was used to introduce a single base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown below."
      images:
        - image: r369q_fullfigure.png
          caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation site at isoform NM_000257.4(MYH7):c.1106G>A(p.Arg369Gln)"
        - image: actn2_fullfigure.png
          caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP insertion site at ACTN2 C-terminus"