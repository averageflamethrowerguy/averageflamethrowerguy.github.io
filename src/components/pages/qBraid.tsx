import { IndividualProject, MiddleContainer, ProjectContainer, ProjectDescription, ProjectElement, TextHeader } from "../elements/CommonElements";
import { CredentialsContainer, AcademicCredentials, CredentialsHeader, CredentialsSubHeader, CredentialsSubcontainer } from "./CredentialsPanel";
import { TopBar } from "../elements/TopBar";
import styled from 'styled-components'
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { Qbook } from "../projects/qBook";
import { QbraidLogin } from "../projects/qBraidLogin";
import { QbraidJLab } from "../projects/qBraidJLab";
import { QbraidLanding } from "../projects/qBraidLanding";


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
            <Qbook />
            <QbraidLogin />
            <QbraidJLab />
            <QbraidLanding />
        </ProjectContainer>
        <div style={{marginBottom: 200}}></div>
    </div>)
}
