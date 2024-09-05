import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function Qbook() {
    return (
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
                            <div>NodeJS</div>
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
    )
}