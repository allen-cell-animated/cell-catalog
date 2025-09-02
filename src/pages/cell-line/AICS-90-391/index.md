---
templateKey: cell-line
cell_line_id: 90
status: data complete
date: 2025-05-06T20:24:44.576Z
clone_number: 391
parental_line: 0
genetic_modifications:
  - gene: CLYBL safe harbor
    tag_location: NA
    fluorescent_tag: TagBFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0090-391&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0090-391_CofA.pdf
donor_plasmid: https://www.addgene.org/127968/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-45
images_and_videos:
  images:
    - image: single_plane_image_cl391.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing TagBFP-tagged dCas9-KRAB. TagBFP-tagged dCas9-KRAB (left) and overlay onto transmitted light image (right) are shown. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 50 μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/1079587233
      caption: Z-stack of live hiPS cell colony expressing TagBFP-tagged dCas9-KRAB.
        TagBFP-tagged dCas9-KRAB (left) and overlay onto transmitted light image
        stack (right) are shown. Cells were imaged in 3D on a spinning-disk
        confocal. Movie starts at the bottom of the cells and ends at the top.
        Scale bar, 20 μM.
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: TGTTGGAAGGATGAGGAAAT
  linker: N/A
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: CLYBL locus; Bottom: Zoom in on dCas9-TagBFP-KRAB insertion site at CLYBL safe harbor site between exons 2 and 3"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_generic_insert.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-90_cl391_CLYBL-dCas9-KRAB_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "dCas9-KRAB-BFP"
      junction: "5'"
      expected_size: "1942"
      confirmed_sequence: "Yes"
    - edited_gene: "dCas9-KRAB-BFP"
      junction: "3'"
      expected_size: "3232"
      confirmed_sequence: "Yes"
    - edited_gene: "dCas9-KRAB-BFP"
      junction: "WT internal"
      expected_size: "2232"
      confirmed_sequence: "Yes"
    - edited_gene: "dCas9-KRAB-BFP"
      junction: "Full junctional allele"
      expected_size: "Not performed"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: CLYBL-dCas9-TagBFP-KRAB
      clone: 391
      fp_ratio: 0.54
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---