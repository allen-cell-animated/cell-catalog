---
templateKey: cell-line
cell_line_id: 93
status: data complete
date: 2025-05-06T22:09:02.776Z
clone_number: 25
parental_line: 0
genetic_modifications:
  - gene: TERF2
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0093-025&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0093-025_CofA.pdf
donor_plasmid: https://www.addgene.org/168798/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-48
images_and_videos:
  images:
    - image: single_plane_image_cl25.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged telomeric repeat-binding factor 2 (TRF2). Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5 μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        TERF2. A single, mid-level plane of the cells was imaged every 3 min on
        a spinning-disk confocal microscope. Movie plays at 900x real time.
        Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079587357
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        TERF2. A single, mid-level plane of the cells was imaged every 3 min on
        a spinning-disk confocal microscope. Movie plays at 1800x real time.
        Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079599130
    - caption: Z-stack of a live hiPS cell colony expressing mEGFP-tagged TERF2. Cells
        were imaged in 3D on a spinning-disk confocal microscope. The movie
        starts at the bottom of the cells and ends at the top. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079598064
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: CGCTGTTTCTATCATGGCCG
  linker: SGRTQIP
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TERF2 locus; Bottom: Zoom in on mEGFP insertion site at TERF2 N-terminal exon."
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-93_cl25_TERF2_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "TERF2-mEGFP"
      junction: "5'"
      expected_size: "1712"
      confirmed_sequence: "Yes"
    - editedGene: "TERF2-mEGFP"
      junction: "3'"
      expected_size: "1652"
      confirmed_sequence: "Yes"
    - editedGene: "TERF2-mEGFP"
      junction: "WT"
      expected_size: "1637"
      confirmed_sequence: "Yes"
    - editedGene: "TERF2-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplif      ication from the donor plasmid."
  ddpcr:
    - tag: TERF2-mEGFP
      clone: 25
      fp_ratio: 0.521
      plasmid: 0.008
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 in      dicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---