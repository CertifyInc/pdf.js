/* eslint-disable no-console */

import { getDocument } from "./display/api.js";
import { GlobalWorkerOptions } from "./display/worker_options.js";

const PDFJS_PATH = "Scripts/pdfjs/";

// The worker resolves relative resource URLs against its own location, so
// everything handed to PDF.js is made absolute against the hosting page.
function pdfjsUrl(path) {
  return new URL(PDFJS_PATH + path, document.baseURI).href;
}

function loadThumbnailDocument(url) {
  GlobalWorkerOptions.workerSrc = pdfjsUrl("build/pdf.worker.mjs");

  return getDocument({
    url,
    cMapUrl: pdfjsUrl("web/cmaps/"),
    standardFontDataUrl: pdfjsUrl("web/standard_fonts/"),
    wasmUrl: pdfjsUrl("web/wasm/"),
    isEvalSupported: false,
  }).promise;
}

async function renderFirstPage(url, canvas) {
  const pdf = await loadThumbnailDocument(url);
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.5 });

  canvas.height = viewport.height;
  canvas.width = viewport.width;

  await page.render({
    canvasContext: canvas.getContext("2d"),
    viewport,
  }).promise;
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  const canvasWrapper = document.createElement("div");

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvasWrapper.style.width = `${width}px`;
  canvasWrapper.style.height = `${height}px`;

  return { canvas, canvasWrapper };
}

async function asyncAppendPreviewImage($elem, fileUrl, width, height) {
  const { canvas, canvasWrapper } = createCanvas(
    width || $elem.width(),
    height || $elem.height()
  );

  try {
    await renderFirstPage(fileUrl, canvas);
  } catch (err) {
    console.error(err);
    throw err;
  }

  canvasWrapper.append(canvas);
  $elem[0].append(canvasWrapper);

  return canvas.toDataURL();
}

async function asyncGetPDFPreviewImageURL(fileURL, height, width) {
  const { canvas, canvasWrapper } = createCanvas(width, height);

  try {
    await renderFirstPage(fileURL, canvas);
  } catch (err) {
    console.log(err);
    return undefined;
  }

  canvasWrapper.append(canvas);

  return canvas.toDataURL();
}

function getViewerSrc(fileUrl, localeCode) {
  // need to grab locale cookie which is set via ReceiptViewer WUC
  const viewerUrl = "Scripts/pdfjs/web/viewer.html";
  const params = fileUrl.substr(fileUrl.indexOf("?") + 1);
  const pdfViewerUrl = `${viewerUrl}?${encodeURIComponent(
    params
  )}&d=${Date.now()}#locale=${localeCode || ""}`;

  return pdfViewerUrl;
}

export { asyncAppendPreviewImage, asyncGetPDFPreviewImageURL, getViewerSrc };
