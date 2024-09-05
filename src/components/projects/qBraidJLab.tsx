import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function QbraidJLab() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://lab.qbraid.com"}>
                <CredentialsHeader>qBraid: JupyterLab Backend</CredentialsHeader>
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
    )
}