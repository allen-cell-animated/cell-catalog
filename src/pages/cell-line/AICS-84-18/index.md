---
templateKey: cell-line
cell_line_id: 84
status: released
clone_number: 18
parental_line: 0
genetic_modifications:
  - gene: FBL
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: NPM1
    tag_location: C-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0084-018&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0084-018_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-38
images_and_videos:
  images:
    - image: single_plane_image_cl18.jpg
      caption: "Single mid-level plane of live hiPS cell colony expressing mEGFP-tagged nucleophosmin. Right panel is the same image as the left but with contrast enhanced to visualize dimmer localization in mitotic cells. Images are maximum intensity projections through the volume of the cells. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/333852568
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged fibrillarin and mTagRFP-T-tagged nucleophosmin. Panels show individual channels for fibrillarin (left) and nucleophosmin (middle) and the overlay of the two (right). Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/333852580
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged fibrillarin and mTagRFP-T-tagged nucleophosmin. The region bounded by a dashed line is shown at the same scale with enhanced contrast to highlight changes in localization during mitosis. A single, mid-level plane of the cells was imaged every 3 min on a spinning-disk confocal microscope. Movie plays at 900x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/333852631
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged fibrillarin and mTagRFP-T-tagged nucleophosmin. Panels show individual channels for fibrillarin (left) and nucleophosmin (middle) and the overlay of the two (right). Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. Frames are maximum intensity z-projections through the entire volume of the cell. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: AACTGAAGTTCAGCGCTGTC / TCCAGGCTATTCAAGATCTC
  linker: KPNSAVDGTAGPGSIAT / KPNSAVDGTAGPGSIAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FBL locus with zoom in on mEGFP insertion site at FBL C-terminal exon. Bottom: NPM1 locus showing 7 NPM1 isoforms with zoom in on mTagRFP-T insertion site at NPM1 C-terminal exon"
---