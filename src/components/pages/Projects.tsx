import { useState } from "react";
import { BodyContainer, MiddleContainer, ProjectContainer, TextHeader } from "../elements/CommonElements";
import { TopBar } from "../elements/TopBar";
import styled from 'styled-components'
import { Qbook } from "../projects/qBook";
import { QbraidJLab } from "../projects/qBraidJLab";
import { QbraidLanding } from "../projects/qBraidLanding";
import { QbraidLogin } from "../projects/qBraidLogin";
import { YayNaySurveys } from "../projects/YayNaySurveys";
import { YayNayTextingEmailing } from "../projects/YaynayTextingEmailing";

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
            object: <Qbook />,
            flags: ["HTML", "Javascript", "Typescript", "React", "AWS", "Docker", "Kubernetes", "Python", "Regex", "NodeJS", "Websockets", "CSS"]
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
            flags: ["HTML", "Javascript", "Typescript", "React", "CSS", "AWS", "Stripe", "MongoDB", "NodeJS"]
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
                                    ["Javascript", "Typescript", "C", "C++", "Go", "Java", "CUDA", "Assembly", "HTML", "CSS"].map(filter => {
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
                            <ProjectFilterHeader>Other</ProjectFilterHeader>
                            <ProjectFilterBody>
                                {
                                    ["Kubernetes", "Docker", "AWS", "Azure", "GCP", "Websockets"].map(filter => {
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

`

export const ProjectFilterColumn = styled.div`
    min-width: 170px;
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