import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function LatinLearning() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/latin-learning-frontend"}>
                <CredentialsHeader>Personal: Latin Learning</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            I've always struggled learning both spoken and written languages. At Dartmouth, I signed up to learn Latin. To 
                            improve my vocabulary and grammar comprehension, I built a simple React app where I learned Latin words with modern
                            techniques such as spaced repetition. This learning strategy was extremely effective, as I aced virtually all 
                            grammar quizzes and got top-quartile grades in most tests, despite having a harder time understanding the language 
                            than my peers.
                        </div>
                    </ProjectDescription>

                    <ProjectElement>
                        <CredentialsSubHeader>Technologies</CredentialsSubHeader>
                        <div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Javascript</div>
                            <div>React</div>
                        </div>
                    </ProjectElement>
                </CredentialsSubcontainer>
            </IndividualProject>
    )
}