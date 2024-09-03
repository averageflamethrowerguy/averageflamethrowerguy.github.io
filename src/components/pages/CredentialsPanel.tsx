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
                <CredentialsSubcontainer>
                    <CredentialElement style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Languages</CredentialsSubHeader>
                        <div>Javascript, Typescript, Python, C, C++, Go, Java, CUDA, Assembly, Bash, HTML, CSS</div>
                    </CredentialElement>

                    <CredentialElement>
                        <CredentialsSubHeader>Libraries</CredentialsSubHeader>
                        <div>NodeJS, Express, React, Redux, Pandas, Numpy, ROS</div>
                    </CredentialElement>

                    <CredentialElement>
                        <CredentialsSubHeader>Other</CredentialsSubHeader>
                        <div>MongoDB, SQL, GraphQL, Kubernetes, Docker, AWS, Azure, GCP</div>
                    </CredentialElement>
                </CredentialsSubcontainer>
            </div>
        </CredentialsContainer>

    </CredentialsSupercontainer>
}

export const CredentialsSupercontainer = styled.div`

`

export const CredentialsContainer = styled.div`
    padding-left: 80px;
    padding-right: 80px;
    max-width: 1000px;
`

export const AcademicCredentials = styled.div`
    cursor: pointer;
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
