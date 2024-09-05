import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function NameAnagrams() {
    return (
        <IndividualProject onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/name-anagrams"}>
                <CredentialsHeader>Personal: Name Anagrams</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                            Many of my friends were coming up with funny anagrams of their names. I realized that, if I built an 
                            intelligent brute-force strategy, I could pick and choose a much funnier anagram than would otherwise be
                            possible. Therefore, I wrote a crawler in Java which crawled Wikipedia and Urban Dictionary, making two word
                            frequency lists. I figured that "funny" words would occur much more frequently on Urban Dictionary than Wikipedia.
                            Using a ranked funny word list, I then brute-forced my own name. Sure enough, many of the anagrams were pretty funny.
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