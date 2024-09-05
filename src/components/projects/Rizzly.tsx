import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function Rizzly() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/perfect10-dating/perfect10-frontend"}>
                <CredentialsHeader>Personal: Rizzly</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I built a custom dating web app in React/Typescript/MongoDB. The intention for the app was to move away from matchmaking
                            people based on in-app interactions (which all dating apps do currently), and to instead do so based on their in-person interactions. 
                            I collected both theory and design feedback from my friends, and launched the app at Dartmouth. While there was significant interest in the app 
                            (~80 signups in the first month), I never reached the network size necessary to match people in a reasonable span of time.
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
                            <div>Express</div>
                            <div>React</div>
                            <div>MongoDB</div>
                            <div>AWS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}