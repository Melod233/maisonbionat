import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — 180×180 px, fond sombre (#0F0F0E).
 * Même M géométrique que Logo.tsx, stroke blanc ivoire, accent orange agrandi.
 * Généré par Next.js via ImageResponse (aucun fichier binaire requis).
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0F0E",
        }}
      >
        {/* M centré dans le carré, proportions identiques au logo */}
        <svg
          width="108"
          height="81"
          viewBox="0 0 24 18"
          fill="none"
        >
          <path
            d="M1.5 16.5V2.5L12 9.5L22.5 2.5V16.5"
            stroke="#F0EFE9"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <rect x="9.5" y="7" width="5" height="5" fill="#E84400" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
