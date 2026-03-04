import "../../customs.css"

type Props = {
  title: { title: string }
}

function CategoryButton({ title }: Props) {
  return (
    <>
      <a href="/category/${title.title}" className="mx-4">{title.title}</a>
    </>
  )
}

export default CategoryButton
