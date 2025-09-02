---
templateKey: cell-line
cell_line_id: 61
status: released
clone_number: 36
parental_line: 0
genetic_modifications:
  - gene: HIST1H2BJ
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0061-036&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0061-036_CofA.pdf
donor_plasmid: https://www.addgene.org/109121/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-28
images_and_videos:
  images:
    - image: single_plane_image_cl36.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged Histone H2B type 1-J protein. The cells in the imaged region highlight cell-cycle-dependent changes in localization. The large dim regions within nuclei likely represent nucleoli. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5 µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/287833505
      caption: " Z-stack of live hiPS cell colony expressing mEGFP-tagged Histone H2B type 1-J protein. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/287833489
      caption: " Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged Histone H2B type 1-J protein. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level z-section is shown. Movie plays at 1260x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/287833497
      caption: " Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged Histone H2B type 1-J protein. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level z-section is shown. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: ACTCACTGTTTACTTAGCGC
  linker: DPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: HIST1H2BJ locus; Bottom: Zoom in on mEGFP insertion site at HIST1H2BJ C-terminus"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: AICS-61_cl36_71 Full Allele redo_edited.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-61 H2B-mEGFP cl36_karyo_image.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "HIST1H2BJ-mEGFP"
      junction: "5'"
      expected_size: "1643"
      confirmed_sequence: "Yes"
    - editedGene: "HIST1H2BJ-mEGFP"
      junction: "3'"
      expected_size: "1448"
      confirmed_sequence: "Yes"
    - editedGene: "HIST1H2BJ-mEGFP"
      junction: "WT internal"
      expected_size: "1871"
      confirmed_sequence: "Yes"
    - editedGene: "HIST1H2BJ-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Wild Type: 2057 bp; Insert: 2789 bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: HIST1H2BJ-mEGFP
      clone: 36
      fp_ratio: 0.482
      plasmid: 0.001
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---