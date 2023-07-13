"use client";

import { useRive } from "@rive-app/react-canvas";

export const BrandImage = () => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rive/logotipo.riv",
    artboard: "Logo",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return <RiveComponent />;
};
