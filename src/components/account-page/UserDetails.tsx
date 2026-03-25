import type { UserGetResponse } from "../../types/types"
import { Card, Image, Stack } from "react-bootstrap"
import LocationMap from "./LocationMap"

interface ElementProps {
  user: UserGetResponse
}

const UserDetails = ({ user }: ElementProps) => {
  return (
    <>
      {user ? (
        <Card>
          <Card.Body>
            <Stack direction="horizontal" className="mt-auto mb-2">
              <Image src={user.profilePic!} className="profile-picture mx-1" />
              <h6>
                {user.name} {user.surname}, {user.city}
              </h6>
            </Stack>
            <LocationMap lng={user.location!.lng} lat={user.location!.lat} />
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  )
}

export default UserDetails
