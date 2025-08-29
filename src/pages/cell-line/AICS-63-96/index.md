---
templateKey: cell-line
cell_line_id: 63
status: data complete
date: 2025-05-06T20:47:49.612Z
clone_number: 96
parental_line: 0
genetic_modifications:
  - gene: DMD
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0063-096&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0063-096_CofA.pdf
donor_plasmid: https://www.addgene.org/159744/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-44
images_and_videos:
  images:
    - image: single_plane_image_cl96.jpg
      caption: "Single, mid-level planes of hiPSC-derived cardiomyocytes (left) and hiPSC-derived skeletal muscle myofibers (right) expressing mEGFP-tagged dystrophin imaged live in 3D on a spinning disk microscope. Left: Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged 18 days later (30 days total after the onset of differentiation). Right: 25 days after the onset of differentiation, cells were plated on Matrigel (diluted 1:60) coated glass. Cell fusion was induced one day later, and muscle fibers were imaged 7 days after fusion induction (imaging was performed 33 days total after the onset of differentiation). Skeletal muscle sample was courtesy of Shawn Luttrell and David Mack (University of Washington). Brightness and contrast display settings are optimized for each panel; display settings are not the same between cell types. Scale bar, 20μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Z-stack of live hiPSC-derived skeletal muscle myofibers expressing
        mEGFP-tagged dystrophin imaged in 3D on a spinning-disk microscope.
        Twenty-five days after the onset of differentiation, cells were plated
        on Matrigel (diluted 1:60) coated glass. Cell fusion was induced one day
        later, and muscle fibers were imaged 7 days after fusion induction
        (imaging was performed 33 days total after the onset of
        differentiation). Skeletal muscle sample was courtesy of Shawn Luttrell
        and David Mack (University of Washington). The movie starts at the
        bottom of the cells and ends at the top. Scale bar, 10 µm.
      video: https://vimeo.com/1079587182/3cc7dddf19?ts=0&share=copy
editing_design:
  ncbi_isoforms:
    - n
  crna: AGACTTCCTACATTGTGTCC
  linker: LEADYKDDDDKRSEF
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: DMD locus showing DMD isoforms; Bottom: Zoom in on mEGFP insertion site at DMD C-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-63_cl96_DMD_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "DMD-mEGFP"
      junction: "5'"
      expected_size: "2046"
      confirmed_sequence: "Yes"
    - edited_gene: "DMD-mEGFP"
      junction: "3'"
      expected_size: "1419"
      confirmed_sequence: "Yes"
    - edited_gene: "DMD-mEGFP"
      junction: "WT internal"
      expected_size: "None"
      confirmed_sequence: "N/A"
    - edited_gene: "DMD-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: N/A; Untagged: N/A"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: DMD-mEGFP
      clone: 96
      fp_ratio: 0.422
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---