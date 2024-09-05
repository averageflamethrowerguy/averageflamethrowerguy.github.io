import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function ChungOS() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/current_chungus"}>
                <CredentialsHeader>Dartmouth: ChungOS</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I led a team of two people
                            to implement our own "simple" operating system, called ChungOS. We mapped our own virtual memory, protected our address space,
                            and implemented our own traps, syscalls, and synchronization primatives (locks, pipes, queues, cvars). Ultimately,
                            our operating system was able to accept user commands and simultaneously execute multiple processes.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                                <div>Multiprocessing</div>
                                <div>Race Conditions</div>
                                <div>Virtual Memory</div>
                                <div>Traps & Syscalls</div>
                                <div>Synchronization</div>
                                <div>C</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}