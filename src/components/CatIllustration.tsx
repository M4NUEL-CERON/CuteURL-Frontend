export default function CatIllustration() {
  return (
    <div className="hero__visual">
      {/* Floating URL pills */}
      <div className="url-pill url-pill-long">
        https://ejemplo.com/pagina/muy/larga?ref=social
      </div>
      <div className="url-pill url-pill-short2">cuteurl.io/x9k2</div>
      <div className="url-pill url-pill-short">cuteurl.io/abc123</div>

      <svg className="cat-svg" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <ellipse cx="120" cy="268" rx="70" ry="10" fill="rgba(124,58,237,0.15)" />
        {/* Body */}
        <ellipse cx="120" cy="205" rx="68" ry="58" fill="#ddd6fe" />
        {/* Head */}
        <circle cx="120" cy="112" r="58" fill="#ede9fe" />
        {/* Left ear */}
        <polygon points="78,74 62,32 100,68" fill="#ddd6fe" />
        <polygon points="81,71 68,40 97,66" fill="#fbcfe8" />
        {/* Right ear */}
        <polygon points="162,74 178,32 140,68" fill="#ddd6fe" />
        <polygon points="159,71 172,40 143,66" fill="#fbcfe8" />
        {/* Eyes */}
        <ellipse cx="100" cy="110" rx="12" ry="13" fill="#1e1b4b" />
        <ellipse cx="140" cy="110" rx="12" ry="13" fill="#1e1b4b" />
        {/* Eye shine */}
        <circle cx="104" cy="106" r="4" fill="white" />
        <circle cx="144" cy="106" r="4" fill="white" />
        {/* Nose */}
        <ellipse cx="120" cy="126" rx="5.5" ry="4" fill="#f472b6" />
        {/* Mouth */}
        <path d="M114,130 Q120,137 126,130" stroke="#f472b6" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Whiskers left */}
        <line x1="76" y1="122" x2="112" y2="126" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="74" y1="130" x2="112" y2="129" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        {/* Whiskers right */}
        <line x1="128" y1="126" x2="164" y2="122" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="128" y1="129" x2="166" y2="130" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
        {/* Collar */}
        <rect x="90" y="162" width="60" height="15" rx="7.5" fill="#7c3aed" opacity="0.8" />
        <circle cx="120" cy="169" r="4" fill="#a78bfa" />
        {/* Paws */}
        <ellipse cx="90" cy="252" rx="24" ry="13" fill="#c4b5fd" />
        <ellipse cx="150" cy="252" rx="24" ry="13" fill="#c4b5fd" />
        {/* Tail */}
        <path d="M178,215 Q220,195 215,155 Q210,125 195,138"
              stroke="#c4b5fd" strokeWidth="18" fill="none"
              strokeLinecap="round" strokeLinejoin="round" />
        {/* Tail tip */}
        <circle cx="195" cy="138" r="9" fill="#a78bfa" />
      </svg>
    </div>
  )
}