import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site-config";

export const alt = siteConfig.titleDefault;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #206bc4 0%, #1a5a9e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            t.
          </div>
          <span style={{ fontSize: 48, fontWeight: 700 }}>{siteConfig.name}</span>
        </div>
        <p style={{ fontSize: 28, opacity: 0.95, maxWidth: 800, lineHeight: 1.35 }}>
          {siteConfig.description}
        </p>
      </div>
    ),
    { ...size }
  );
}
