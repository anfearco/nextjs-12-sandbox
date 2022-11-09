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
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          //green gradient  backgournd color
          backgroundColor: "white"
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
