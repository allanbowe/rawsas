# LinkedIn Post Writing Guide

Guidance for drafting LinkedIn posts promoting articles on rawsas.com.

## Audience

Our readers are typically:

- **SAS developers and administrators** - hands-on, technically competent, often
  working in regulated industries (Banking, Insurance, Pharma).
- **Data platform managers and architects** running SAS® estates (Viya, 9.4, or
  legacy) who care about modernisation, open source tooling, and cost.
- **SAS historians / community members** - especially for the SAS Communications
  transcription series and other retro content.
- Occasionally **hiring managers / C-level** - keep business value visible
  alongside technical detail.

Implications:

- Assume competence - no need to explain what SAS, a PROC, or a data step is.
- Professional but personable tone. This is a personal blog, not a product
  page - first person is fine, enthusiasm is fine, hype is not.
- Avoid buzzword stuffing and exclamation-mark overload.

## Positioning and attribution

- rawsas.com is a personal blog. Say "I've written" / "new post on the blog",
  never "our series" for content we don't own.
- The SAS Communications newsletter content is © SAS Institute Inc. - always
  credit SAS Institute as the original publisher, describe the posts as
  transcriptions shared for historical interest, and never imply ownership or
  endorsement.
- ® symbol on first mention of SAS® is fine; don't repeat it every time.

## Structure

1. **Hook** - first 1-2 lines must stand alone; LinkedIn truncates the rest
   behind "...see more". Lead with the most surprising/interesting detail, not
   context-setting.
2. **Body** - short paragraphs describing what the article covers; bulleted
   highlights work well for list-heavy articles.
3. **Value** - one line on why the reader should care (a fix for a common
   error, a historical gem, a practical how-to).
4. **CTA** - single call to action. LinkedIn deprioritises posts with external
   links, so put the article URL in the first comment and point to it
   ("link in the comments 👇").

## Formatting capabilities and tricks

LinkedIn posts are plain text - there is no rich-text editor, so **no markdown**.
Bold, italics and other styling you see in posts are faked with Unicode:

- **Faux bold / italic / monospace via Unicode Mathematical Alphanumeric
  Symbols** - e.g. `𝐛𝐨𝐥𝐝` (U+1D401+), `𝑖𝑡𝑎𝑙𝑖𝑐` (U+1D456+),
  `𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎` (U+1D670+). Tools like YayText / LingoJam generate these.
  **Use with extreme restraint:** they break screen readers and accessibility
  tools, are not searchable, and can render as boxes on some devices. Our
  default: avoid them; use CAPS sparingly for emphasis instead. If a hook or
  single key term really needs to pop, one short faux-bold phrase is the
  acceptable ceiling.
- **Bullets** - no native lists; use literal characters: `-`, `•`, `✓`, `→`,
  numbered `1.` etc. Each on its own line.
- **Whitespace** - blank lines survive and are the primary layout tool; use
  them aggressively (1-3 sentence paragraphs). LinkedIn collapses multiple
  blank lines beyond one, so a single blank line is the unit.
- **Emoji** - work natively; use sparingly and professionally (👇 for the CTA,
  occasional ✅ or 🕰️ for retro posts). Avoid emoji walls.
- **Links** - URLs in the body get auto-linked but LinkedIn deprioritises
  posts containing external links; put the URL in the first comment.
- **Truncation** - only the first ~3 lines (~210 characters on mobile) show
  before "...see more". The hook must earn the click; never waste the first
  line on a greeting.
- **Special characters** - Unicode symbols like → ✅ work fine; avoid exotic
  characters that render as tofu (□).
- **No nested structure** - no headings, tables, quotes or code blocks.

## Formatting rules

- **Hashtags are written as `#tag`** (e.g. `#sas`, `#sasusers`, `#sugi`,
  `#datagovernance`, `#techhistory`). Never write `hashtag#tag` - that is an
  artefact of copy-pasting from LinkedIn's editor UI and must be stripped
  before posting.
- 3-5 hashtags, all lowercase, placed at the end on their own lines.
- Use regular dashes (`-`), not em-dashes (`—`).
- Short paragraphs (1-3 sentences) with blank lines between them.
- No markdown syntax (no `**bold**`, no `[links](url)`).
- Keep total length under ~1,300 characters where possible; longer posts are
  fine when the story warrants it, but the hook still has to earn the
  "see more" click.

## Media

- Always attach an image - posts with images get substantially more reach. Use
  the article's `previewImg` where one exists.
- **Optimum image size: 1200 x 627 px (1.91:1 landscape)** - LinkedIn's
  recommended size for feed images and link previews, displays uncropped.
  Square (1080 x 1080) and portrait (1080 x 1350, 4:5) also work and take more
  feed real estate on mobile; avoid narrower/taller than 4:5 as they get
  cropped. Keep key content away from the edges.
- For the SAS Communications series, the generated retro-style hero images are
  preferred over raw scan crops.

## Relationship to blog posts

- Blog posts (`content/posts/`) and LinkedIn posts are siblings, not copies:
  the blog version contains markdown formatting and links; the LinkedIn
  version uses plain text, `#tag` hashtags, and "link in the comments".
- When converting blog → LinkedIn: strip markdown, pick 3-5 highlights,
  convert the URL to a comment-based CTA, append hashtags.
