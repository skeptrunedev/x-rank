import { defineXRankConfig } from "./src/xrank-config.ts"

export default defineXRankConfig({
  title: "Mintlify Affiliates",
  roster: [
    { handle: "acortezf" },
    { handle: "branmcconnell" },
    { handle: "cdxker" },
    { handle: "coleywoleyyy" },
    { handle: "danielwolkowitz" },
    { handle: "densumesh" },
    { handle: "dex_ghana" },
    { handle: "h2shami" },
    { handle: "hahnbeelee" },
    { handle: "handotdev" },
    { handle: "harkirat17" },
    { handle: "helicone_ai" },
    { handle: "jadonyara" },
    { handle: "jmsbaduor" },
    { handle: "jnrkay_x" },
    { handle: "justinstorre" },
    { handle: "kaishan_ding" },
    { handle: "kylefinken" },
    { handle: "laurenfrailey1" },
    { handle: "leylndd" },
    { handle: "mintlify" },
    { handle: "mytracksuite" },
    { handle: "nehahalebeed" },
    { handle: "pqoqubbw" },
    { handle: "pronounsuponly" },
    { handle: "reed_barnes" },
    { handle: "skeptrune" },
    { handle: "toolwind" },
    { handle: "trieveai" },
    { handle: "wacheeeee" }
  ],
  schedule: {
    every: "4 hours",
    command:
      "npm run refresh -- --skip-if-fresh && npm run export && npm run build && npx wrangler pages deploy dist --project-name x-rank --branch main --commit-dirty=true",
    label: "com.skeptrune.xrank"
  }
})
