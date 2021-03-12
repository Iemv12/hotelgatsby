import * as React from "react"
import ContentHome from "../components/contentHome"
import ImageHotel from "../components/imageHotel"
import Layout from '../components/layout'
import useRooms from "../hooks/useRooms"
import { css } from '@emotion/react'
import RoomPreview from "../components/roomPreview"
import styled from '@emotion/styled'

const ListRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`

const IndexPage = () => {

  const rooms = useRooms()

  return (
    <Layout>
      <ImageHotel/>
      <ContentHome/>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem4
        `}
      >Our Rooms</h2>
      <ListRooms>
        {rooms.map((room)=>(
          <RoomPreview key={room.id} room={room}/>
        ))}
      </ListRooms>
    </Layout>
  )
}

export default IndexPage
