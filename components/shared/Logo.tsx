"use client";

import { useRive } from "@rive-app/react-canvas";

export const Logo = () => {
  const { RiveComponent } = useRive({
    src: "/assets/icons/comics-src.riv",
    autoplay: true,
  });

  return (
    <a href="/">
      <div style={{ width: "185px", height: "32px" }}>
        <RiveComponent />
      </div>
    </a>
  );
};
