---
templateKey: cell-line
cell_line_id: 82
status: data complete
date: 2025-05-06T22:23:18.691Z
clone_number: 1
parental_line: 0
genetic_modifications:
  - gene: G3BP1
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0082-001&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0082-001_CofA.pdf
donor_plasmid: 
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-63
images_and_videos:
  images:
    - image: single_plane_image_cl1.jpg
      caption: "hiPS cells expressing mEGFP-tagged Ras GTPase-activating protein-binding protein 1 (G3BP-1) in control cells (left panel; single mid-level plane) and in cells treated with 62.5 μM sodium arsenite for 60 minutes (right panel; maximum intensity z-projection). Cells were imaged live in 3D on a spinning-disk confocal microscope. Scale bar, 5 μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged Ras
        GTPase-activating protein-binding protein 1 (G3BP-1) under oxidative
        stress. Cells were imaged every 1 minute on a spinning-disk confocal
        microscope starting four minutes after the introduction of 62.5 µM
        sodium arsenite. A single, mid-level plane is shown at low contrast
        (left) and high contrast (right). Movie plays at 2700x real time. Scale
        bar, 5 µm.
      video: https://player.vimeo.com/video/1079876982
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged Ras
        GTPase-activating protein-binding protein 1 (G3BP-1). A single,
        mid-level plane of the cells was imaged every 3 min on a spinning-disk
        confocal microscope. Movie plays at 1800x real time. Scale bar, 20 µm.
      video: https://player.vimeo.com/video/1079877106
    - caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged Ras
        GTPase-activating protein-binding protein 1 (G3BP-1) in control cells
        (left panel) and cells in the presence of 62.5 µM sodium arsenite for 60
        minutes (right panel). Cells were imaged in 3D on a spinning-disk
        confocal microscope. Movie starts at the bottom of the cells and ends at
        the top. Scale bar, 5µm.
      video: https://player.vimeo.com/video/1079877062
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged Ras
        GTPase-activating protein-binding protein 1 (G3BP-1). A single,
        mid-level plane of the cells was imaged every 3 min on a spinning-disk
        confocal microscope. Movie plays at 900x real time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079876934
editing_design:
  ncbi_isoforms:
    - 
  cr_rna: TTGCTTTGGTCAATTCAACC
  linker: SGLRS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: G3BP1 locus showing 2 G3BP1 isoforms; Bottom: Zoom in on mEGFP insertion site at G3BP1 N-terminal exon."
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
    - editedGene: "G3BP1-mEGFP"
      junction: "5'"
      expected_size: ""
      confirmed_sequence: "Yes"
    - editedGene: "G3BP1-mEGFP"
      junction: "3'"
      expected_size: ""
      confirmed_sequence: "Yes"
    - editedGene: "G3BP1-mEGFP"
      junction: "WT"
      expected_size: "1408"
      confirmed_sequence: "Yes"
    - editedGene: "G3BP1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: G3BP1-mEGFP
      clone: 1
      fp_ratio: 0.54
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---