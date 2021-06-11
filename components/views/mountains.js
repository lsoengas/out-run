import { HEIGHT, WIDTH } from "../constants/index.js";
import { useEffect } from "react";

const IMG_WIDTH = 3836;
const IMG_HEIGHT = 1080;

const render = ({
  context,
  layer = { w: IMG_WIDTH, h: IMG_HEIGHT, x: 0, y: 2 },
  width = WIDTH,
  height = HEIGHT,
  rotation = 0,
  offset = 0,
}) => {
  if (typeof window === undefined) return;
  const IMG = document.querySelector(".mountains");

  const imgwidth = layer.w / 4;
  const imgheight = layer.h;
  const srcx = layer.x + Math.floor(layer.w * rotation);
  const srcy = layer.y + 80 + offset;
  const srcwidth = Math.min(imgwidth, layer.x + layer.w - srcx);
  const srcheight = imgheight;
  const destx = 0;
  const desty = 0;
  const destwidth = Math.floor((width * srcwidth) / imgwidth);
  const destheight = height;

  context.drawImage(
    IMG,
    srcx,
    srcy,
    srcwidth,
    srcheight,
    destx,
    desty,
    destwidth,
    destheight
  );

  if (srcwidth < imgwidth) {
    context.drawImage(
      IMG,
      layer.x,
      srcy,
      imgwidth - srcwidth,
      srcheight,
      destwidth - 1,
      desty,
      width - destwidth,
      destheight
    );
  }
};

export default render;
