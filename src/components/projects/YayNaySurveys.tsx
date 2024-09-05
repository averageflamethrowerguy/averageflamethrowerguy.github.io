import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function YayNaySurveys() {
    return (
        <IndividualProject>
                <CredentialsHeader>YayNay: Surveys</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I added several new question types to YayNay Surveys in the frontend and backend. As we were scaling out to 
                            support vastly greater traffic, I optimized our backend to support 20x higher traffic, via simplifying API 
                            routes and lightening database queries. I also built our payment system.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>Typescript</div>
                            <div>React</div>
                            <div>AWS</div>
                            <div>MongoDB</div>
                            <div>Stripe</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}