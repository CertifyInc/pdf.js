/* Copyright 2023 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AbortException,
  AnnotationEditorParamsType,
  AnnotationEditorType,
  AnnotationMode,
<<<<<<< HEAD
  createValidAbsoluteUrl,
  FeatureTest,
  ImageKind,
  InvalidPDFException,
  isNodeJS,
  MissingPDFException,
=======
  AnnotationType,
  createValidAbsoluteUrl,
  FeatureTest,
  getUuid,
  ImageKind,
  InvalidPDFException,
  MathClamp,
>>>>>>> upstream/master
  normalizeUnicode,
  OPS,
  PasswordResponses,
  PermissionFlag,
<<<<<<< HEAD
  shadow,
  UnexpectedResponseException,
=======
  ResponseException,
  shadow,
  updateUrlHash,
>>>>>>> upstream/master
  Util,
  VerbosityLevel,
} from "../../src/shared/util.js";
import {
<<<<<<< HEAD
=======
  applyOpacity,
  CSSConstants,
  fetchData,
  findContrastColor,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  getRGB,
  getXfaPageViewport,
  isDataScheme,
  isPdfFile,
  noContextMenu,
  OutputScale,
  PagesMapper,
  PDFDateString,
  PixelsPerInch,
  RenderingCancelledException,
  renderRichText,
  setLayerDimensions,
  stopEvent,
  SupportedImageMimeTypes,
} from "../../src/display/display_utils.js";
import {
>>>>>>> upstream/master
  build,
  getDocument,
  PDFDataRangeTransport,
  PDFWorker,
  version,
} from "../../src/display/api.js";
<<<<<<< HEAD
import {
  fetchData,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  getXfaPageViewport,
  isDataScheme,
  isPdfFile,
  noContextMenu,
  OutputScale,
  PDFDateString,
  PixelsPerInch,
  RenderingCancelledException,
  setLayerDimensions,
} from "../../src/display/display_utils.js";
=======
>>>>>>> upstream/master
import { AnnotationEditorLayer } from "../../src/display/editor/annotation_editor_layer.js";
import { AnnotationEditorUIManager } from "../../src/display/editor/tools.js";
import { AnnotationLayer } from "../../src/display/annotation_layer.js";
import { ColorPicker } from "../../src/display/editor/color_picker.js";
import { DOMSVGFactory } from "../../src/display/svg_factory.js";
import { DrawLayer } from "../../src/display/draw_layer.js";
import { GlobalWorkerOptions } from "../../src/display/worker_options.js";
<<<<<<< HEAD
import { TextLayer } from "../../src/display/text_layer.js";
=======
import { isValidExplicitDest } from "../../src/display/api_utils.js";
import { SignatureExtractor } from "../../src/display/editor/drawers/signaturedraw.js";
import { TextLayer } from "../../src/display/text_layer.js";
import { TouchManager } from "../../src/display/touch_manager.js";
>>>>>>> upstream/master
import { XfaLayer } from "../../src/display/xfa_layer.js";

const expectedAPI = Object.freeze({
  AbortException,
  AnnotationEditorLayer,
  AnnotationEditorParamsType,
  AnnotationEditorType,
  AnnotationEditorUIManager,
  AnnotationLayer,
  AnnotationMode,
<<<<<<< HEAD
  build,
  ColorPicker,
  createValidAbsoluteUrl,
=======
  AnnotationType,
  applyOpacity,
  build,
  ColorPicker,
  createValidAbsoluteUrl,
  CSSConstants,
>>>>>>> upstream/master
  DOMSVGFactory,
  DrawLayer,
  FeatureTest,
  fetchData,
<<<<<<< HEAD
  getDocument,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
=======
  findContrastColor,
  getDocument,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  getRGB,
  getUuid,
>>>>>>> upstream/master
  getXfaPageViewport,
  GlobalWorkerOptions,
  ImageKind,
  InvalidPDFException,
  isDataScheme,
  isPdfFile,
<<<<<<< HEAD
  MissingPDFException,
=======
  isValidExplicitDest,
  MathClamp,
>>>>>>> upstream/master
  noContextMenu,
  normalizeUnicode,
  OPS,
  OutputScale,
<<<<<<< HEAD
=======
  PagesMapper,
>>>>>>> upstream/master
  PasswordResponses,
  PDFDataRangeTransport,
  PDFDateString,
  PDFWorker,
  PermissionFlag,
  PixelsPerInch,
  RenderingCancelledException,
<<<<<<< HEAD
  setLayerDimensions,
  shadow,
  TextLayer,
  UnexpectedResponseException,
=======
  renderRichText,
  ResponseException,
  setLayerDimensions,
  shadow,
  SignatureExtractor,
  stopEvent,
  SupportedImageMimeTypes,
  TextLayer,
  TouchManager,
  updateUrlHash,
>>>>>>> upstream/master
  Util,
  VerbosityLevel,
  version,
  XfaLayer,
});

describe("pdfjs_api", function () {
  it("checks that the *official* PDF.js API exposes the expected functionality", async function () {
    // eslint-disable-next-line no-unsanitized/method
    const pdfjsAPI = await import(
      typeof PDFJSDev !== "undefined" && PDFJSDev.test("LIB")
        ? "../../pdf.js"
        : "../../src/pdf.js"
    );

    // The imported Object contains an (automatically) inserted Symbol,
    // hence we copy the data to allow using a simple comparison below.
    expect({ ...pdfjsAPI }).toEqual(expectedAPI);
<<<<<<< HEAD
=======

    expect(Object.keys(globalThis.pdfjsLib).sort()).toEqual(
      Object.keys(expectedAPI).sort()
    );
>>>>>>> upstream/master
  });
});

describe("web_pdfjsLib", function () {
  it("checks that the viewer re-exports the expected API functionality", async function () {
<<<<<<< HEAD
    if (isNodeJS) {
      pending("loadScript is not supported in Node.js.");
    }
    const apiPath = "../../build/generic/build/pdf.mjs";
    await import(apiPath);

    const webPdfjsLib = await import("../../web/pdfjs.js");
=======
    // Load the API globally, as the viewer does.
    // eslint-disable-next-line no-unsanitized/method
    await import(
      typeof PDFJSDev !== "undefined" && PDFJSDev.test("LIB")
        ? "../../../generic-legacy/build/pdf.mjs"
        : "../../build/generic/build/pdf.mjs"
    );

    // eslint-disable-next-line no-unsanitized/method
    const webPdfjsLib = await import(
      typeof PDFJSDev !== "undefined" && PDFJSDev.test("LIB")
        ? "../../../../web/pdfjs.js"
        : "../../web/pdfjs.js"
    );
>>>>>>> upstream/master

    expect(Object.keys(webPdfjsLib).sort()).toEqual(
      Object.keys(expectedAPI).sort()
    );
  });
});
