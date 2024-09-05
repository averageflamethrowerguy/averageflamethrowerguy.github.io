import styled from 'styled-components'
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";

export function TopBar() {
  const navigate = useNavigate();

  return <BarContainer>
      <BarContainerRight>
        <BarContainerElement onClick={() => {
          navigate('/')
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}>Elliot Potter</BarContainerElement>
        <BarContainerElement onClick={async () => {
          navigate('/')

          await new Promise(resolve => setTimeout(resolve, 200))
          
          const el = document.getElementById("my_story");
          if (el) {
            el.scrollIntoView()
          }
        }}>Work</BarContainerElement>
        <BarContainerElement onClick={() => {
          navigate('/academics')
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}>Academics</BarContainerElement>
        {/* <BarContainerElement>Volunteering</BarContainerElement> */}
        <BarContainerElement>Fun</BarContainerElement>
      </BarContainerRight>
  </BarContainer>
}

export const BarContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
  width: 100vw;
  background-color: white;
  display: flex;
  font-size: 24px;
  border-bottom: 2px solid grey;
  top: 0px;
  justify-content: space-between;
  overflow-x: scroll;
`

export const BarContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
`

export const BarContainerElement = styled.div`
  margin-left: 40px;
  cursor: pointer;
`