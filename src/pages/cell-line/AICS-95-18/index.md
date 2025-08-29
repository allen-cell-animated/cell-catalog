---
templateKey: cell-line
cell_line_id: 95
status: data complete
date: 2025-05-06T20:50:42.082Z
clone_number: 18
parental_line: 0
genetic_modifications:
  - gene: EZH2
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0095-018&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0095-018_CofA.pdf
donor_plasmid: https://www.addgene.org/164499/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-46
images_and_videos:
  images:
    - image: single_plane_image_cl18.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged EZH2. Cells were imaged in 3D on a spinning-disk confocal microscope and are shown here with the despeckle ImageJ filter applied. Scale bar, 50μm"
    - image: AICS-95_cl18_EZH2_final.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged EZH2.
        Cells were imaged in 3D on a spinning-disk confocal microscope every 3
        min. A single mid-level plane is shown. Bleaching was corrected using
        the histogram matching method in ImageJ. Movie plays at 1800x real time.
        Scale bar, 20 µm.
      video: https://vimeo.com/1079586924/c12e670d46?ts=0&share=copy
    - video: https://vimeo.com/1081974615/07b306116c?ts=0&share=copy
      caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged EZH2. Cells
        were imaged in 3D on a spinning-disk confocal microscope and are shown
        here with the despeckle ImageJ filter applied. Movie starts at the
        bottom of the cells and ends at the top. Scale bar, 5 μm.
editing_design:
  ncbi_isoforms:
    - n
  crna: ACAGGTGATCATATTCAGGC
  linker: SGLRSRA
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: EZH2 locus showing 5 EZH2 isoforms; Bottom: Zoom in on mEGFP insertion site at EZH2 N-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-95_cl18_EZH2_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "EZH2-mEGFP"
      junction: "5'"
      expected_size: "1500"
      confirmed_sequence: "yes"
    - edited_gene: "EZH2-mEGFP"
      junction: "3'"
      expected_size: "1770"
      confirmed_sequence: "yes"
    - edited_gene: "EZH2-mEGFP"
      junction: "WT internal"
      expected_size: "1575"
      confirmed_sequence: "yes"
    - edited_gene: "EZH2-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: EZH2-mEGFP
      clone: 18
      fp_ratio: 0.503
      plasmid: 0.008
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---