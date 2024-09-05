import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function HiddenMarkov() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please email elliotpotter496@gmail.com for access")}>
                <CredentialsHeader>Dartmouth: Hidden Markov Model</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I led a team of two people to create a Hidden Markov Model in Java to identify parts-of-speech in 
                            input text. We found our model had fairly good performance on data similar to the training set, but 
                            performance fell off with more novel textual data.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                                <div>Java</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}