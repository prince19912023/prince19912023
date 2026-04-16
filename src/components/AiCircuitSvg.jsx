export default function AiCircuitSvg({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AI circuit illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 210) rotate(90) scale(210 310)">
          <stop stopColor="#22d3ee" stopOpacity="0.25" />
          <stop offset="1" stopColor="#0b1220" stopOpacity="0" />
        </radialGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      <rect x="0" y="0" width="800" height="450" fill="url(#g2)" />

      <g opacity="0.9" stroke="url(#g1)" strokeWidth="2">
        <path d="M120 90H300V160H420" />
        <path d="M120 320H260V250H360" />
        <path d="M680 120H520V210H420" />
        <path d="M680 330H540V270H450" />
        <path d="M260 250V340H380" />
        <path d="M520 210V110H420" />
      </g>

      <g filter="url(#blur)">
        <circle cx="420" cy="210" r="44" fill="#22d3ee" fillOpacity="0.16" />
        <circle cx="420" cy="210" r="26" fill="#3b82f6" fillOpacity="0.16" />
      </g>

      <g>
        {[
          [120, 90],
          [300, 160],
          [420, 210],
          [120, 320],
          [260, 250],
          [360, 250],
          [680, 120],
          [520, 210],
          [680, 330],
          [540, 270],
          [450, 270],
          [260, 340],
          [380, 340],
          [520, 110],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="7" fill="#0b1220" />
            <circle cx={x} cy={y} r="6" fill="#0b1220" stroke="#22d3ee" strokeOpacity="0.65" />
          </g>
        ))}
      </g>

      <text
        x="420"
        y="218"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system"
        fontSize="18"
        fill="#e2e8f0"
        opacity="0.9"
      >
        AI CORE
      </text>
    </svg>
  );
}

