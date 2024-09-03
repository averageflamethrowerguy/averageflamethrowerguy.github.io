import styled from 'styled-components'

export function TopBar() {
    return <BarContainer>
        <BarContainerRight>
          <BarContainerElement>Elliot Potter</BarContainerElement>
          <BarContainerElement>Work</BarContainerElement>
          <BarContainerElement>Academics</BarContainerElement>
          <BarContainerElement>Volunteering</BarContainerElement>
          <BarContainerElement>Fun</BarContainerElement>
        </BarContainerRight>
    </BarContainer>
}

export const BarContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
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
`