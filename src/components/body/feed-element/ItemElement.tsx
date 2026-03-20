import React from "react"
import { Card, Button, Stack } from "react-bootstrap"
import type { ItemGetResponse } from "../../../types/types"

interface ItemCardProps {
  item: ItemGetResponse
  onDelete?: (id: number) => void
  onEdit?: (id: number) => void
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onEdit }) => {
 
  const isBorrow = item.type === "BORROW"
  const badgeBg = isBorrow ? "info" : "success"

  return (
    <Card className="h-100 shadow-sm" border={badgeBg}>
      <Card.Img
        variant="top"
        src={
          item.pics_urls && item.pics_urls.length > 0
            ? item.pics_urls[0]
            : "src/assets/pexels-wordsurfer-909256.jpg"
        }
        style={{ height: "150px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column" >
        <Stack
          direction="horizontal"
          className="justify-content-between align-items-start mb-2"
        >
          <Card.Title
            className="mb-0 text-truncate"
            style={{ maxWidth: "70%" }}
          >
            {item.title}
          </Card.Title>
        </Stack>

        <Card.Text className="text-muted small flex-grow-1">
          <a>{item.type}</a>
          <br/>
          <a>{item.category}</a>
          <br/>
          {item.description.length > 100
            ? `${item.description.substring(0, 95)}...`
            : item.description}
        </Card.Text>

        <hr />

        <Stack direction="horizontal" gap={2} className="mt-auto">
          <Button
            variant="outline-primary"
            size="sm"
            className="w-100"
            onClick={() => onEdit?.(item.id)}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            className="w-100"
            onClick={() => onDelete?.(item.id)}
          >
            Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default ItemCard
