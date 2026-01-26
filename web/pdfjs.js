/* Copyright 2016 Mozilla Foundation
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

const {
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
} = globalThis.pdfjsLib;

export {
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
};
