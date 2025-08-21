---
templateKey: cell-line
cell_line_id: 46
status: released
clone_number: 51
parental_line: 0
genetic_modifications:
  - gene: ATP2A2
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0046-051&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0046-051_CofA.pdf
donor_plasmid: https://www.addgene.org/114405/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-30
images_and_videos:
  images:
    - image: single_plane_image_cl51.jpg
      caption: "Left: Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged SERCA2 protein. Cells were imaged four days after plating on Matrigel-coated glass as described in methods at www.allencell.org. Scale bar, 5 µm. Right: Single, near-bottom plane of hiPSC-derived cardiomyocytes expressing mEGFP-tagged SERCA2 protein.Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged 29 days later (41 days total after the onset of differentiation). Inset shows detail of SERCA2 in longitudinal sarcoplasmic reticulum (SR). Scale bars, 10 µm. Cells were imaged in 3D on a spinning-disk confocal microscope. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/287833146
      caption: "Z-stack of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged SERCA2 protein. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged in 3D on a spinning disk confocal microscope 29 days later (41 days total after the onset of differentiation). Cells were treated with 15 mM of the myosin inhibitor 2,3-Butanedione monoxime (BDM) to prevent beating during image acquisition. Movie starts at the bottom of the cells and ends at the top. Inset shows detail of SERCA2 in longitudinal sarcoplasmic reticulum (SR). Scale bars, 10 µm."
    - video: https://player.vimeo.com/video/287833134
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged SERCA2 protein. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/287832498
      caption: "Time-lapse movie of live beating hiPSC-derived cardiomyocytes expressing mEGFP-tagged SERCA2 protein. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged on a spinning disk confocal microscope 8 days later (20 days total after the onset of differentiation). A single plane of cells was imaged continuously with a 100 ms exposure time. Inset shows detail of SERCA2 in longitudinal sarcoplasmic reticulum (SR). Scale bars, 10 µm. Movie plays in real time."
editing_design:
  ncbi_isoforms:
    - n
  crna: TGCGCGTTCTCCATGGCTTC
  linker: GSA
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: ATP2A2 locus showing 2 ATP2A2 isoforms; Bottom: Zoom in on mEGFP insertion site at ATP2A2 N-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: AICS-46_ATP2A2-mEGFP_Full_Allele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-46_c51_ATP2A2_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "ATP2A2-mEGFP"
      junction: "5'"
      expected_size: "2009"
      confirmed_sequence: "Yes"
    - editedGene: "ATP2A2-mEGFP"
      junction: "3'"
      expected_size: "1687"
      confirmed_sequence: "Yes"
    - editedGene: "ATP2A2-mEGFP"
      junction: "WT internal"
      expected_size: "688"
      confirmed_sequence: "Yes"
    - editedGene: "ATP2A2-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: 3079; Untagged: 2356"
      confirmed_sequence: "Not sequenced"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: ATP2A2-mEGFP
      clone: 51
      fp_ratio: 0.538
      plasmid: 0.001
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---