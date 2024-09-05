import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function BitCPU() {
    return (
        <IndividualProject onClick={() => {
            alert("This repository is not public! Please ask for access at elliotpotter496@gmail.com")
        }}>
                <CredentialsHeader>Dartmouth: 32 bit CPU</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                        I designed and simulated a 32-bit CPU executing a simplified Assembly command set. I started
                        by learning the basics of digital logic; I then designed increasingly complicated components of the CPU (adders, ALUs, 
                        registers), and eventually assembled them into a simple 32-bit CPU.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Digital Logic</div>
                            <div>Microcode</div>
                            <div>Finite State Machines</div>
                            <div>CPU Architecture</div>
                            <div>Assembly</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}