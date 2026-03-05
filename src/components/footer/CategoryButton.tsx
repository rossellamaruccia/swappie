import "../../customs.css"

type Props = {
  title: { title: string }
}

function CategoryButton({ title }: Props) {
  return (
    <>
      <a href="/category/${title.title}" className="me-3 mb-3">{title.title}</a>
    </>
  )
}

export default CategoryButton
