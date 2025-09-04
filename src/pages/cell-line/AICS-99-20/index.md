---
templateKey: cell-line
cell_line_id: 99
status: data complete
date: 2025-05-06T22:15:04.800Z
clone_number: 20
parental_line: 0
genetic_modifications:
  - gene: CTCF
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0099-020&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0099-020_CofA.pdf
donor_plasmid: https://www.addgene.org/168799/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-57
images_and_videos:
  images:
    - image: single_plane_image_cl20.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged CCCTC-binding factor (CTCF). Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        CCCTC-binding factor (CTCF). A single, mid-level plane of the cells was
        imaged every 3 min on a spinning-disk confocal microscope. Movie plays
        at 900x real time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079876600
    - caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged CCCTC-binding
        factor (CTCF). Cells were imaged in 3D on a spinning-disk confocal
        microscope. Movie starts at the bottom of the cells and ends at the top.
        Scale bar, 5µm.
      video: https://player.vimeo.com/video/1079876690
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        CCCTC-binding factor (CTCF). A single, mid-level plane of the cells was
        imaged every 3 min on a spinning-disk confocal microscope. Movie plays
        at 1800x real time. Scale bar, 20 µm.
      video: https://player.vimeo.com/video/1079876768
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: TGATGCAGTCGAAGCCATTG
  linker: EDLYFQS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: CTCF locus showing 2 CTCF isoforms; Bottom: Zoom in on mEGFP insertion site at CTCF N-terminal exon"
category_labels: 
 - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-99_cl20_CTCF_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "CTCF-mEGFP"
      junction: "5'"
      expected_size: "1715"
      confirmed_sequence: "Yes"
    - edited_gene: "CTCF-mEGFP"
      junction: "3'"
      expected_size: "1687"
      confirmed_sequence: "Yes"
    - edited_gene: "CTCF-mEGFP"
      junction: "WT"
      expected_size: "1208"
      confirmed_sequence: "Yes"
    - edited_gene: "CTCF-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:  3232 bp; Untagged: 2498 bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: CTCF-mEGFP
      clone: 20
      fp_ratio: 0.54
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---