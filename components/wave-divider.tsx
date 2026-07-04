interface WaveDividerProps {
  fill: string;
  bgColor: string;
}

export default function WaveDivider({ fill, bgColor }: WaveDividerProps) {
  return (
    <div style={{ background: bgColor, lineHeight: 0, marginBottom: -2, display: "block" }}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 56 }}
      >
        <path
          d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1380,14 1440,28 L1440,56 L0,56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
