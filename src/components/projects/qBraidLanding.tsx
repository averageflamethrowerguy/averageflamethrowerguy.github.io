import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function QbraidLanding() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://qbraid.com"}>
                <CredentialsHeader>qBraid: Landing Page</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            The landing page is the first page accessible on <a href="https://qbraid.com">https://qbraid.com</a>.
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
    )
}