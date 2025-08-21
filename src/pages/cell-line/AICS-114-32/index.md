---
templateKey: cell-line
cell_line_id: 114
status: data complete
date: 2025-05-06T22:26:12.922Z
clone_number: 32
parental_line: 0
genetic_modifications:
  - gene: CDH1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: bi
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0114-032&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0114-032_CofA.pdf
donor_plasmid: https://www.addgene.org/193921/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-66
images_and_videos:
  images:
    - image: single_plane_image_cl32.jpg
      caption: "Single plane image near the top of hiPS cells expressing mEGFP-tagged E-cadherin. Cells were imaged live in 3D on a spinning-disk confocal microscope. Scale bar, 5 µm."
    - image: AICS-114_cl32_CDH1.jpg
      caption: "Viability and colony formation post-thaw. a-d: Morphological abnormalities (indicated by black arrows) may be visible post-thaw (5% of population). e-f: Morphology improves the first few passages post-thaw when seeding at 1M/10cm dish for three days and 500K cells/10cm dish for four days. Morphological abnormalities can be seen in 1-5% of colonies in three and four days of growth. Colony morphology will resolve with continued passage. Scale bars are as shown."
  videos:
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged
        E-cadherin. A single plane near the top of the cells was imaged every 3
        min on a spinning-disk confocal microscope. Movie plays at 900x real
        time. Scale bar, 5 µm.
      video: https://vimeo.com/1079877243/0fda6d9955?ts=0&share=copy
    - caption: Z-stack of a live hiPS cell colony expressing mEGFP-tagged E-cadherin.
        Cells were imaged in 3D on a spinning-disk confocal microscope. The
        movie starts at the bottom of the cells and ends at the top. Scale bar,
        5 µm.
      video: https://vimeo.com/1079877488/dc4a94e466?ts=0&share=copy
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged
        E-cadherin. A small mid-level stack of six z-slices was imaged every 3
        min on a spinning-disk confocal microscope. A maximum intensity
        projection of the six z-slices is shown. Movie plays at 1800x real time.
        Scale bar, 5 µm.
      video: https://vimeo.com/1079877818/1a3f780ef9?ts=0&share=copy
editing_design:
  ncbi_isoforms:
    - 
  crna: ACGACTAGGGGACTCGAGAG
  linker: LE
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: CDH1_gfp.png
          caption: "Top: CDH1 locus showing 4 CDH1 isoforms; Bottom: Zoom in on mEGFP insertion site at CDH1 C-terminal exon."
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-114_cl32_CDH1_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - editedGene: "CDH1-mEGFP"
      junction: "5'"
      expected_size: "1897"
      confirmed_sequence: "Yes"
    - editedGene: "CDH1-mEGFP"
      junction: "3'"
      expected_size: "2094"
      confirmed_sequence: "Yes"
    - editedGene: "CDH1-mEGFP"
      junction: "WT"
      expected_size: "981"
      confirmed_sequence: "Yes"
    - editedGene: "CDH1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: 3525"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion."
  ddpcr:
    - tag: CDH1-mEGFP
      clone: 32
      fp_ratio: 1.06
      plasmid: N/A
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. RPP30 is known 2n reference gene."
---