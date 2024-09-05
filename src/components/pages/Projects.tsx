import { useState } from "react";
import { BodyContainer, MiddleContainer, ProjectContainer, ProjectElement, TextHeader } from "../elements/CommonElements";
import { TopBar } from "../elements/TopBar";
import styled from 'styled-components'
import { Qbook } from "../projects/qBook";
import { QbraidJLab } from "../projects/qBraidJLab";
import { QbraidLanding } from "../projects/qBraidLanding";
import { QbraidLogin } from "../projects/qBraidLogin";
import { YayNaySurveys } from "../projects/YayNaySurveys";
import { YayNayTextingEmailing } from "../projects/YaynayTextingEmailing";
import { ChungOS } from "../projects/ChungOS";
import { BitCPU } from "../projects/32bitCPU";
import { SearchAndDestroy } from "../projects/SearchAndDestroy";
import { MazeEscaper } from "../projects/MazeEscaper";
import { IntrusionDetection } from "../projects/IntrusionDetection";
import { RayTracer } from "../projects/RayTracer";
import { MIDIConverter } from "../projects/MIDIConverter";
import { NuggetsGame } from "../projects/NuggetsGame";
import { TinySearchEngine } from "../projects/TinySearchEngine";
import { NameAnagrams } from "../projects/NuggetsGame copy";
import { ProjectEuler } from "../projects/ProjectEuler";
import { Rizzly } from "../projects/Rizzly";
import { LatinLearning } from "../projects/LatinLearning";
import { NimbleBall } from "../projects/NimbleBall";
import { NimbleMessaging } from "../projects/NimbleMessaging";
import { HiddenMarkov } from "../projects/HiddenMarkov";

interface Project {
    object: any,
    flags: string[],
}

export function Projects() {
    const [filters, setFilters] = useState(new Set() as Set<string>)

    // update the set of filters
    const modifyFilters = (newFilter: string) => {
        const newFilters = new Set(filters)

        // if the filter already exists, delete it
        if (filters.has(newFilter)) {
            newFilters.delete(newFilter)
        }
        // otherwise add it
        else {
            newFilters.add(newFilter)
        }

        setFilters(newFilters)
    }

    const projects = [
        {
            object: <HiddenMarkov />,
            flags: ["Java"],
        },
        {
            object: <NimbleMessaging />,
            flags: ["HTML", "CSS", "Javascript", "Typescript", "React", "Go", "Docker", "Kubernetes", "MongoDB"],
        },
        {
            object: <NimbleBall />,
            flags: ["Python", "OpenCV", "Multiprocessing","Multithreading", "Docker", "Kubernetes"],
        },
        {
            object: <LatinLearning />,
            flags: ["HTML", "Javascript", "React","CSS"],
        },
        {
            object: <Rizzly />,
            flags: ["HTML", "Javascript", "Typescript", "React", "AWS", "CSS", "Express", "MongoDB"],
        },
        {
            object: <ProjectEuler />,
            flags: ["C", "C++", "CUDA", "D", "Rust", "Cobol"],
        },
        {
            object: <NameAnagrams />,
            flags: ["Java"]
        },
        {
            object: <TinySearchEngine />,
            flags: ["C"]
        },
        {
            object: <NuggetsGame />,
            flags: ["C"]
        },
        {
            object: <MIDIConverter />,
            flags: ["VHDL", "Digital Logic"]
        },
        {
            object: <RayTracer />,
            flags: ["C++", "CUDA", "Ray Tracing"]
        },
        {
            object: <IntrusionDetection />,
            flags: ["Python", "Numpy", "Pandas"]
        },
        {
            object: <MazeEscaper />,
            flags: ["Robotics", "Python", "ROS"]
        },
        {
            object: <SearchAndDestroy />,
            flags: ["Robotics", "Python", "ROS"]
        },
        {
            object: <BitCPU />,
            flags: ["Assembly", "Digital Logic"]
        },
        {
            object: <ChungOS />,
            flags: ["C", "Multiprocessing", "Synchronization"]
        },
        {
            object: <Qbook />,
            flags: ["HTML", "Javascript", "Typescript", "React", "AWS", "Docker", "Kubernetes", "Python", "Regex", "NodeJS", "Websockets", "CSS", "Express"]
        },
        {
            object: <QbraidJLab />,
            flags: ["HTML", "Javascript", "CSS", "AWS", "Docker", "Kubernetes"]
        },
        {
            object: <QbraidLanding />,
            flags: ["HTML", "Javascript", "CSS", "AWS"]
        },
        {
            object: <QbraidLogin />,
            flags: ["HTML", "Javascript", "Typescript", "React", "CSS", "AWS", "Stripe", "MongoDB", "NodeJS", "Express"]
        },
        {
            object: <YayNaySurveys />,
            flags: ["HTML", "Javascript", "Typescript", "React", "CSS", "AWS", "Stripe", "MongoDB", "NodeJS"]
        },
        {
            object: <YayNayTextingEmailing />,
            flags: ["Javascript", "Express", "React", "AWS", "MongoDB", "NodeJS"]
        },
        


    ] as Project[]
    // filter the list of projects
    const filteredProjects = projects.filter(project => {
        for (let filter of Array.from(filters)) {
            let found = false;
            for (let flag of project.flags) {
                if (flag == filter) {
                    found = true;
                    break
                }
            }
            if (!found) {
                return false
            }
        }
        return true
    })


    return <div>
        <TopBar />

        <BodyContainer>
            <div>
                <TextHeader style={{marginTop: 100}}>My Projects</TextHeader>
                <ProjectFilterPanel>
                    <ProjectFilterFlexbox>
                        <ProjectFilterColumn>
                            <ProjectFilterHeader>Language</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["Javascript", "Typescript", "Python", "C", "C++", "Go", "Java", "CUDA", "Assembly", "VHDL", "HTML", "CSS"].map(filter => {
                                        return (
                                            <ProjectFilterElement>
                                                <ProjectFilterCheckbox onClick={() => modifyFilters(filter)} />
                                                <ProjectFilterText>{filter}</ProjectFilterText>
                                            </ProjectFilterElement>
                                        )
                                    })
                                }
                                
                            </ProjectFilterBody>
                        </ProjectFilterColumn>

                        <ProjectFilterColumn>
                            <ProjectFilterHeader>Library</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["NodeJS", "Express", "React", "Redux", "Pandas", "Numpy", "ROS"].map(filter => {
                                        return (
                                            <ProjectFilterElement>
                                                <ProjectFilterCheckbox onClick={() => modifyFilters(filter)} />
                                                <ProjectFilterText>{filter}</ProjectFilterText>
                                            </ProjectFilterElement>
                                        )
                                    })
                                }
                                
                            </ProjectFilterBody>
                        </ProjectFilterColumn>

                        <ProjectFilterColumn>
                            <ProjectFilterHeader>Database</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["MongoDB", "SQL", "GraphQL"].map(filter => {
                                        return (
                                            <ProjectFilterElement>
                                                <ProjectFilterCheckbox onClick={() => modifyFilters(filter)} />
                                                <ProjectFilterText>{filter}</ProjectFilterText>
                                            </ProjectFilterElement>
                                        )
                                    })
                                }
                                
                            </ProjectFilterBody>
                        </ProjectFilterColumn>

                        <ProjectFilterColumn>
                            <ProjectFilterHeader>Cloud Provider</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["AWS", "Azure", "GCP"].map(filter => {
                                        return (
                                            <ProjectFilterElement>
                                                <ProjectFilterCheckbox onClick={() => modifyFilters(filter)} />
                                                <ProjectFilterText>{filter}</ProjectFilterText>
                                            </ProjectFilterElement>
                                        )
                                    })
                                }
                                
                            </ProjectFilterBody>
                        </ProjectFilterColumn>

                        <ProjectFilterColumn>
                            <ProjectFilterHeader>Other</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["Kubernetes", "Docker", "Websockets", "Multiprocessing", "Multithreading", "Digital Logic", "Robotics"].map(filter => {
                                        return (
                                            <ProjectFilterElement>
                                                <ProjectFilterCheckbox onClick={() => modifyFilters(filter)} />
                                                <ProjectFilterText>{filter}</ProjectFilterText>
                                            </ProjectFilterElement>
                                        )
                                    })
                                }
                                
                            </ProjectFilterBody>
                        </ProjectFilterColumn>
                    </ProjectFilterFlexbox>
                    <div style={{textAlign: "center", fontSize: 16}}>
                        Displaying {filteredProjects.length} out of {projects.length} projects
                    </div>
                </ProjectFilterPanel>
            </div>
            
            <ProjectContainer>
            {
                // render all the filtered projects
                filteredProjects.map((project) => {
                    return project.object
                })
            }
            </ProjectContainer>
            
        </BodyContainer>
    </div>
}

export const ProjectFilterPanel = styled.div`
    width: fit-content;
    margin: 0 auto;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
`

export const ProjectFilterFlexbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
`

export const ProjectFilterColumn = styled.div`
    min-width: 170px;
    margin-bottom: 25px;
`

export const ProjectFilterHeader = styled.div`
    font-size: 20px;
    border-bottom: 1px solid black;
    width: fit-content;
`

export const ProjectFilterBody = styled.div`

`

export const ProjectFilterElement = styled.div`
    display: flex;
`

export const ProjectFilterCheckbox = (props:any) => (
    <input type="checkbox" style={{width: 20, height: 20}} {...props} />
)

export const ProjectFilterText = styled.div`
`