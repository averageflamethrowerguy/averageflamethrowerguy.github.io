import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function NimbleBall() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please email elliotpotter496@gmail.com for access")}>
                <CredentialsHeader>Personal: Nimble Ball</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I wrote a Python application for a Nimble Robotics interview. The backend simulates a bouncing ball and transmits images 
                            of the bouncing ball to the frontend. The frontend passes these images to a separate process, which calculates
                            ball positions using OpenCV. These positions are then sent back to the backend for comparison.
                            Both server and client can be hosted on Kubernetes.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Python</div>
                            <div>OpenCV</div>
                            <div>Multiprocessing</div>
                            <div>Multithreading</div>
                            <div>Docker</div>
                            <div>Kubernetes</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}