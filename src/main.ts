const { cwd } = Deno;


import {
  app,
  get,
  contentType
} from "https://denopkg.com/syumai/dinatra/mod.ts";
import { renderFile } from "https://deno.land/x/dejs/dejs.ts";
import { uuid } from "https://deno.land/x/uuid/mod.ts";

let renderPage = async () => {
  const templateFile = `./public/index.ejs`;
  console.log('GET', templateFile);
  return await renderFile(templateFile, { id: uuid() });
};

app(
  // get("/*", () => [500, "an error has occured"]),
  get("/", renderPage),
  get("/json", () => [
    200,
    contentType("json"),
    JSON.stringify({ uuid: uuid() })
  ])
);
