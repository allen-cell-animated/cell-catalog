---
templateKey: cell-line
cell_line_id: 78
status: data complete
date: 2025-05-06T22:19:51.710Z
clone_number: 79
parental_line: 0
genetic_modifications:
  - gene: TOMM20
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: TUBA1B
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0078-079&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0078-079_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-55
images_and_videos:
  images:
    - image: single_plane_image_cl79.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged Tom20 and mTagRFP-T-tagged alpha-tubulin. Panels show individual channels for Tom20 (left), alpha-tubulin (middle), and the overlay of the two (right).  Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        translocase of outer mitochondrial membrane 20 and mTagRFP-T-tagged
        tubulin-alpha 1b. Panels show individual channels for outer
        mitochondrial membrane 20 (left) and tubulin-alpha 1b (middle) and the
        overlay of the two (right). Cells were imaged in 3D on a spinning-disk
        confocal microscope every 3 min and a single plane is shown. Movie plays
        at 1800x real time. Scale bar, 20 µm.
      video: https://player.vimeo.com/video/1079601694
    - caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged translocase of
        outer mitochondrial membrane 20 and mTagRFP-T-tagged tubulin-alpha 1b.
        Panels show individual channels for translocase of outer mitochondrial
        membrane 20 (left) and tubulin-alpha 1b (middle) and the overlay of the
        two (right). Cells were imaged in 3D on a spinning-disk confocal
        microscope. The movie starts at the bottom of the cells and ends at the
        top. Scale bar, 5µm.
      video: https://player.vimeo.com/video/1079600993
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        translocase of outer mitochondrial membrane 20 and mTagRFP-T-tagged
        tubulin-alpha 1b. Panels show individual channels for translocase of
        outer mitochondrial membrane 20 (left) and tubulin-alpha 1b (middle) and
        the overlay of the two (right). Cells were imaged in 3D every 3 min on a
        spinning-disk confocal microscope and a single plane is shown. Movie
        plays at 900x real time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079599493
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: AATTGTAAGTGCTCAGAGCT / GATGCACTCACGCTGCGGGA
  linker: GGSGDPPVAT / GGSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TOMM20 locus with zoom in on mEGFP insertion site at TOMM20 C-terminal exon. Bottom: TUBA1B locus with zoom in on mTagRFP-T insertion site at TUBA1B N-terminus."
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: _karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: ""
      junction: "5'"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "3'"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "WT"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: 
      clone: cl
      fp_ratio: 
      plasmid: 
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---