import { IndividualProject, MiddleContainer, ProjectContainer, ProjectDescription, ProjectElement, TextHeader } from "../elements/CommonElements";
import { TopBar } from "../elements/TopBar";
import { YayNaySurveys } from "../projects/YayNaySurveys";
import { YayNayTextingEmailing } from "../projects/YaynayTextingEmailing";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "./CredentialsPanel";

export function YayNay() {
    return <div style={{textAlign: "left"}}>
        <TopBar />
        <TextHeader>Company Description</TextHeader>
        <MiddleContainer>
            YayNay (now Bellwether Insights) was a govtech startup based in Washington DC. While I was working for them, they were 
            a political survey and donation platform. We also branched out into mass emailing and text messaging voters and doners on 
            behalf of candidates.
        </MiddleContainer>

        <TextHeader>My Role</TextHeader>
        <MiddleContainer>
            As a software engineer at YayNay, I improved the company's survey frontend, reduced the database overhead for receiving survey 
            responses, built the company's payment platform, and led the initiative to create a mass emailing and texting product for the 
            company.
        </MiddleContainer>

        <ProjectContainer>
            <YayNaySurveys />
            <YayNayTextingEmailing />
        </ProjectContainer>
        <div style={{marginBottom: 200}}></div>
    </div>
}