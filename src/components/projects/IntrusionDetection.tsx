import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function IntrusionDetection() {
    return (
        <IndividualProject onClick={() => {
            window.location.href = "https://github.com/averageflamethrowerguy/Syscall-Anomaly-Detection"
        }}>
                <CredentialsHeader>Dartmouth: Sycall Intrusion Detection</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                        I led a two-person team 
                                in making a decision-making system for detecting malicious systems running on a Linux machine. This approach used 
                                an SVM to categorize syscall sequences as benign or anomoulous, and then used a sampling procedure and decision rule
                                to categorize an overall program as benign or malicious.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                        <div>Python</div>
                                <div>SVM</div>
                                <div>Numpy</div>
                                <div>Pandas</div>
                                <div>Data Processing</div>
                                <div>Markov Models</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}