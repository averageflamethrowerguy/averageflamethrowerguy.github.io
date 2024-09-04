import { MiddleContainer, TextHeader } from "../elements/CommonElements";
import { CredentialsContainer, AcademicCredentials, CredentialsHeader, CredentialsSubHeader, CredentialsSubcontainer } from "./CredentialsPanel";
import { TopBar } from "../elements/TopBar";
import styled from 'styled-components'
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";


export function Qbraid() {
    const navigate = useNavigate();

    return (<div style={{textAlign: "left"}}>
        <TopBar />

        <TextHeader>Company Description</TextHeader>
        <div style={{textAlign: "center"}}>Website: <a href="https://qbraid.com">https://qbraid.com</a></div>

        <MiddleContainer>
            qBraid is a quantum computing startup that I co-founded with a team of quantum computing
            and computer science students from Dartmouth, MIT, and UC Berkeley. qBraid aims to reduce 
            the barriers for effective utilization of quantum computers by providing practitioners
            with learning and research tools that allow for language and hardware-agnostic programming.
        </MiddleContainer>

        <TextHeader>My Role</TextHeader>
        <MiddleContainer>
            As a software engineer at qBraid, I built and maintained the company's landing page, API,
            login infrastructure, and Kubernetes backend for our developer platform. I also led a team to build and 
            maintain our learning platform, qbook.
        </MiddleContainer>

        <ProjectContainer>
            <IndividualProject onClick={() => window.location.href = "https://qbook.qbraid.com"}>
                <CredentialsHeader>qBook</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I built a custom quantum learning platform, <a href="https://qbook.qbraid.com">https://qbook.qbraid.com</a>,
                            to build a sleeker and quicker place to learn the basics of quantum computing. Qbook is built in React/Typescript,
                            with a Jupyter Enterprise Gateway deployment on Kubernetes as a backend.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>Typescript</div>
                            <div>React</div>
                            <div>AWS</div>
                            <div>Kubernetes</div>
                            <div>Docker</div>
                            <div>Websockets</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
            <IndividualProject onClick={() => window.location.href = "https://account.qbraid.com"}>
                <CredentialsHeader>Login & Account Management</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I built and maintained our login and account managment infrastructure, using AWS Cognito for 
                            authentication and Stripe for payment processing. In addition, I modified Cognito's login flow
                            to allow us to log into multiple domains using one set of cookies.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Stripe</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>Typescript</div>
                            <div>React</div>
                            <div>AWS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
            <IndividualProject onClick={() => window.location.href = "https://lab.qbraid.com"}>
                <CredentialsHeader>JupyterLab Backend</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            Our Lab platorm <a href="https://lab.qbraid.com">https://lab.qbraid.com</a> is a web-accessable, preconfigured 
                            version of Jupyterlab intentended for use by quantum researchers.
                            I deployed JupyterHub on Kubernetes as the backend for our Lab platform. I then customized the 
                            deployment to increase uptime, allow alternative code 
                            execution kernels, and improve login flow.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Kubernetes</div>
                            <div>Docker</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>AWS</div>
                            <div>EKS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
            <IndividualProject onClick={() => window.location.href = "https://qbraid.com"}>
                <CredentialsHeader>Landing Page</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            The landing page is the first page accessable on <a href="https://qbraid.com">https://qbraid.com</a>.
                            When at qBraid, I built pages showcasing our educational and research product offerings, as well as 
                            our career page.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>AWS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
        </ProjectContainer>
        <div style={{marginBottom: 200}}></div>
    </div>)
}

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-left: 80px;
    padding-right: 80px;
    flex-wrap: wrap;
`

export const IndividualProject = styled.div`
    padding: 5px;
    margin: -5px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    max-width: 450px;`

export const ProjectDescription = styled.div`
    width: calc(100% - 150px);
`

export const ProjectElement = styled.div`
    width: 150px;
    margin-left: 15px;
`