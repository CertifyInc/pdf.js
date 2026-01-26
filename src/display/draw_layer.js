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

import { DOMSVGFactory } from "./svg_factory.js";
import { shadow } from "../shared/util.js";

/**
 * Manage the SVGs drawn on top of the page canvas.
 * It's important to have them directly on top of the canvas because we want to
 * be able to use mix-blend-mode for some of them.
 */
class DrawLayer {
  #parent = null;

<<<<<<< HEAD
  #id = 0;

=======
>>>>>>> upstream/master
  #mapping = new Map();

  #toUpdate = new Map();

<<<<<<< HEAD
  constructor({ pageIndex }) {
    this.pageIndex = pageIndex;
  }
=======
  static #id = 0;
>>>>>>> upstream/master

  setParent(parent) {
    if (!this.#parent) {
      this.#parent = parent;
      return;
    }

    if (this.#parent !== parent) {
      if (this.#mapping.size > 0) {
        for (const root of this.#mapping.values()) {
          root.remove();
          parent.append(root);
        }
      }
      this.#parent = parent;
    }
  }

  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }

<<<<<<< HEAD
  static #setBox(element, { x = 0, y = 0, width = 1, height = 1 } = {}) {
=======
  static #setBox(element, [x, y, width, height]) {
>>>>>>> upstream/master
    const { style } = element;
    style.top = `${100 * y}%`;
    style.left = `${100 * x}%`;
    style.width = `${100 * width}%`;
    style.height = `${100 * height}%`;
  }

<<<<<<< HEAD
  #createSVG(box) {
    const svg = DrawLayer._svgFactory.create(1, 1, /* skipDimensions = */ true);
    this.#parent.append(svg);
    svg.setAttribute("aria-hidden", true);
    DrawLayer.#setBox(svg, box);
=======
  #createSVG() {
    const svg = DrawLayer._svgFactory.create(1, 1, /* skipDimensions = */ true);
    this.#parent.append(svg);
    svg.setAttribute("aria-hidden", true);
>>>>>>> upstream/master

    return svg;
  }

  #createClipPath(defs, pathId) {
    const clipPath = DrawLayer._svgFactory.createElement("clipPath");
    defs.append(clipPath);
    const clipPathId = `clip_${pathId}`;
    clipPath.setAttribute("id", clipPathId);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    const clipPathUse = DrawLayer._svgFactory.createElement("use");
    clipPath.append(clipPathUse);
    clipPathUse.setAttribute("href", `#${pathId}`);
    clipPathUse.classList.add("clip");

    return clipPathId;
  }

<<<<<<< HEAD
  draw(outlines, color, opacity, isPathUpdatable = false) {
    const id = this.#id++;
    const root = this.#createSVG(outlines.box);
    root.classList.add(...outlines.classNamesForDrawing);
=======
  #updateProperties(element, properties) {
    for (const [key, value] of Object.entries(properties)) {
      if (value === null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }

  draw(properties, isPathUpdatable = false, hasClip = false) {
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
>>>>>>> upstream/master

    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
<<<<<<< HEAD
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("d", outlines.toSVGPath());
=======
    const pathId = `path_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
>>>>>>> upstream/master

    if (isPathUpdatable) {
      this.#toUpdate.set(id, path);
    }

    // Create the clipping path for the editor div.
<<<<<<< HEAD
    const clipPathId = this.#createClipPath(defs, pathId);

    const use = DrawLayer._svgFactory.createElement("use");
    root.append(use);
    root.setAttribute("fill", color);
    root.setAttribute("fill-opacity", opacity);
    use.setAttribute("href", `#${pathId}`);
=======
    const clipPathId = hasClip ? this.#createClipPath(defs, pathId) : null;

    const use = DrawLayer._svgFactory.createElement("use");
    root.append(use);
    use.setAttribute("href", `#${pathId}`);
    this.updateProperties(root, properties);
>>>>>>> upstream/master

    this.#mapping.set(id, root);

    return { id, clipPathId: `url(#${clipPathId})` };
  }

<<<<<<< HEAD
  drawOutline(outlines) {
=======
  drawOutline(properties, mustRemoveSelfIntersections) {
>>>>>>> upstream/master
    // We cannot draw the outline directly in the SVG for highlights because
    // it composes with its parent with mix-blend-mode: multiply.
    // But the outline has a different mix-blend-mode, so we need to draw it in
    // its own SVG.
<<<<<<< HEAD
    const id = this.#id++;
    const root = this.#createSVG(outlines.box);
    root.classList.add(...outlines.classNamesForOutlining);
=======
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
>>>>>>> upstream/master
    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
<<<<<<< HEAD
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("d", outlines.toSVGPath());
    path.setAttribute("vector-effect", "non-scaling-stroke");

    let maskId;
    if (outlines.mustRemoveSelfIntersections) {
      const mask = DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_p${this.pageIndex}_${id}`;
=======
    const pathId = `path_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");

    let maskId;
    if (mustRemoveSelfIntersections) {
      const mask = DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_${id}`;
>>>>>>> upstream/master
      mask.setAttribute("id", maskId);
      mask.setAttribute("maskUnits", "objectBoundingBox");
      const rect = DrawLayer._svgFactory.createElement("rect");
      mask.append(rect);
      rect.setAttribute("width", "1");
      rect.setAttribute("height", "1");
      rect.setAttribute("fill", "white");
      const use = DrawLayer._svgFactory.createElement("use");
      mask.append(use);
      use.setAttribute("href", `#${pathId}`);
      use.setAttribute("stroke", "none");
      use.setAttribute("fill", "black");
      use.setAttribute("fill-rule", "nonzero");
      use.classList.add("mask");
    }

    const use1 = DrawLayer._svgFactory.createElement("use");
    root.append(use1);
    use1.setAttribute("href", `#${pathId}`);
    if (maskId) {
      use1.setAttribute("mask", `url(#${maskId})`);
    }
    const use2 = use1.cloneNode();
    root.append(use2);
    use1.classList.add("mainOutline");
    use2.classList.add("secondaryOutline");

<<<<<<< HEAD
=======
    this.updateProperties(root, properties);

>>>>>>> upstream/master
    this.#mapping.set(id, root);

    return id;
  }

<<<<<<< HEAD
  finalizeLine(id, line) {
    const path = this.#toUpdate.get(id);
    this.#toUpdate.delete(id);
    this.updateBox(id, line.box);
    path.setAttribute("d", line.toSVGPath());
  }

  updateLine(id, line) {
    const root = this.#mapping.get(id);
    const defs = root.firstChild;
    const path = defs.firstChild;
    path.setAttribute("d", line.toSVGPath());
  }

  updatePath(id, line) {
    this.#toUpdate.get(id).setAttribute("d", line.toSVGPath());
  }

  updateBox(id, box) {
    DrawLayer.#setBox(this.#mapping.get(id), box);
  }

  show(id, visible) {
    this.#mapping.get(id).classList.toggle("hidden", !visible);
  }

  rotate(id, angle) {
    this.#mapping.get(id).setAttribute("data-main-rotation", angle);
  }

  changeColor(id, color) {
    this.#mapping.get(id).setAttribute("fill", color);
  }

  changeOpacity(id, opacity) {
    this.#mapping.get(id).setAttribute("fill-opacity", opacity);
  }

  addClass(id, className) {
    this.#mapping.get(id).classList.add(className);
  }

  removeClass(id, className) {
    this.#mapping.get(id).classList.remove(className);
  }

  getSVGRoot(id) {
    return this.#mapping.get(id);
=======
  finalizeDraw(id, properties) {
    this.#toUpdate.delete(id);
    this.updateProperties(id, properties);
  }

  updateProperties(elementOrId, properties) {
    if (!properties) {
      return;
    }
    const { root, bbox, rootClass, path } = properties;
    const element =
      typeof elementOrId === "number"
        ? this.#mapping.get(elementOrId)
        : elementOrId;
    if (!element) {
      return;
    }
    if (root) {
      this.#updateProperties(element, root);
    }
    if (bbox) {
      DrawLayer.#setBox(element, bbox);
    }
    if (rootClass) {
      const { classList } = element;
      for (const [className, value] of Object.entries(rootClass)) {
        classList.toggle(className, value);
      }
    }
    if (path) {
      const defs = element.firstElementChild;
      const pathElement = defs.firstElementChild;
      this.#updateProperties(pathElement, path);
    }
  }

  updateParent(id, layer) {
    if (layer === this) {
      return;
    }
    const root = this.#mapping.get(id);
    if (!root) {
      return;
    }
    layer.#parent.append(root);
    this.#mapping.delete(id);
    layer.#mapping.set(id, root);
>>>>>>> upstream/master
  }

  remove(id) {
    this.#toUpdate.delete(id);
    if (this.#parent === null) {
      return;
    }
    this.#mapping.get(id).remove();
    this.#mapping.delete(id);
  }

  destroy() {
    this.#parent = null;
    for (const root of this.#mapping.values()) {
      root.remove();
    }
    this.#mapping.clear();
    this.#toUpdate.clear();
  }
}

export { DrawLayer };
