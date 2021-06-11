// Copyright (c) 2018 Nathaniel Wroblewski
//
// I am making my contributions/submissions to this project solely in my
// personal capacity and am not conveying any rights to any intellectual
// property of any third parties.

const FPS = 60;
const STEP = 1 / FPS;
const WIDTH = 1024;
const HEIGHT = 768;
const RESOLUTION = HEIGHT / 480;
// road
const ROAD_WIDTH = 2000;
const SEGMENT_LENGTH = 200;
const LANES = 4;
const CENTRIFUGAL = 0.3;
const MAX_SPEED = SEGMENT_LENGTH / STEP;
// camera
const DRAW_DISTANCE = 400;
const FIELD_OF_VIEW = 100;
const CAMERA_HEIGHT = 1000;
const CAMERA_DEPTH = 1 / Math.tan(((FIELD_OF_VIEW / 2) * Math.PI) / 180);
const FOG_DENSITY = 5;

export {
  FPS,
  STEP,
  WIDTH,
  HEIGHT,
  RESOLUTION,
  ROAD_WIDTH,
  SEGMENT_LENGTH,
  LANES,
  CENTRIFUGAL,
  MAX_SPEED,
  DRAW_DISTANCE,
  FIELD_OF_VIEW,
  CAMERA_HEIGHT,
  CAMERA_DEPTH,
  FOG_DENSITY,
};
