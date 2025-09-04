---
templateKey: cell-line
cell_line_id: 58
status: released
clone_number: 67
parental_line: 0
genetic_modifications:
  - gene: CTNNB1
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0058-067&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0058-067_CofA.pdf
donor_plasmid: https://www.addgene.org/109119/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-25
images_and_videos:
  images:
    - image: single_plane_image_cl67.jpg
      caption: "Single-planes of live hiPS cell colony expressing mEGFP-tagged-beta-catenin. Z-planes shown are at the bottom (left), middle (middle) and top (right) of cells. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265792326
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged beta-catenin. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/265792317
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged-beta-catenin. Cells were imaged in 3D on a spinning-disk confocal microscope every 5 min. Image is a maximum intensity projection through the top 12 z-sections (3.19 µm) of the colony. Frames were histogram matched to adjust for photobleaching. Movie plays at 3000x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: TGAAAATCCAGCGTGGACAA
  linker: SGLRSRAQASNSAVDGTAAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: CTNNB1 locus showing 4 CTNNB1 isoforms; Bottom: Zoom in on mEGFP insertion site at CTNNB1 N-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: AICS-58_AICS-57_full_allele_PCR_180202b.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-58_CTNNB1-mEGFP_cl67.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "CTNNB1-mEGFP"
      junction: "5'"
      expected_size: "1447"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "3'"
      expected_size: "1626"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "WT internal"
      expected_size: "762"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:WIP; Untagged:WIP"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: CTNNB1-mEGFP
      clone: 67
      fp_ratio: 0.54
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---