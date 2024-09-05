import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function QbraidLogin() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://account.qbraid.com"}>
                <CredentialsHeader>qBraid: Login & Account Management</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I built and maintained our login and account management infrastructure, using AWS Cognito for 
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
                            <div>Express</div>
                            <div>AWS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}