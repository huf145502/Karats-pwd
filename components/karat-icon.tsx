interface KaratIconProps {
  size?: number
  className?: string
}

export function KaratIcon({ size = 16, className = "" }: KaratIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 10C16 13.31 13.31 16 10 16C6.69 16 4 13.31 4 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
