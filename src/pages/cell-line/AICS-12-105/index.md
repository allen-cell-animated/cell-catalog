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
  ncbi_isoforms:
    - NM_006082
  cr_rna: GATGCACTCACGCTGCGGGA
  linker: GGSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TUBA1B locus; Bottom: Zoom in on mEGFP insertion site at TUBA1B N-terminus"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: TUBA1B_full_allele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder). *clone available from Coriell"
    - title: "Karyotype Analysis"
      images:
        - image: StemCellCharacterization_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 20 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "TUBA1B-mEGFP"
      junction: "5'"
      expected_size: "1227"
      confirmed_sequence: "Yes"
    - editedGene: "TUBA1B-mEGFP"
      junction: "3'"
      expected_size: "1191"
      confirmed_sequence: "Yes"
    - editedGene: "TUBA1B-mEGFP"
      junction: "WT internal"
      expected_size: "730"
      confirmed_sequence: "Yes"
    - editedGene: "TUBA1B-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:3011; Untagged:2279"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified and Sanger sequenced 5’, 3’, WT, and full allele junctions to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: TUBA1B-mEGFP
      clone: 105
      fp_ratio: 0.51
      plasmid: 0.01
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 5
      off_targets_sequenced_per_clone: 9
      total_sites_sequenced: 45
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder; ~4 off-targets in exons and ~ 4 most likely to cut off-targets (having fewest # of flaws relative to on-target) were sanger sequenced to confirm no off-target editing."
---