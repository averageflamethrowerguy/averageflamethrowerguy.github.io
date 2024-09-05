import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function RayTracer() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/BoxianWang/cs77-final-project"}>
                <CredentialsHeader>Dartmouth: GPU Ray Tracing</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                        I led a team of three people in implementing ray tracing using CUDA on an RTX 3080.
                                Using a source that provided us a basis in C++, we first wrote a naive CUDA implementation, and then worked on further 
                                performance improvements. We ultimately were able to achieve a 2000x speedup over a naive C++ implementation.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Ray Tracing</div>
                            <div>CUDA</div>
                            <div>C++</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}