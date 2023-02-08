import Image from 'next/image'

interface ILink {
  linkHref: string
  linkText: string
  linkIcon?: string
}

export default function Link({ linkHref, linkText, linkIcon }: ILink) {
  return (
    <a href={linkHref} className="flex text-xiketic-1 text-sm font-semibold">
      <Image
        className="mr-2"
        src={`/img/icons/${linkIcon}`}
        width={16}
        height={16}
        alt={linkText}
      />
      {linkText}
    </a>
  )
}
