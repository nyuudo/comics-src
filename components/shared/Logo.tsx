"use client";

import { useRive } from "@rive-app/react-canvas";

export const Logo = () => {
  const { RiveComponent } = useRive({
    src: "/assets/images/logotipo.riv",
    autoplay: true,
  });

  return (
    <div style={{ width: "185px", height: "32px" }}>
      <RiveComponent />
    </div>
  );
};
