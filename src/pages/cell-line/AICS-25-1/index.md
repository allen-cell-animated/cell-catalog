---
templateKey: cell-line
cell_line_id: 25
status: released
clone_number: 1
parental_line: 0
genetic_modifications:
  - gene: ST6GAL1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0025-001&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0025-001_CofA.pdf
donor_plasmid: https://www.addgene.org/101786/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-14
images_and_videos:
  images:
    - image: single_plane_image_cl1.jpg
      caption: "Single image of a live hiPS cell colony expressing one copy (monoallelic) of mEGFP tagged sialyltransferase 1 (ST6GAL 1) imaged on a spinning-disk confocal microscope. Image is a maximum intensity projection of a 3D z-stack."
    - image: Final_AICS-25_c1_p35_d3_post-bank_thaw_normal_4x_crater.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/229765789
      caption: "Z-stack of live hiPS cells expressing one copy (monoallelic) of mEGFP tagged sialyltransferase 1 (ST6GAL 1) imaged on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/229765811
      caption: "Timelapse movie of live hiPS cells expressing one copy (monoallelic) of mEGFP tagged sialyltransferase 1 (ST6GAL 1). Images were taken in 3D every 5 minutes for 75 minutes on a spinning-disk confocal microscope. Images are maximum intensity projections with the ‘despeckle’ ImageJ filter applied. Movie sped up 900x over real time."
    - video: https://player.vimeo.com/video/229765812
      caption: "Timelapse movie of a live hiPS cell colony expressing one copy (monoallelic) of mEGFP tagged sialyltransferase 1 (ST6GAL 1). Images were taken in 3D every 3 minutes for 6 hours on a spinning-disk confocal microscope. Images are maximum intensity projections with the ‘despeckle’ ImageJ filter applied. Movie sped up 1800x over real time."
editing_design:
  ncbi_isoforms:
    - N
  crna: GTGCTTAGCAGTGAATGGTC
  linker: LQSTVPRARDPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: ST6GAL1 locus showing 3 ST6GAL1 isoforms; Bottom: Zoom in on mEGFP insertion site at ST6GAL1 C-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: ST6GAL1_cl1_full_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. WT: parental unedited line; NTC: no template control (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: ST6GAL1_cl.1.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "ST6GAL1-mEGFP"
      junction: "5'"
      expected_size: "1220"
      confirmed_sequence: "Yes"
    - editedGene: "ST6GAL1-mEGFP"
      junction: "3'"
      expected_size: "1633"
      confirmed_sequence: "Yes"
    - editedGene: "ST6GAL1-mEGFP"
      junction: "WT internal"
      expected_size: "592"
      confirmed_sequence: "Yes"
    - editedGene: "ST6GAL1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2822; Untagged:2062"
      confirmed_sequence: "Not sequenced"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: ST6GAL1-mEGFP
      clone: cl1
      fp_ratio: 0.52
      plasmid: 0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---