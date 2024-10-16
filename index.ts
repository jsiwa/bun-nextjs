import { serve } from "bun";
import ReactDOMServer from "react-dom/server";
import { FileSystemRouter } from "bun";
import React from "react";

const router = new FileSystemRouter({
  style: "nextjs",
  dir: "./pages",
  origin: "https://localhost:3000",
  assetPrefix: "_next/static/",
});

serve({
  port: 3000,
  async fetch(req) {
    const pathname = new URL(req.url).pathname;
    const match = router.match(pathname);
    if (match) {
      const { filePath, params, query } = match;

      // Import the component dynamically
      const Component = (await import(filePath)).default;

      // You can also inject params, query, etc., into the component as props
      const html = ReactDOMServer.renderToString(
        React.createElement(Component, { params, query })
      );

      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
