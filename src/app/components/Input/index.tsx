import { ComponentProps, forwardRef } from 'react'

interface Props extends ComponentProps<'input'> {
  label: string
  inputWidth?: string
  inputHeight?: string
  inputPlaceholder?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, type = 'text', inputWidth, inputHeight, inputPlaceholder, ...props },
  ref
) {
  const stylesFromProps = {
    width: `${inputWidth}rem`,
    inputHeight: `${inputHeight}rem`,
  }
  return (
    <label>
      <div className="font-bold text-xiketic-2  mb-2">{label}</div>
      <input
        style={stylesFromProps}
        className="h-10 w-full bg-white mb-2  text-xiketic-3  rounded-xl px-4 py-2 border border-gray-7 outline-gray-5 outline-offset-1 ring-inset focus:border-blue-ryb-0 focus:ring-blue-ryb-0 "
        type={type}
        placeholder={inputPlaceholder}
        ref={ref}
        {...props}
      />
    </label>
  )
})
