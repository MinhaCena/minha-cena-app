'use client'

import Image from 'next/image'
import { useState } from 'react'

interface IButtonWithIllustrationProps {
  buttonLabel?: string
  illustrationUrl: string
  illustrationUrlHover?: string
  illustrationWidth: number
  illustrationHeight: number
  illustrationAlt: string
}

export default function ButtonWithIllustration({
  buttonLabel,
  illustrationUrl,
  illustrationWidth,
  illustrationHeight,
  illustrationAlt,
  illustrationUrlHover,
}: IButtonWithIllustrationProps) {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <button
      className="mr-8 text-3 font-extrabold uppercase"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image
          className="mb-6"
          src={`/img/illustrations/${illustrationUrlHover}.svg`}
          width={illustrationWidth}
          height={illustrationHeight}
          alt={illustrationAlt}
        />
      ) : (
        <Image
          className="mb-6"
          src={`/img/illustrations/${illustrationUrl}.svg`}
          width={illustrationWidth}
          height={illustrationHeight}
          alt={illustrationAlt}
        />
      )}

      {buttonLabel}
    </button>
  )
}
