---
templateKey: disease-cell-line
cell_line_id: 97
disease: Cardiomyopathy
date: 2025-05-19T22:57:54.962Z
snp: NM_000257.4(MYH7):c.767G>A(p.Gly256Glu)
parental_line: 75
status: released
clones:
  - type: Mutant
    clone_number: 102
    transfection_replicate: A
    genotype: G256E/WT
    positive_cells: 86
  - type: Control
    clone_number: 113
    transfection_replicate: A
    genotype: WT/WT
    positive_cells: 76
  - type: Mutant
    clone_number: 141
    transfection_replicate: A
    genotype: G256E/WT
    positive_cells: 77
  - type: Mutant
    clone_number: 157
    transfection_replicate: B
    genotype: G256E/WT
    positive_cells: 76
  - type: Control
    clone_number: 174
    transfection_replicate: B
    genotype: WT/WT
    positive_cells: 74
order_link: https://www.coriell.org/0/Sections/Search/DiseaseCollection_Detail.aspx?Ref=AICS-0097&Product=CiPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/iPSC/AICS-0097_CofA.pdf
images_and_videos:
  images:
    - image: g256e-live-imaging-3-_1.png
      caption: "Live-cell imaging of cardiomyocytes with the G256E point mutation in
        the MYH7 locus introduced into the AICS-0075 cell line (which expresses
        mEGFP-tagged alpha-actinin-2). Twelve days after the onset of
        differentiation, cells were plated on PEI and laminin coated glass and
        imaged in 3D on a spinning disk confocal microscope 18 days later (30
        days total after the onset of differentiation). A. clone 113 (wt/wt) and
        B. clone 141 (G256E/wt). Images are maximum intensity projections of 3 Z
        slices. Scale bar 10µm. Image system details: 3i (Denver, CO) spinning
        disk microscope with a Zeiss (Thornwood, NY) 63x/1.2 NA alpha-plan
        APOCHROMAT water objective, a CSU-W1 Yokogawa (Sugar Land, TX) spinning
        disk head, and Hammamatsu (Hammamatsu City, Japan) Orca Flash 4.0
        camera."
    - image: aics-097_cl141_g256e.png
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw - refer to culture protocol). A four panel
        image of clone 141 (G256E/wt) is shown here and is a representative
        image for all clones in the collection. Cultures were observed daily.
        Colonies were imaged one (D1) and four (D4) days post-thaw using a Leica
        microscope at 4x and 10x magnification. Scale bars are shown.
genomic_characterization:
  diagrams:
    - title: Sanger Sequencing Results
      image: g256e_sanger_results-01.png
      caption: '"Sanger Sequencing was performed on MYH7 recombinant and wildtype
        alleles. The G256E mutation (NM_000257.4(MYH7):c.767G>A(p.Gly256Glu)) is
        indicated by a G > A. Results confirmed respective genotype as indicated
        in the figure above with no additional mutations present. "'
    - title: Mono-Clonality Confirmation via ddPCR Assay
      image: aics-97_g256e_mono-clonality-confirmation.png
      caption: Verification of genomic copy number of WT and mutant alleles.
        G256E:WT/RPP30 ratio from ddPCR assay; values ~ 0.5 indicate
        heterozygous clone, values ~1 indicate unedited clone. RPP30 is known 2n
        reference gene. 
    - title: "Karyotype Analysis "
      image: aics-97_g256e_cl157_karyotype.png
      caption: After cell banks were created, one vial per clone was thawed and 30
        G-banded metaphase cells were karyotyped. Above is the representative
        analysis for clone 157. All clones resulted in normal karyotype.
editing_design:
  crna_target_site: 5’ TTTTGGGGCAACAGGAAAGT[TGG] 3’
  dna_donor_sequence:
    - sequence: 5’ AATTCATTCGAATTCATTTTGGGGCAACAG[A]AAAGTTGGCATCTGCAGACATAGAGACC 3’
      type: Mutant
  cas9: "TrueCut™ Cas9 Protein "
  f_primer: " 5’ CCCAACTCATCACCACTCTC 3’"
  r_primer: 5’ GGAGAGAGAGAGAGGTCAAG 3’
diagrams:
 - title: "CRISPR-Cas9 methodology was used to introduce a single base pair mutation to MYH7, and mEGFP at C-terminus of ACTN2 as shown below."
   images:
     - image: g256e_fullfigure.png
       caption: "Top: MYH7 locus showing 1 MYH7 isoform; Bottom: Zoom in on mutation site at isoform NM_000257.4(MYH7):c.767G>A(p.Gly256Glu)"
     - image: actn2_fullfigure.png
       caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP insertion site at ACTN2 C-terminus"
---
