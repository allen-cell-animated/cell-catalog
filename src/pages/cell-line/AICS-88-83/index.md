---
templateKey: cell-line
cell_line_id: 88
status: data complete
date: 2025-05-06T22:17:55.522Z
clone_number: 83
parental_line: 0
genetic_modifications:
  - gene: PCNA
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0088-083&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0088-083_CofA.pdf
donor_plasmid: https://www.addgene.org/170818/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-56
images_and_videos:
  images:
    - image: single_plane_image_cl83.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged proliferating cell nuclear antigen (PCNA). Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        proliferating cell nuclear antigen (PCNA). A single, mid-level plane of
        the cells was imaged every 3 min on a spinning-disk confocal microscope.
        Movie plays at 900x real time. Scale bar, 5 µm.
      video: https://vimeo.com/1079876284/e0804684a6?ts=0&share=copy
    - caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged proliferating
        cell nuclear antigen (PCNA). Cells were imaged in 3D on a spinning-disk
        confocal microscope. Movie starts at the bottom of the cells and ends at
        the top. Scale bar, 5µm.
      video: https://vimeo.com/1079876437/05c06fe957?ts=0&share=copy
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        proliferating cell nuclear antigen (PCNA). A single, mid-level plane of
        the cells was imaged every 3 min on a spinning-disk confocal microscope.
        Movie plays at 1800x real time. Scale bar, 20 µm.
      video: https://vimeo.com/1079876541/cc9572adf0?ts=0&share=copy
editing_design:
  ncbi_isoforms:
    - 
  crna: GTTCGAGGCGCGCCTGGTCC
  linker: GEGQGQGQGPGRGYAYRS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: PCNA locus showing 2 PCNA isoforms; Bottom: Zoom in on mEGFP insertion site at PCNA N-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: _karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: ""
      junction: "5'"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "3'"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "WT"
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: PCNA-mEGFP
      clone: 83
      fp_ratio: 
      plasmid: 
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---