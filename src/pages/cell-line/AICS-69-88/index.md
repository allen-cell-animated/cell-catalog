---
templateKey: cell-line
cell_line_id: 69
status: released
clone_number: 88
parental_line: 0
genetic_modifications:
  - gene: NUP153
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0069-088&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0069-088_CofA.pdf
donor_plasmid: https://www.addgene.org/114407/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-31
images_and_videos:
  images:
    - image: single_plane_image_cl88.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged Nucleoporin Nup153 protein. Cells were imaged in 3D on a spinning-disk confocal microscope. Inset depicts the bottom z-section of the boxed cell to show localization of Nucleoporin Nup153 protein across the surface of the nuclear envelope. Scale bar, 5 µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/287833994
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged Nucleoporin Nup153 protein. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/287833977
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged Nucleoporin Nup153 protein. Cells were imaged in a 3D volume spanning ~1.5 µm through the middle of the cells on a spinning-disk confocal microscope every 3 min. A single mid-level z-section is shown. Movie plays at 1800x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/287833984
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged Nucleoporin Nup153 protein. Cells were imaged in a 3D volume spanning ~1.5 µm through the middle of the cells on a spinning-disk confocal microscope every 3 min. Image is a maximum intensity projection through the imaged volume. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: GCCATGGCCTCGGGAGCCGG
  linker: YSDLE
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: NUP153 locus showing 3 NUP153 isoforms; Bottom: Zoom in on mEGFP insertion site at NUP153 N-terminal exon"
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: AICS-69_NUP153_FullAllele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-69_c88_NUP153_Karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "NUP153-mEGFP"
      junction: "5'"
      expected_size: "1640"
      confirmed_sequence: "Yes"
    - editedGene: "NUP153-mEGFP"
      junction: "3'"
      expected_size: "1587"
      confirmed_sequence: "Yes"
    - editedGene: "NUP153-mEGFP"
      junction: "WT internal"
      expected_size: "1233"
      confirmed_sequence: "Yes"
    - editedGene: "NUP153-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: 2967; Untagged: 2253"
      confirmed_sequence: "Not sequenced"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: NUP153-mEGFP
      clone: 88
      fp_ratio: 0.51
      plasmid: 0.003
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
---