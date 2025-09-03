---
templateKey: cell-line
cell_line_id: 60
status: released
clone_number: 27
parental_line: 0
genetic_modifications:
  - gene: MYL2
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0060-027&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0060-027_CofA.pdf
donor_plasmid: https://www.addgene.org/114414/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-32
images_and_videos:
  images:
    - image: single_plane_image_cl27.jpg
      caption: "Single, mid-level plane of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged MLC-2v protein. Representative high-expressing, relatively mature cell is shown surrounded by more immature cells with lower expression levels (the culture contains cells of varying levels of maturity). Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged in 3D on a spinning disk confocal microscope 47 days later (59 days total after the onset of differentiation). Scale bars, 10 μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/307167648
      caption: "Z-stack of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged MLC-2v. Twelve days after the onset of differentiation, cells were plated on PEI- and laminin-coated glass and imaged in 3D on a spinning-disk confocal microscope 28 days later (40 days total after the onset of differentiation). Cells were treated with 20 mM of the myosin inhibitor 2,3-butanedione monoxime (BDM) to prevent beating during image acquisition. Movie starts at the bottom of the cells and ends at the top. Inset is a 3x enlargement of the boxed region to show detail of MLC-2v in myofibrils. Movie starts at the bottom of the cells and ends at the top. Scale bar, 20 µm."
    - video: https://player.vimeo.com/video/307167766
      caption: "Time-lapse movie of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged MLC-2v protein. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged on a spinning-disk confocal microscope 28 days later (40 days total after the onset of differentiation). A single plane of cells was imaged continuously with a 100 ms exposure time. Inset is a 3x enlargement of the boxed region to show detail of MLC-2v in myofibrils. Movie plays in real time.Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: CCTAGTCCTTCTCTTCTCCG
  linker: SGSGSPGSGSG
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: MYL2_gfp.png
          caption: "Top: MYL2 locus; Bottom: Zoom in on mEGFP insertion site at MYL2 C-terminus; For more information on tagging transcriptionally silent genes in hiPSCs see: Roberts et al. 2018. Scarless gene tagging of transcriptionally silent genes in hiPSCs to visualize cardiomyocyte sarcomeres in live cells. bioRxiv doi:10.1101/342881"
category_labels: 
 - Cardiac Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: ../GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: cl27_67_68_70_all_junctions_crop.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: MYL2_cl_27_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "MYL2-mEGFP"
      junction: "5'"
      expected_size: "1728"
      confirmed_sequence: "pass"
    - editedGene: "MYL2-mEGFP"
      junction: "3'"
      expected_size: "1763"
      confirmed_sequence: "pass"
    - editedGene: "MYL2-mEGFP"
      junction: "WT internal"
      expected_size: "733"
      confirmed_sequence: "pass"
    - editedGene: "MYL2-mEGFP"
      junction: "Full junctional allele"
      expected_size: "3066"
      confirmed_sequence: "pass"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: MYL2-mEGFP
      clone: 27
      fp_ratio: 0.54
      plasmid: 0.003
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---