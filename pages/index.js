import GameState from "../components/models/game_state";
import Router from "../components/routers/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector(".game");
    const model = new GameState({});
    const router = new Router({ element, model });

    router.update();
  }, []);
  return (
    <div>
      <head>
        <title>O U T R U N</title>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:600|Libre+Baskerville"
          rel="stylesheet"
          type="text/css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="icon"
          type="image/x-icon"
          href="https://d9n2q0aon7p4b.cloudfront.net/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://d9n2q0aon7p4b.cloudfront.net/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://d9n2q0aon7p4b.cloudfront.net/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://d9n2q0aon7p4b.cloudfront.net/images/favicon-16x16.png"
        />

        <meta
          name="description"
          content="Synthwave-inspired adaptation of Sega's Outrun"
        />

        <meta name="twitter:card" value="summary" />
        <meta name="twitter:title" content="O U T R U N" />
        <meta
          name="twitter:description"
          content="Synthwave-inspired adaptation of Sega's Outrun"
        />
        <meta
          name="twitter:image"
          content="https://d9n2q0aon7p4b.cloudfront.net/images/screenshot.png"
        />

        <meta property="og:title" content="O U T R U N" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.nathaniel.ai/outrun" />
        <meta
          property="og:image"
          content="https://d9n2q0aon7p4b.cloudfront.net/images/screenshot.png"
        />
        <meta
          property="og:description"
          content="Synthwave-inspired adaptation of Sega's Outrun"
        />
        <meta property="og:site_name" content="O U T R U N" />

        <meta itemProp="name" content="O U T R U N" />
        <meta
          itemProp="description"
          content="Synthwave-inspired adaptation of Sega's Outrun"
        />
        <meta
          itemProp="image"
          content="https://d9n2q0aon7p4b.cloudfront.net/images/screenshot.png"
        />
      </head>
      <body>
        <div className="container">
          <h1 className="title">OUTRUN</h1>
          <div className="game"></div>
          <audio src="https://d9n2q0aon7p4b.cloudfront.net/audio/Fury_Weekend_12_To_Midnight.mp3"></audio>
        </div>

        <img
          className="left"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/left.png"
        />
        <img
          className="right"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/right.png"
        />
        <img
          className="straight"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/straight.png"
        />
        <img
          className="up"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/up.png"
        />
        <img
          className="upleft"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/upleft.png"
        />
        <img
          className="upright"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/upright.png"
        />
        <img
          className="left-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/left-brake.png"
        />
        <img
          className="right-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/right-brake.png"
        />
        <img
          className="straight-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/straight-brake.png"
        />
        <img
          className="up-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/up-brake.png"
        />
        <img
          className="upleft-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/upleft-brake.png"
        />
        <img
          className="upright-brake"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/ferrari/upright-brake.png"
        />

        <img
          className="mountains"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/background/mountains.jpg"
        />

        <img
          className="palm"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/sprites/palm.png"
        />
        <img
          className="sign"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/sprites/sign.png"
        />

        <img
          className="outgoing1"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing1.png"
        />
        <img
          className="outgoing2"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing2.png"
        />
        <img
          className="outgoing3"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing3.png"
        />
        <img
          className="outgoing4"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing4.png"
        />
        <img
          className="outgoing5"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing5.png"
        />
        <img
          className="outgoing6"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing6.png"
        />
        <img
          className="outgoing7"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/outgoing7.png"
        />
        <img
          className="oncoming1"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming1.png"
        />
        <img
          className="oncoming2"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming2.png"
        />
        <img
          className="oncoming3"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming3.png"
        />
        <img
          className="oncoming4"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming4.png"
        />
        <img
          className="oncoming5"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming5.png"
        />
        <img
          className="oncoming6"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming6.png"
        />
        <img
          className="oncoming7"
          src="https://d9n2q0aon7p4b.cloudfront.net/images/cars/oncoming7.png"
        />
      </body>
    </div>
  );
}
