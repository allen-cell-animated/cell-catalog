---
templateKey: cell-line
cell_line_id: 53
status: released
clone_number: 16
parental_line: 0
genetic_modifications:
  - gene: GJA1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0053-016&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0053-016_CofA.pdf
donor_plasmid: https://www.addgene.org/109120/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-22
images_and_videos:
  images:
    - image: single_plane_image_cl16.jpg
      caption: "Single-plane of live hiPS cell colony expressing mEGFP-tagged GJA1 near the top of cells. Left: Contrast optimized to view connexin at apical cell-cell junctions. Right: The same image with contrast enhanced to show intracellular localization of connexin. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265782337
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/265782351
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope every 3.25 min. Image is a maximum intensity projection of 20 z-sections (5.51 µm) acquired at the top of the cells. Contrast is enhanced to show localization of connexin-43 to internal structures Frames were histogram matched to adjust for photobleaching. Movie plays at 975x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/265782365
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. Image is a maximum intensity projection through the entire cell volume. Contrast is enhanced to show localization of connexin-43 to internal structures. Movie plays at 1800x real time. Scale bar, 10 µm."
editing_design:
  ncbi_isoforms:
    - N
  crna: CAGACCTCGCCCAGACGACC
  linker: DPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: GJA1 locus; Bottom: Zoom in on mEGFP insertion site at GJA1 C-terminus"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: GJA1_cl.16.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "GJA1-mEGFP"
      junction: "5'"
      expected_size: "1500"
      confirmed_sequence: "Pass"
    - editedGene: "GJA1-mEGFP"
      junction: "3'"
      expected_size: "1500"
      confirmed_sequence: "Pass"
    - editedGene: "GJA1-mEGFP"
      junction: "WT internal"
      expected_size: "400"
      confirmed_sequence: "Pass(pseudogene present*)"
    - editedGene: "GJA1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2800; Untagged:2100"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid. *Presence of GJA1 pseudogene resulted in mixed peaks for the WT junction; these mixed peaks correspond to mismtaches b/w WT GJA1 and the GJA1 pseudogene and not mis-editing or off-target cutting"
  ddpcr:
    - tag: GJA1-mEGFP
      clone: cl16
      fp_ratio: 0.49
      plasmid: 0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---