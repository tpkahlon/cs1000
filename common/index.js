const URL = `http://web.archive.org/web/20210210143025/https://laconicml.com/computer-science-curriculum-youtube-videos/`;
// const URL = `https://laconicml.com/computer-science-curriculum-youtube-videos/?googfc&google_norender=true`;

const DATA = [
  {
    id: 1,
    name: "freeCodeCamp",
    logo: "https://i1.sndcdn.com/avatars-000326709935-8bqnrw-t500x500.jpg",
    url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
  },
  {
    id: 2,
    name: "Programming Knowledge",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnixvpH4R0YLAM_cyn8jkULeMbjUkGIKObZfuvwY=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCs6nmQViDpUw0nuIx9c_WvA",
  },
  {
    id: 3,
    name: "Kimberly Brehm",
    logo:
      "https://pbs.twimg.com/profile_images/715722871805378560/ByeMuQxp_400x400.jpg",
    url: "https://www.youtube.com/c/KimberlyBrehm",
  },
  {
    id: 4,
    name: "Derek Banas",
    logo: "https://www.courseduck.com/programming/php/images/derek_banas.jpg",
    url: "https://www.youtube.com/c/derekbanas",
  },
  {
    id: 5,
    name: "Carnegie Mellon",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwni6RsM0M2RvisPUE0fBaKpGDqYLo5SCTbd07M1c=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/cmu18447",
  },
  {
    id: 6,
    name: "Traversy Media",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA",
  },
  {
    id: 7,
    name: "Khan Academy",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngdD2AmzCCju6CJ7YxNKlqRSobgJvIgj1CWOinR=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/khanacademy",
  },
  {
    id: 8,
    name: "Professor Leonard",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngRSEVE3vP0UlVRGYcUcR7VjzlSkzYrRl2I-q4h=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/ProfessorLeonard",
  },
  {
    id: 9,
    name: "Rob Edwards",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnglsp16jG3L76LM8RRpRwhAOwV0QNWqzN59_9nj=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/user/RobEdwardsSDSU",
  },
  {
    id: 10,
    name: "Neso Academy",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnhdTxmFSM6L7yT9JUSVgo0SfOarfvzNGOm4-tD-=s900-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/nesoacademy",
  },
  {
    id: 11,
    name: "Sahil Jain",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnjjzWkrYjd95um6rVk1NdEQ0TiXzIaejauGtHojAA=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCqKVV_NjGDkNDVAE3Q78rWg",
  },
  {
    id: 12,
    name: "Edureka",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s900-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCkw4JCwteGrDHIsyIIKo4tQ",
  },
  {
    id: 13,
    name: "Harsha G.",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwniiu1UtLxsSw8bL_NFF00zomVeLEyZCd4yqWidn_es=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCsDNz3Xb_2EEc9ppMMmiDRA",
  },
  {
    id: 14,
    name: "Tutorials Point",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngZdUg7Vl6HYH0WyxcPuL_aPDM3N8SWEKPNZVwz=s176-c-k-c0x00ffffff-no-rj-mo",
    url: "https://www.youtube.com/channel/UCVLbzhxVTiTLiVKeGV7WEBg",
  },
  {
    id: 15,
    name: "Harvard",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnjm1z7VHY8eqbD4SMOuHfJYreKBPAXS6Aow-4Fy-g=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/harvard",
  },
  {
    id: 16,
    name: "Corey Schafer",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngomgNvn2XgfFWEVlxCl_tUVEOhmUTUTlesdnuD=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/Coreyms",
  },
  {
    id: 17,
    name: "Stanford",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngt3ZC46Eau0L9NJz_9ChoDwydCmuS-42g_c6VA=s176-c-k-c0x00ffffff-no-rj-mo",
    url: "https://www.youtube.com/channel/UCBa5G_ESCn8Yd4vw5U-gIcg",
  },
  {
    id: 18,
    name: "Sentdex",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwniWY0KJZhfkhAau-e_5OEeWxXabgPObQVGTL6adyw=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/sentdex",
  },
  {
    id: 19,
    name: "MIT",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnizHmnc1jT1675Eik8WT7yrU5c9qMDjJvd0cyUUTX0=s176-c-k-c0x00ffffff-no-rj-mo",
    url: "https://www.youtube.com/channel/UC_7WrbZTCODu1o_kfUMq88g",
  },
  {
    id: 20,
    name: "Alexander Amini",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwni5bnt2me0FKmWGJNB69uIuj-FOEOZAE4yZMsUf=s176-c-k-c0x00ffffff-no-rj-mo",
    url: "https://www.youtube.com/user/Zan560",
  },
  {
    id: 21,
    name: "Code with Chris",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngNgdpAIz6TsTEJGGs5JzGSbYlS58SQ1W8kzWNqbQ=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UC2D6eRvCeMtcF5OGHf1-trw",
  },
  {
    id: 22,
    name: "MIT OpenCourseWare",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwniz0cQuf5DkaTMFcOleJYHcLL2eepERIVkj7wX5=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/mitocw",
  },
  {
    id: 23,
    name: "TensorFlow",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwnie3IpnRBxxhUneo-JiygM-n9JxloBPkR9xVydDeQ=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UC0rqucBdTuFTjJiefW5t-IQ",
  },
  {
    id: 24,
    name: "Lex Fridman",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwng7pV_GT35PBzaa2hIhR_C9mh144SRUDMI-KWb2JU4=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/channel/UCSHZKyawb77ixDdsGog4iWA",
  },
  {
    id: 25,
    name: "Rebel Coder",
    logo:
      "https://yt3.ggpht.com/ytc/AAUvwngec_ZjxmvocfW_ZuIx0vDE-6qQOspYAiyQQonLzg=s176-c-k-c0x00ffffff-no-rj",
    url: "https://www.youtube.com/c/rebelCoderBio",
  },
];

export { URL, DATA };
