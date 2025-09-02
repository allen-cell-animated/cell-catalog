---
templateKey: cell-line
cell_line_id: 54
status: released
clone_number: 91
parental_line: 0
genetic_modifications:
  - gene: AAVS1
    tag_location: NA
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0054-091&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0054-091_CofA.pdf
donor_plasmid: https://www.addgene.org/107580/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-23
images_and_videos:
  images:
    - image: single_plane_image_cl91.jpg
      caption: "Single-planes of live hiPS cell colony expressing the CAAX domain of K-Ras tagged with mEGFP expressed from a safe harbor locus. Z-planes shown are at the bottom (left), middle (middle) and top (right) of cells. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265784896
      caption: "Z-stack of live hiPS cell colony expressing the CAAX domain of K-Ras tagged with mEGFP from a safe harbor locus. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/265784904
      caption: "Time-lapse movie of live hiPS cell colonies expressing the CAAX domain of K-Ras tagged with mEGFP from a safe harbor locus. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. Image is a single z-plane near the bottom of the cells. Movie plays at 1800x real time. Scale bar, 10 µm."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: GGGGCCACTAGGGACAGGAT
  linker: NA
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: mTagRFPT insertion site at safe harbor locus (AAVS1) in PPP1R12C intron; Bottom: Zoom in on mTagRFPT insertion site at safe harbor locus (AAVS1); insertion into AAVS1 is based on Hockmeyer et al (2011) Nat. Biotechnology, 29(8): 731-734"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mTag-RFP-T.png
    - title: "Karyotype Analysis"
      images:
        - image: AAVS1_cl.91.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "AAVS1-mTagRFP-T"
      junction: "5'"
      expected_size: "NA"
      confirmed_sequence: "NA"
    - editedGene: "AAVS1-mTagRFP-T"
      junction: "3'"
      expected_size: "1213"
      confirmed_sequence: "Yes"
    - editedGene: "AAVS1-mTagRFP-T"
      junction: "WT internal"
      expected_size: "534"
      confirmed_sequence: "Yes"
    - editedGene: "AAVS1-mTagRFP-T"
      junction: "Full junctional allele"
      expected_size: "NA"
      confirmed_sequence: "NA"
  junction_table_caption: "PCR amplified 3' junction was used to establish delivery via HDR at the intended genomic locus. Tiled junctions were not possible to amplify or sequence due to the large size of the delivered sequence (6KB). The precise sequence of the delivered sequence was not determined because the mTag-RFP-T tag sequence was not fused to an endogenous coding sequence."
  ddpcr:
    - tag: AAVS1-mTagRFP-T
      clone: 91
      fp_ratio: 0.483
      plasmid: 0.001
  ddpcr_caption: "mTagRFP-T: mTagRFP-T/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---