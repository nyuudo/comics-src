import { ImageResponse } from "next/server";
export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
          fontFamily: "Assistant",
          fontWeight: "800",
          background: "#00a4de",
          borderRadius: "4px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff998",
        }}
      >
        /
      </div>
    ),
    {
      ...size,
    }
  );
}
