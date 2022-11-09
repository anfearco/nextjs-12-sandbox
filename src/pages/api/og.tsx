import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge"
}

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: "#f9f8f6",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(120deg, #342e2a 0%, #425c76 100%)"
        }}
      >
        anfear.co
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}
