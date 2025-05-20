
import { type CSSProperties } from "react";

const BODY_PART_STYLES: CSSProperties = {
  position: "absolute",
  background: "linear-gradient(45deg, #4a4a4a, #2b2b2b)",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
  animation: "bodyPartAppear 0.3s ease-out",
};

const HEAD = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      top: "50px",
      right: "-28px",
      border: "4px solid #333",
      background: "linear-gradient(145deg, #fff 0%, #ddd 100%)",
    }}
  />
);

const BODY = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "10px",
      height: "100px",
      top: "105px",
      right: "-5px",
      borderRadius: "4px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "100px",
      height: "10px",
      top: "150px",
      right: "-105px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      borderRadius: "4px",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "100px",
      height: "10px",
      top: "150px",
      right: "6px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      borderRadius: "4px",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "100px",
      height: "10px",
      top: "195px",
      right: "-95px",
      rotate: "60deg",
      transformOrigin: "left bottom",
      borderRadius: "4px",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      ...BODY_PART_STYLES,
      width: "100px",
      height: "10px",
      top: "195px",
      right: "-5px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
      borderRadius: "4px",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative", margin: "2rem 0" }}>
      {/* Body parts */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      
      {/* Gallows structure */}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "linear-gradient(to right, #8B4513, #6B3513)",
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: "4px",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "linear-gradient(#8B4513, #6B3513)",
          marginLeft: "120px",
          borderRadius: "4px 8px 0 0",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "linear-gradient(to right, #8B4513, #6B3513)",
          marginLeft: "120px",
          borderRadius: "4px",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "linear-gradient(#8B4513, #6B3513)",
          borderRadius: "0 0 8px 8px",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}
