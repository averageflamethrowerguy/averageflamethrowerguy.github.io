import styled from 'styled-components'

export const BodyContainer = styled.div`
    margin-top: 80px;
    text-align: left;
    font-size: 20px;
    // color: rgb(200, 200, 200);
`

export const MiddleContainer = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding-left: 80px;
    padding-right: 80px;
`

export const LeftText = styled.div`
    margin-top: 20px;
    display: flex;
    max-width: 800px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    cursor: pointer;
    padding: 5px;
    padding-left: 80px;
    border-radius: 0px 5px 5px 0px;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    background-color: white;
`

export const RightText = styled.div`
    margin-top: 40px;
    display: flex;
    max-width: 800px;
    margin-left: max(calc(100vw - 800px), 0px);
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    cursor: pointer;
    padding: 5px;
    padding-right: 80px;
    border-radius: 5px 0px 0px 5px;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    background-color: white;
`

export const TextHeader = styled.div`
    font-size: 36px;
    text-align: center;
    margin-bottom: 50px;
    border-radius: 5px 0px 0px 5px;
    margin-top: calc(50vh - 50px);
`

export const ImageContainer = styled.image`
    margin-left: 20px;
    margin-right: 20px;
`

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-left: 80px;
    padding-right: 80px;
    flex-wrap: wrap;
`

export const IndividualProject = styled.div`
    padding: 5px;
    padding-left: 10px;
    margin: -5px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    max-width: 450px;
    `

export const ProjectDescription = styled.div`
    width: calc(100% - 150px);
`

export const ProjectElement = styled.div`
    width: 150px;
    margin-left: 15px;
`