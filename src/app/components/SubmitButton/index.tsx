import Image from 'next/image'

interface ISubmitButtonProps {
  buttonLabel: string
  icon?: string
  buttonWidth?: string
  buttonHeight?: string
}

export default function SubmitButton({
  buttonLabel,
  icon,
  buttonWidth,
  buttonHeight,
}: ISubmitButtonProps) {
  const stylesFromProps = {
    width: `${buttonWidth}rem`,
    height: `${buttonHeight}rem`,
  }
  return (
    <button
      style={stylesFromProps}
      type="submit"
      className="flex items-center justify-center text-gray-12 text-md font-semibold hover:bg-img-gradient-2 bg-img-gradient-1 rounded-xl"
    >
      {buttonLabel}
      <Image
        className="ml-2"
        src={`/img/icons/${icon}.svg`}
        width={16}
        height={16}
        alt={buttonLabel}
      />
    </button>
  )
}
