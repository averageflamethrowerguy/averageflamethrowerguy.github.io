import { IndividualProject, ProjectDescription, ProjectElement } from "../elements/CommonElements";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "../pages/CredentialsPanel";

export function NuggetsGame() {
    return (
        <IndividualProject onClick={() => alert("This repository is not public! Please ask me for access at elliotpotter496@gmail.com")}>
                <CredentialsHeader>Dartmouth: Nuggets Game</CredentialsHeader>
                <CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0}}>
                        <CredentialsSubHeader>Description</CredentialsSubHeader>
                        <div>
                                I joined a four-person team in creating Nuggets, a simple roguelike dungeon game. This game is written in 
                                C, and allows multiple players to simulaneously join a single server and compete for game resources. 
                                I extended the game to allow random generation of valid maps.
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