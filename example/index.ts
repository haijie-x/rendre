import path from "node:path";
import express from "express";
import { getTemplateHtml } from "./utils/getTemplateHtml";
import Rendre from "rendre";

const toAbsolute = (relativePath: string) =>
  path.resolve(__dirname, relativePath);

const rendre = new Rendre({
  entryDirname: toAbsolute(""),
  buildDirname: toAbsolute(".rendre"),
});
rendre.launch();
