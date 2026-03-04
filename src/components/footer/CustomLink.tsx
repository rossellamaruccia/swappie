type Props = {
  title: { title: string }
}

function CustomLink({ title }: Props) {
  return (
    <>
      <a href="">{title.title}</a>
    </>
  )
}

export default CustomLink
