export default function PetIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 440"
      className={className}
      role="img"
      aria-label="Ilustração de um cachorro e um gato sentados, representando o cuidado da Patas Felizes"
    >
      <defs>
        <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE7DE" />
          <stop offset="100%" stopColor="#F0DFC2" />
        </linearGradient>
      </defs>

      {/* fundo orgânico */}
      <path
        fill="url(#blobGradient)"
        d="M240 24c84 0 162 40 192 112 26 62 8 142-44 186-56 48-142 58-214 34-70-24-128-82-138-154C24 128 72 62 140 38 172 26 206 24 240 24Z"
      />

      {/* sombra do piso */}
      <ellipse cx="240" cy="372" rx="150" ry="18" fill="#E2502F" opacity="0.08" />

      {/* cachorro (esquerda) */}
      <g transform="translate(70 150)">
        <ellipse cx="70" cy="150" rx="68" ry="58" fill="#CFE3D2" />
        <ellipse cx="70" cy="75" rx="52" ry="48" fill="#CFE3D2" />
        <ellipse cx="24" cy="48" rx="18" ry="26" fill="#8FB89A" transform="rotate(-18 24 48)" />
        <ellipse cx="116" cy="48" rx="18" ry="26" fill="#8FB89A" transform="rotate(18 116 48)" />
        <ellipse cx="50" cy="78" rx="7" ry="9" fill="#211D1A" />
        <ellipse cx="90" cy="78" rx="7" ry="9" fill="#211D1A" />
        <ellipse cx="70" cy="96" rx="10" ry="7" fill="#211D1A" />
        <path d="M58 108c6 7 18 7 24 0" stroke="#211D1A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <ellipse cx="36" cy="150" rx="14" ry="20" fill="#FBF7F1" />
        <ellipse cx="104" cy="150" rx="14" ry="20" fill="#FBF7F1" />
      </g>

      {/* gato (direita) */}
      <g transform="translate(250 120)">
        <ellipse cx="70" cy="178" rx="58" ry="50" fill="#FFFFFF" />
        <ellipse cx="70" cy="96" rx="46" ry="42" fill="#FFFFFF" />
        <path d="M32 66 20 24l34 28Z" fill="#FFFFFF" />
        <path d="M108 66 120 24l-34 28Z" fill="#FFFFFF" />
        <path d="M34 62 24 32l24 24Z" fill="#FFE7DE" />
        <path d="M106 62 116 32l-24 24Z" fill="#FFE7DE" />
        <ellipse cx="54" cy="98" rx="6.5" ry="8" fill="#211D1A" />
        <ellipse cx="86" cy="98" rx="6.5" ry="8" fill="#211D1A" />
        <path d="M66 112h8l-4 5Z" fill="#FF6B4A" />
        <path d="M30 118h18M30 124h16M92 118h18M94 124h16" stroke="#C9C2B8" strokeWidth="2" strokeLinecap="round" />
        <path d="M110 190c18 4 28-6 30-18" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
      </g>

      {/* patinhas decorativas flutuantes */}
      <g fill="#FF6B4A" opacity="0.65">
        <ellipse cx="60" cy="60" rx="6" ry="5" />
        <ellipse cx="46" cy="48" rx="3" ry="2.6" />
        <ellipse cx="74" cy="48" rx="3" ry="2.6" />
      </g>
      <g fill="#8FB89A" opacity="0.6">
        <ellipse cx="420" cy="280" rx="7" ry="6" />
        <ellipse cx="404" cy="266" rx="3.4" ry="3" />
        <ellipse cx="434" cy="266" rx="3.4" ry="3" />
      </g>
    </svg>
  );
}
