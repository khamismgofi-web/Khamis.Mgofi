import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Khamis Mgofi Said";
const DESCRIPTION =
  "I'm Khamis Mgofi Said, backend developer and Electronics & Telecommunication Engineering student building APIs with Python, FastAPI and PostgreSQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The whole portfolio lives in one standalone file: public/portfolio.html
// (plain HTML/CSS/JS, no build tools). This route embeds it full-screen so the
// live preview shows the site, and the file can be hosted anywhere as-is.
function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title={TITLE}
      className="h-screen w-screen border-0"
    />
  );
}
