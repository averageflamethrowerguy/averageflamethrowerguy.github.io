import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function ProjectEuler() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/current_chungus"}>
                <CredentialsHeader>Personal: Project Euler</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            (Fall 2021) In my spare time, I solved the 55 first Project Euler problems. In addition to getting familiarity with some
                            algorithms (like dynamic programming) that I previously had no exposure to, I decided to switch languages every
                            10 problems, which each new language being one I was previously unfamiliar with.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                                <div>C</div>
                                <div>C++</div>
                                <div>CUDA</div>
                                <div>D</div>
                                <div>Rust</div>
                                <div>Cobol</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}