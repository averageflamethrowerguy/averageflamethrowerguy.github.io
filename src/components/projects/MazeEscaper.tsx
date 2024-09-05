import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function MazeEscaper() {
    return (
        <IndividualProject onClick={() => {
            window.location.href = "https://github.com/averageflamethrowerguy/cs69-final-project"
        }}>
                <CredentialsHeader>Dartmouth: Maze Escaper Robot System</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                        I led a five-person team in designing and simulating a multirobot system which 
                        explores a maze, with robots exchanging information when they interact with one another. Once a robot is made aware of an exit, 
                                it uses Djikstra's algorithm to plan a shortest-path to that exit.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Robotics</div>
                            <div>ROS</div>
                            <div>Python</div>
                            <div>SLAM</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}