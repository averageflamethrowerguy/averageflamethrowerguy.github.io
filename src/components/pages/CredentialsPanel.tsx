import styled from 'styled-components'

import { BrowserRouter, useNavigate, useParams } from "react-router-dom";

export function CredentialsPanel() {
    const navigate = useNavigate();

    return <CredentialsSupercontainer>

        <CredentialsContainer>
            <AcademicCredentials
                onClick={() => navigate('/academics')}
            >
                <CredentialsHeader>Academic History</CredentialsHeader>
                <CredentialsSubcontainer>
                    <CredentialElement style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Dartmouth College</CredentialsSubHeader>
                        <div>
                            <div>Computer Science Major</div>
                            <div>GPA: 3.9/4.0</div>
                            <div>Magna Cum Laude</div>
                        </div>
                    </CredentialElement>

                    <CredentialElement>
                        <CredentialsSubHeader>Ingraham High School</CredentialsSubHeader>
                        <div>
                            <div>IB Diploma: 38/45</div>
                            <div>ACT: 36/36</div>
                            <div>GPA: 4.0/4.0</div>
                        </div>
                    </CredentialElement>

                </CredentialsSubcontainer>
            </AcademicCredentials>

            <div>
                <CredentialsHeader>My Skills</CredentialsHeader>
                <div>(Request access for skills marked with a star)</div>
                <CredentialsSubcontainer>
                    <CredentialElement style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Languages</CredentialsSubHeader>
                        <div>
                            <Skill onClick={() => window.location.href="https://github.com/averageflamethrowerguy/averageflamethrowerguy.github.io"}>
                                Javascript,</Skill> <Skill  onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-frontend"}>
                                Typescript,</Skill> <Skill  onClick={() => window.location.href="https://github.com/isaac-400/cs81-final"}>
                                Python,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/current_chungus"}>
                                C,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/averageflamethrowerguy.github.io"}>
                                [TODO] C++,</Skill> <Skill  onClick={() => alert("I wrote a web server in Go, but it's not public! Email me at elliotpotter496@gmail.com, and I'll add you to the repository!")}>
                                *Go,</Skill> <Skill  onClick={() => alert("I wrote a hidden Markov model in Java, but it's not public! Email me at elliotpotter496@gmail.com, and I'll add you to the repository!")}>
                                *Java,</Skill> <Skill onClick={() => window.location.href="https://github.com/BoxianWang/cs77-final-project"}>
                                CUDA,</Skill> <Skill  onClick={() => alert("I designed my own 32-bit CPU that runs my own assembly, but it's not public! Email me at elliotpotter496@gmail.com, and I'll add you to the repository!")}>
                                *Assembly,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/averageflamethrowerguy.github.io"}>
                                [TODO]Bash,</Skill> <Skill onClick={() => window.location.href="https://github.com/averageflamethrowerguy/averageflamethrowerguy.github.io"}>
                                HTML,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/averageflamethrowerguy.github.io"}>
                                CSS</Skill>
                        </div>
                    </CredentialElement>

                    <CredentialElement>
                        <CredentialsSubHeader>Libraries</CredentialsSubHeader>
                        <div>
                        <Skill onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-api"}>
                        NodeJS,</Skill> <Skill onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-api"}>
                        Express,</Skill> <Skill  onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-frontend"}>
                        React,</Skill> <Skill  onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-frontend"}>
                        Redux,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/Syscall-Anomaly-Detection"}>
                        Pandas,</Skill> <Skill  onClick={() => window.location.href="https://github.com/averageflamethrowerguy/Syscall-Anomaly-Detection"}>
                        Numpy,</Skill> <Skill  onClick={() => window.location.href="https://github.com/isaac-400/cs81-final"}>
                        ROS</Skill></div>
                    </CredentialElement>

                    <CredentialElement>
                        <CredentialsSubHeader>Other</CredentialsSubHeader>
                        <div><Skill onClick={() => window.location.href="https://github.com/perfect10-dating/perfect10-api"}>MongoDB,</Skill> 
                        [TODO]SQL, [TODO]GraphQL, [TODO]Kubernetes, [TODO]Docker, AWS, Azure, GCP</div>
                    </CredentialElement>
                </CredentialsSubcontainer>
            </div>
        </CredentialsContainer>

    </CredentialsSupercontainer>
}

export const CredentialsSupercontainer = styled.div`

`

export const CredentialsContainer = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    border-radius: 5px;
`

export const AcademicCredentials = styled.div`
    padding: 5px;
    margin: -5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
`

export const CredentialsHeader = styled.div`
    font-size: 24px;
    // border-bottom: 1px solid black;
    width: fit-content;
`

export const CredentialsSubHeader = styled.div`
    font-size: 20px;
    border-bottom: 1px solid black;
    width: fit-content;
`


export const CredentialsSubcontainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const CredentialElement = styled.div`
    margin-left: 20px;
    width: calc(33.3% - 15px);
`
export const Skill = styled.span`
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    cursor: pointer;
`