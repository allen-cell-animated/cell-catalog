---
templateKey: cell-line
cell_line_id: 83
status: released
clone_number: 5
parental_line: 0
genetic_modifications:
  - gene: DCP1A
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: bi
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0083-005&PgId=166
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0083-005_CofA.pdf
donor_plasmid: https://www.addgene.org/193922/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-69
images_and_videos:
  images:
    - image: single_plane_image_cl5.jpg
      caption: "hiPS cells expressing mEGFP-tagged mRNA-decapping enzyme 1A (DCP1A) control cells (left panel) and cells in the presence of 62.5 µM sodium arsenite for 60 minutes (right panel). Main panel images (scalebar, 20 um) show the change in distribution of puncta at the colony level with oxidative stress. Insets (scalebar, 5 um) show structural detail of puncta in center cells in each condition (different cells imaged at higher resolution). Images are maximum intensity projections spanning the whole cell volume (main panel) or 1.5 µm around the middle z-section of the cells (insets). Cells were imaged live in 3D on a spinning-disk confocal microscope."
    - image: AICS-83_cl5_DCP1A.jpg
      caption: " Viability and colony formation one day, three days and four days post-thaw. Scale bars are as shown."
  videos:
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: GGCTCTGGGATTCAAGATGG
  linker: SRA
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: DCP1A_GFP.png
          caption: "Top: DCP1A locus showing 3 DCP1A isoforms; Bottom: Zoom in on mEGFP insertion site at DCP1A N-Terminus."
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-83_cl5_DCP1A_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "DCP1A-mEGFP"
      junction: "5'"
      expected_size: "2093"
      confirmed_sequence: "Yes"
    - editedGene: "DCP1A-mEGFP"
      junction: "3'"
      expected_size: "1893"
      confirmed_sequence: "Yes"
    - editedGene: "DCP1A-mEGFP"
      junction: "WT"
      expected_size: "1613"
      confirmed_sequence: "Yes"
    - editedGene: "DCP1A-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:3074 bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion."
  ddpcr:
    - tag: DCP1A-mEGFP
      clone: 5
      fp_ratio: 1.06
      plasmid: 0.0008
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene. RPP30 is known 2n reference gene."
---