---
templateKey: cell-line
cell_line_id: 12
status: released
clone_number: 105
parental_line: 0
genetic_modifications:
  - gene: TUBA1B
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0012&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0012_CofA.pdf
donor_plasmid: https://www.addgene.org/87421/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-2
images_and_videos:
  images:
    - image: single_plane_image_cl105.jpg
      caption: "Single image of a live hiPSC colony expressing alpha-tubulin-mEGFP imaged on a spinning-disk confocal microscope. Image is a single slice taken in the middle of the z-stack."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/198391203
      caption: "Z-stack of live hiPSC cells expressing alpha-tubulin-mEGFP imaged on a spinning-disk confocal microscope. Image starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/198391342
      caption: "Timelapse movie of a hiPSC colony expressing alpha-tubulin-mEGFP. Images taken as a single slice near the top of the cell every 1 minute for 65 minutes on a spinning-disk confocal microscope. Movie sped up 900x over real time."
    - video: https://player.vimeo.com/video/198391249
      caption: "Timelapse movie of a hiPSC colony expressing alpha-tubulin-mEGFP. Images taken in 3D every 4 minutes for 400minutes on a spinning-disk confocal microscope. Image is a maximum intensity projection Movie sped up 1200x over real time."
editing_design:
  TUBA1B_ncbi_isoforms: NM_006082
  crna: GATGCACTCACGCTGCGGGA
  linker: GGSGGS
  cas9: Wildtype spCas9
  diagrams:
  - title: "mEGFP Insert"
    images:
      - image: EditingDesign_gene_figure.png
        caption: "Top: TUBA1B locus; Bottom: Zoom in on mEGFP insertion site at TUBA1B N-terminus"
---