import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: " ˙ ̟🫐 Rae's Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bricolage Grotesque",
        // body: "Source Sans Pro", << original
        body: "Bricolage Grotesque",
        //body: "Roboto Serif",
        code: "IBM Plex Mono", //Bricolage Grotesque
      },
      colors: {
        lightMode: {
          light: "#FAF9FF", //background color
          lightgray: "#E7E6EB", //details & code fix color
          gray: "#7c7f93",
          darkgray: "#4c4f69", //font color
          dark: "#8d5fc8",//header color
          secondary: "#6e6fc1", //links & folders color
          tertiary: "#df8e1d",//highlight cursor
          highlight: "#E7E6EB", //tags highlight color
          textHighlight: "#babbf1", //higlight text color
        },
        darkMode: {
          light: "#1e1e2e", //background color
          lightgray: "#45475a", //details & code fix color
          gray: "#babbf1",
          darkgray: "#e6e9f5", //font/simbols color
          dark: "#cba6f7", //header color
          secondary: "#b7bdf8", //links & folders color
          tertiary: "#bca87c", //highlight cursor
          highlight: "#313244",  //tags highlight color
          textHighlight: "#3e487f", //higlight text color
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      //Plugin.StickyNotes(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config