---
templateKey: cell-line
cell_line_id: 34
status: released
clone_number: 62
parental_line: 0
genetic_modifications:
  - gene: LMNB1
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0034-062&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0034-062_CofA.pdf
donor_plasmid: https://www.addgene.org/114403/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-41
images_and_videos:
  images:
    - image: single_plane_image_cl62.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mTagRFP-T-tagged lamin B1. Cells wereimaged in 3D on a spinning-disk confocal microscope. Scale bar, 5μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/442184712
      caption: "Z-stack of live hiPS cell colony expressing mTagRFP-T-tagged lamin B1. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/442184397
      caption: "Time-lapse movie of live hiPS cell colony expressing mTagRFP-T-tagged lamin B1. A single, mid-level plane of the cells was imaged every 3 min on a spinning-disk confocal microscope. Movie plays at 1800x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/442184428
      caption: "Time-lapse movie of live hiPS cell colony expressing mTagRFP-T-tagged lamin B1. A single, mid-level plane of the cells was imaged every 3 min on a spinning-disk confocal microscope. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: GGGGTCGCAGTCGCCATGGC
  linker: SGLRSRAQAS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: LMNB1 locus showing 2 LMNB1 isoforms with zoom in on mTagRFP-T insertion site at LMNB1 N-terminal exon."
category_labels: 
  - Key Structure and Organelle
  - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-34_cl62_LMNB1-mTagRFP-T_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "5'"
      expected_size: "1406"
      confirmed_sequence: "yes"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "3'"
      expected_size: "1388"
      confirmed_sequence: "yes"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "WT internal"
      expected_size: "1462"
      confirmed_sequence: "yes"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: LMNB1-mTagRFP-T
      clone: 62
      fp_ratio: 0.523
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---