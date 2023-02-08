interface IFormTitle {
  title: string
}

export default function FormTitle({ title }: IFormTitle) {
  return <h1 className="text-xiketic-1 text-7xl font-extrabold">{title}:</h1>
}
