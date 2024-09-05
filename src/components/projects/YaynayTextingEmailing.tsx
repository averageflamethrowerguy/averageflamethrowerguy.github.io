import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function YayNayTextingEmailing() {
    return (
        <IndividualProject>
                <CredentialsHeader>Mass Texting & Emailing</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            In order to support our new mass texting & emailing product, I integrated with 3rd-party providers, including 
                            Twilio and SendGrid, to send our messages. I built monitoring infrastructure that tracked deliverability, open 
                            rates, and click-through rates, as well as automatically unsubscribing inactive users. Ultimately, my infrastructure 
                            was able to support hundreds of thousands of messages per day.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>Javascript</div>
                            <div>Express</div>
                            <div>React</div>
                            <div>AWS</div>
                            <div>MongoDB</div>
                            <div>NodeJS</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}