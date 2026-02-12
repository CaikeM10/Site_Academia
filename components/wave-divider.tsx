interface WaveDividerProps {
  topColor: string
  bottomColor: string
  flip?: boolean
  className?: string
}

export function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`relative -mt-px w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "clamp(50px, 8vw, 120px)" }}
      >
        <path
          d="M0,64 C240,120 480,0 720,64 C960,128 1200,0 1440,64 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
        <path
          d="M0,80 C200,40 400,100 600,60 C800,20 1000,90 1200,50 C1320,30 1380,60 1440,80 L1440,120 L0,120 Z"
          fill={bottomColor}
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
