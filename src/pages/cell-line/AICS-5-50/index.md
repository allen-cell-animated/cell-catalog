---
templateKey: cell-line
cell_line_id: 5
status: released
clone_number: 50
parental_line: 0
genetic_modifications:
  - gene: PXN
    tag_location: C-terminus
    fluorescent_tag: EGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0005&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0005_CofA.pdf
donor_plasmid: https://www.addgene.org/87420/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-1
images_and_videos:
  images:
    - image: single_plane_image_cl50.jpg
      caption: "Single image of a live hiPSC colony expressing paxillin-EGFP imaged on a spinning-disk confocal microscope. Left panel is a single slice of the z-tack near the bottom of the cell; right panel is this same projection overlaid onto one slice of the same z-stack in the transmitted light channel."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/198387263
      caption: "Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images are a single slice near the bottom of the cell taken every 5 minutes for 400 minutes on a spinning-disk confocal microscope. Movie sped up 3000x over real time."
    - video: https://player.vimeo.com/video/198389731
      caption: "Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images taken as a partial z-stack near the bottom of the cell every 5 minutes for 160 minutes on a spinning-disk confocal microscope. Image is a maximum intensity projection. Movie sped up 1500x over real time."
editing_design:
  ncbi_isoforms:
    - NM_0028593
  crna: GCACCTAGCAGAAGAGCTTG
  linker: GTSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: PXN locus showing 4 PXN isoforms; Bottom: Zoom in on EGFP insertion site at PXN C-terminal exon"
---