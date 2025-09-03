---
templateKey: cell-line
cell_line_id: 30
status: released
clone_number: 22
parental_line: 0
genetic_modifications:
  - gene: MAP1LC3B
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0030-022&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0030-022_CofA.pdf
donor_plasmid: https://www.addgene.org/101783/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-18
images_and_videos:
  images:
    - image: single_plane_image_cl22.jpg
      caption: "mEGFP-tagged autophagy-related protein LC3 B localization in an hiPSC colony. Image is a single slice of a 3Dspinning disk confocal z-stack of a live hiPSC colony in the bottom half of the cells. Both untreated cells (left panel) andcells treated for 24 hours with 800nM leupeptin to visualize autophagosomes (right panel) are shown."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/253348710
      caption: "Z-stacks of live hiPS cell colony expressing mEGFP-tagged autophagy-related protein LC3 B in the absence (stack on the left) and presence of 800 nM leupeptin (stack on the right). Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/253348721
      caption: "Timelapse movie of live hiPS cell colony expressing mEGFP-tagged autophagy-related protein LC3 B in presence of 800 nM leupeptin. Cells were imaged on a spinning-disk confocal microscope every 10 seconds. Image is a maximum intensity projection of 4 z-slices acquired through the middle of the cells. Movie sped up 100x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: TGGTGCAGGGATCTGGGCGG
  linker: SGLRS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: MAP1LC3B locus; Bottom: Zoom in on mEGFP insertion site at MAP1LC3B N-terminal exon"
category_labels: 
 - Stress
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: GenomicCharacterization_tagged_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: MAP1LC3B_cl.22.JPG
          caption: "After cells banks were created, one vial was thawed and 20 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "MAP1LC3B-mEGFP"
      junction: "5'"
      expected_size: "1654"
      confirmed_sequence: "Yes"
    - editedGene: "MAP1LC3B-mEGFP"
      junction: "3'"
      expected_size: "2150"
      confirmed_sequence: "Yes"
    - editedGene: "MAP1LC3B-mEGFP"
      junction: "WT internal"
      expected_size: "1013"
      confirmed_sequence: "Yes"
    - editedGene: "MAP1LC3B-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:3396; Untagged:2686"
      confirmed_sequence: "Not sequenced"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: MAP1LC3B-mEGFP
      clone: 22
      fp_ratio: 0.478
      plasmid: 0.003
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---