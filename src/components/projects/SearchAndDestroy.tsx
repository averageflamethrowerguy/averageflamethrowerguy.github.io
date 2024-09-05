import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function SearchAndDestroy() {
    return (
        <IndividualProject onClick={() => {
            window.location.href = "https://github.com/isaac-400/cs81-final"
        }}>
                <CredentialsHeader>Dartmouth: Search and Destroy Robot</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                        I led a four-person team in creating a search-and-destroy robot, which would take a known map of a closed patrol area, compute an optimal shortest-path 
                        route to traverse the entire patrol area, patrol the route, and chase and ram any anomalous objects in the area.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Robotics</div>
                            <div>ROS</div>
                            <div>Python</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}