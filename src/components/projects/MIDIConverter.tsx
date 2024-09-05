import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function MIDIConverter() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please ask me for access at elliotpotter496@gmail.com")}>
                <CredentialsHeader>Dartmouth: MIDI Keyboard Converter</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                                I led a team of two people in creating a MIDI keyboard converter. We used a Field Programmable Gate Array 
                                (FPGA), programmed in VHDL. This device is programmed to take MIDI keyboard signals and convert them into 
                                signals that can be used to generate a tone by an analog speaker.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Digital Logic</div>
                            <div>VHDL</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}