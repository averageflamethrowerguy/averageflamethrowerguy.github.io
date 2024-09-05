import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function NimbleMessaging() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please email elliotpotter496@gmail.com for access")}>
                <CredentialsHeader>Personal: Nimble Messaging</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I wrote a messaging application for a Nimble Robotics interview. The frontend is a React application, and 
                            the backend is a REST server written in Go backed by a MongoDB database. The repository contains deployment
                            instructions for both the MongoDB database and the Go backend.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>React</div>
                            <div>Javascript</div>
                            <div>Typescript</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Go</div>
                            <div>Docker</div>
                            <div>Kubernetes</div>
                            <div>MongoDB</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}