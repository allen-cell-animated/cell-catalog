---
templateKey: cell-line
cell_line_id: 11
status: released
clone_number: 27
parental_line: 0
genetic_modifications:
  - gene: TOMM20
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0011&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0011_CofA.pdf
donor_plasmid: https://www.addgene.org/87423/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-5
images_and_videos:
  images:
    - image: single_plane_image_cl27.jpg
      caption: "Single image of a live hiPSC colony expressing Tom20-mEGFP imaged on a spinning-disk confocal microscope. Image is a maximum intensity projection of 5 z-slices near the bottom of the cell."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/198395310
      caption: "Z-stack of live hiPSC cells expressing Tom20-mEGFP imaged on a spinning-disk confocal microscope. Image starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/198395370
      caption: "Timelapse movie of a hiPSC colony expressing tom20-mEGFP. Images taken as a partial z-stack near the bottom  of the cell every 11 seconds for 3 minutes on a spinning-disk confocal microscope. Image is a maximum intensity projection. Movie sped up 55x over real time."
editing_design:
  ncbi_isoforms:
    - NM_014765
  cr_rna: AATTGTAAGTGCTCAGAGCT
  linker: GGSGDPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TOMM20 locus; Bottom: Zoom in on mEGFP insertion site at TOMM20 C-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: TOMM20_full_allele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. GFP-tagged allele could not be amplified in TOMM20-mEGFP due to possible duplication at insertion site. (1% Agarose gel with Thermo Fisher 1kb ladder). *clone available from Coriell"
    - title: "Karyotype Analysis"
      images:
        - image: StemCellCharacterization_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 20 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "TOMM20-mEGFP"
      junction: "5'"
      expected_size: "1870"
      confirmed_sequence: "Yes, but evidence of duplication"
    - editedGene: "TOMM20-mEGFP"
      junction: "3'"
      expected_size: "1474"
      confirmed_sequence: "Yes, but evidence of duplication"
    - editedGene: "TOMM20-mEGFP"
      junction: "WT internal"
      expected_size: "722"
      confirmed_sequence: "Yes, but evidence of duplication"
    - editedGene: "TOMM20-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2955; Untagged:2208"
      confirmed_sequence: "Cannot be amplified due to likely duplication"
  junction_table_caption: "PCR amplified and Sanger sequenced 5’, 3’, WT, and full allele junctions to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: TOMM20-mEGFP
      clone: 27
      fp_ratio: 0.76
      plasmid: 0.75
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KanR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 4
      off_targets_sequenced_per_clone: 10
      total_sites_sequenced: 40
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder; ~4 off-targets in exons and ~ 4 most likely to cut off-targets (having fewest # of flaws relative to on-target) were sanger sequenced to confirm no off-target editing."
---