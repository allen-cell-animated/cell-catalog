---
templateKey: cell-line
cell_line_id: 36
status: released
clone_number: 28
parental_line: 0
genetic_modifications:
  - gene: AAVS1
    tag_location: NA
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0036-028&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0036-028_CofA.pdf
donor_plasmid: https://www.addgene.org/91565/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-36
images_and_videos:
  images:
    - image: single_plane_image_cl28.jpg
      caption: "Localization of mEGFP expressed from a safe harbor locus in hiPSC colony. mEGFP localizes to the cytoplasm and nucleus. Spaces between cells appear dark. Weaker intensity is observed in the nucleolus within the nucleus. The bright spots are dead cells on top of the colony. Some variation in intensity levels is seen between cells. Image is a maximum intensity projection of a 3D spinning disk confocal z-stack of a live hiPSC colony. "
    - image: Main_cell_line_morphology_cl28.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
editing_design:
  ncbi_isoforms:
    - NA
  cr_rna: GGGGCCACTAGGGACAGGAT
  linker: NA
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: AAVS1_gfp.png
          caption: "Top: mEGFP insertion site at AAVS1 locus in PPP1R12C intron; Bottom: Zoom in on mEGFP insertion site at AAVS1 locus"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AAVS1_cl28_final_karyo.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "AAVS1-mEGFP"
      junction: "5'"
      expected_size: "NA"
      confirmed_sequence: "NA"
    - edited_gene: "AAVS1-mEGFP"
      junction: "3'"
      expected_size: "1214"
      confirmed_sequence: "Yes"
    - edited_gene: "AAVS1-mEGFP"
      junction: "WT internal"
      expected_size: "1391"
      confirmed_sequence: "Yes"
    - edited_gene: "AAVS1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "NA"
      confirmed_sequence: "NA"
  junction_table_caption: "PCR amplified 3' junction was used to establish delivery via HDR at the intended genomic locus. Tiled junctions were not possible to amplify or sequence due to the large size of the delivered sequence (5KB). The precise sequence of the delivered sequence was not determined because the mEGFP tag sequence was not fused to an endogenous coding sequence."
  ddpcr:
    - tag: AAVS1-mEGFP
      clone: 6
      fp_ratio: 0.48
      plasmid: 0.003
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---