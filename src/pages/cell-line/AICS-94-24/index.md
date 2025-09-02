---
templateKey: cell-line
cell_line_id: 94
status: released
clone_number: 24
parental_line: 0
genetic_modifications:
  - gene: SON
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0094-024&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0094-024_CofA.pdf
donor_plasmid: https://www.addgene.org/133964/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-40
images_and_videos:
  images:
    - image: single_plane_image_cl24.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged SON. Cells were imaged in 3Don a spinning-disk confocal microscope. Scale bar, 5μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/442186399
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged SON. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/442186172
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged SON. A single, mid-level plane of the cells was imaged every 3 min on a spinning-disk confocal microscope. Movie plays at 900x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/442186194
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged SON. A single, mid-level plane of the cells was imaged every 3 min on a spinning-disk confocal microscope. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: CTGCTCGATGTTGGTCGCCA
  linker: SGLRS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SON locus showing 4 SON isoforms; Bottom: Zoom in on mEGFP insertion site at SON N-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-94_cl24_SON_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "SON-mEGFP"
      junction: "5'"
      expected_size: "1592"
      confirmed_sequence: "yes"
    - editedGene: "SON-mEGFP"
      junction: "3'"
      expected_size: "1525"
      confirmed_sequence: "yes"
    - editedGene: "SON-mEGFP"
      junction: "WT internal"
      expected_size: "1694"
      confirmed_sequence: "yes"
    - editedGene: "SON-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SON-mEGFP
      clone: 24
      fp_ratio: 0.52
      plasmid: 0.001
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---