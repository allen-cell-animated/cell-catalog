---
templateKey: cell-line
cell_line_id: 33
status: released
clone_number: 115
parental_line: 0
genetic_modifications:
  - gene: SLC25A17
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0033-115&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0033-115_CofA.pdf
donor_plasmid: https://www.addgene.org/101784/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-19
images_and_videos:
  images:
    - image: single_plane_image_cl115.jpg
      caption: "mEGFP-tagged PMP34 protein localization in an hiPSC colony. Image is a single, central z-slice from a 3D spinning disk confocal z-stack of a live hiPSC colony. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/253349954
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged peroxisomal membrane protein PMP34 imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/253349961
      caption: "Timelapse movie of live hiPS cell colony expressing mEGFP tagged peroxisomal membrane protein PMP34. Cells were imaged on a spinning-disk confocal microscope. A single, mid-level plane was acquired every second. Movie sped up 10x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: GCATCTTCGGAATTTTTCAT
  linker: RDPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SLC25A17 locus showing 3 SLC25A17 isoforms; Bottom: Zoom in on mEGFP insertion site at SLC25A17C-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: SLC25A17_cl.115.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "SLC25A17-mEGFP"
      junction: "5'"
      expected_size: "1278"
      confirmed_sequence: "Pass"
    - editedGene: "SLC25A17-mEGFP"
      junction: "3'"
      expected_size: "1726"
      confirmed_sequence: "Pass"
    - editedGene: "SLC25A17-mEGFP"
      junction: "WT internal"
      expected_size: "960"
      confirmed_sequence: "Pass"
    - editedGene: "SLC25A17-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:WIP; Untagged:WIP"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SLC25A17-mEGFP
      clone: 115
      fp_ratio: 0.52
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---