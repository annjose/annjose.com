import satori from "satori";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  const taglines = [
    "Software builder. Lifelong learner.",
    "Tinkering with AI under the hood.",
  ];
  const fontFamily = "Lato";
  const portrait = readFileSync(
    join(process.cwd(), "src/assets/images/ann-color-sketch-square.png")
  ).toString("base64");

  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
          fontFamily,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                border: "2px solid #eadceb",
                background: "#fefbfb",
                borderRadius: "28px",
                display: "flex",
                justifyContent: "center",
                margin: "56px",
                width: "1088px",
                height: "518px",
              },
              children: {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "88%",
                    height: "100%",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: "306px",
                          height: "306px",
                          border: "6px solid #a21caf",
                          borderRadius: "9999px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        },
                        children: {
                          type: "img",
                          props: {
                            src: `data:image/png;base64,${portrait}`,
                            style: {
                              width: "276px",
                              height: "276px",
                              borderRadius: "9999px",
                              objectFit: "cover",
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          height: "100%",
                          width: "620px",
                          overflow: "hidden",
                        },
                        children: [
                          {
                            type: "p",
                            props: {
                              style: {
                                margin: 0,
                                color: "#18141d",
                                fontSize: 60,
                                fontWeight: 700,
                              },
                              children: SITE.title,
                            },
                          },
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                marginTop: "32px",
                                color: "#a21caf",
                                fontSize: 36,
                                fontWeight: 700,
                              },
                              children: taglines.map(tagline => ({
                                type: "p",
                                props: {
                                  style: { margin: 0 },
                                  children: tagline,
                                },
                              })),
                            },
                          },
                          {
                            type: "p",
                            props: {
                              style: {
                                margin: "72px 0 0",
                                color: "#625967",
                                fontSize: 28,
                                fontWeight: 700,
                              },
                              children: new URL(SITE.website).hostname,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        SITE.title + taglines.join("") + SITE.website,
        [
          {
            name: fontFamily,
            font: "Lato",
            weight: 400,
            style: "normal",
          },
          {
            name: fontFamily,
            font: "Lato",
            weight: 700,
            style: "bold",
          },
        ]
      ),
    }
  );
};
