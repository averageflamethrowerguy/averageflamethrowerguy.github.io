import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function TinySearchEngine() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please ask me for access at elliotpotter496@gmail.com")}>
                <CredentialsHeader>Dartmouth: Tiny Search Engine</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            The Tiny Search Engine is a three-component C application, which crawls web pages to a certain depth, indexes 
                            each webpage based on relative word frequency, and a querier, which returns documents ordered by query word frequency.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>C</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}