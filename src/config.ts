export const SITE = {
  website: "https://annjose.com/",
  author: "Ann Catherine Jose",
  profile: "https://annjose.com/about/",
  desc: "Practical notes on building software, personal growth, and how technology works, with recent explorations in agentic AI.",
  title: "Ann Catherine Jose",
  ogImage: "og-default-light.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Los_Angeles",
} as const;
