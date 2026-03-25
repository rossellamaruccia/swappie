import React from "react"
import { Card, Stack } from "react-bootstrap"
import type { ItemGetResponse } from "../../../types/types"
//import { useAuth } from "../../../utils/AuthContext"

interface ItemCardProps {
  item: ItemGetResponse
}

const ItemCard: React.FC<ItemCardProps> = ({ item}) => {
 
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
      </Card.Body>
    </Card>
  )
}

export default ItemCard
