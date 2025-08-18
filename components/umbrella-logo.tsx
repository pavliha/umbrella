interface LogoProps {
  className?: string
  showText?: boolean
  showTagline?: boolean
}

export function UmbrellaLogo({ className = "", showText = true, showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Propeller/Fan shape */}
        <g transform="translate(50, 50)">
          {/* Center circle */}
          <circle cx="0" cy="0" r="8" fill="url(#gradient1)" />
          
          {/* Propeller blades - 8 curved blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={i}
              d={`M 0,0 Q ${15 * Math.cos((angle - 20) * Math.PI / 180)},${15 * Math.sin((angle - 20) * Math.PI / 180)} ${35 * Math.cos(angle * Math.PI / 180)},${35 * Math.sin(angle * Math.PI / 180)} Q ${20 * Math.cos((angle + 20) * Math.PI / 180)},${20 * Math.sin((angle + 20) * Math.PI / 180)} 0,0`}
              fill="url(#gradient1)"
              opacity={i % 2 === 0 ? "1" : "0.7"}
            />
          ))}
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="40%" stopColor="#FFD700" />
            <stop offset="60%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF8E8E" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
              UMBREL
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] bg-clip-text text-transparent">
              LA
            </span>
          </div>
          {showTagline && (
            <p className="text-sm text-muted-foreground mt-1">From blueprint to sky</p>
          )}
        </div>
      )}
    </div>
  )
}