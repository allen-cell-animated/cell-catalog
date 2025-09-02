---
templateKey: cell-line
cell_line_id: 80
status: released
clone_number: 69
parental_line: 0
genetic_modifications:
  - gene: FUS
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0080-069&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0080-069_CofA.pdf
donor_plasmid: https://www.addgene.org/114410/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-35
images_and_videos:
  images:
    - image: single_plane_image_cl69.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged RNA-binding protein FUS in control cells (left panel) and in the presence of 500 µM sodium arsenite for 15 min (right panel). Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5 µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/307598559
      caption: "Z-stack of a live hiPS cell colony expressing mEGFP-tagged RNA-binding protein FUS in control cells (left panel) and in the presence of 500 µM sodium arsenite for 15 min (right panel). Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/307598542
      caption: "Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged RNA-binding protein FUS. Six minutes after the introduction of 500 µM sodium arsenite, cells were imaged every 5 sec in 3D on a spinning-disk confocal microscope. A single mid-level plane is shown. The inset is a 2.5x enlargement of the boxed region to show detail of aggregate formation. Frames were histogram matched to adjust for photobleaching. Movie plays at 25x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: ACAGACAGGATCGCAGGGAG
  linker: ENLYFQGAAKFKETAAAKFERQHMDSGGGGSSGPSGSSSLEVLFQGPLSSSGPSGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FUS locus showing 3 FUS isoforms; Bottom: Zoom in on mEGFP insertion site at FUS C-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: KARYO_cl69_AICS-80 FUS-mEGFP cl.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "FUS-mEGFP"
      junction: "5'"
      expected_size: "2178"
      confirmed_sequence: "Pass"
    - editedGene: "FUS-mEGFP"
      junction: "3'"
      expected_size: "1485"
      confirmed_sequence: "Pass"
    - editedGene: "FUS-mEGFP"
      junction: "WT internal"
      expected_size: "694"
      confirmed_sequence: "Pass"
    - editedGene: "FUS-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Wild Type: 2722 bp; Insert: 3715 bp"
      confirmed_sequence: "Pass"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: FUS-mEGFP
      clone: 69
      fp_ratio: 0.52
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---