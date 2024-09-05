import { BodyContainer, MiddleContainer, TextHeader } from "../elements/CommonElements";
import { TopBar } from "../elements/TopBar";
import { CredentialsHeader, CredentialsSubcontainer, CredentialsSubHeader } from "./CredentialsPanel";
import { IndividualProject, ProjectContainer, ProjectDescription, ProjectElement } from "./qBraid";
import styled from 'styled-components'

export function Academics() {
    return <BodyContainer>
        <TopBar></TopBar>

        <div>
            <TextHeader>Dartmouth College</TextHeader>
            <MiddleContainer>
                <div style={{textAlign: "center", width: "100%", justifyContent: "space-between", fontSize: 16, marginTop: -50, marginBottom: 30}}>
                    <div>2019-2024</div>
                    <div>Computer Science Major</div>
                    <div>GPA: 3.90/4.0</div>
                    <div>Magna Cum Laude</div>
                </div>
                <div>
                    I studied Computer Science at Dartmouth College, discovering a love for complex systems, algorithms and 
                    robotics. In addition to my academic pursuits, I volunteered as a leader for the Dartmouth Outdoor Club,
                    leading groups of 3-12 students in hikes in the nearby White Mountains.
                </div>
            </MiddleContainer>

            <TextHeader>
                Professor Testimony
            </TextHeader>
            <MiddleContainer>
                <ProfessorTestimony>
                    "Elliot was a pleasure to have in the classroom, participated actively during class,
                    and was one of only two As in the whole class." - Wojciech K. Jarosz, Computer Graphics
                </ProfessorTestimony>
                <ProfessorTestimony>
                    "Unwavering committment to learning in the class through participation and hard work in the assignments."
                        - Alberto Quattrini Li, Introduction to Robotics
                </ProfessorTestimony>
                <ProfessorTestimony>
                    "I was impressed with Elliot's level of engagement in the course. He asked very deep and 
                    thoughtful questions that went well beyond the level of the course and that challenged both professors!"
                        - Robyn M. Millan, Introductory Physics (Honors)
                </ProfessorTestimony>

            </MiddleContainer>

            <TextHeader>
                My Favorite Classes
            </TextHeader>
            <ProjectContainer>
                <IndividualClass onClick={() => window.location.href = "https://www.cs.dartmouth.edu/~deepc/Courses/S20/CS31.html"}>
                    <CredentialsHeader>Computer Algorithms</CredentialsHeader>
                    <ClassHeaderDescription>Winter 2024 (the provided link is a class for source material)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                In this class, I learned how to develop algorithms and prove their correctness. This class covered 
                                recursive algorithms, dynamic programming, and graph algorithms.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Recursion</div>
                                <div>Dynamic Programming</div>
                                <div>Graph Algorithms</div>
                                <div>DFS</div>
                                <div>BFS</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            I learned that I have an excellent intuition for algorithm design, particularly for dynamic programming.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://www.cs.dartmouth.edu/~deepc/rand-lecture-notes.htm"}>
                    <CredentialsHeader>Randomized Algorithms</CredentialsHeader>
                    <ClassHeaderDescription>Spring 2024 (the provided link is a guide for class material)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                In this class, I learned how to develop randomized algorithms and prove their correctness. In this class, we 
                                discussed computational advantages of randomized algorithms, boosting strategies for increasing algorithm success rates,
                                importance sampling, and universal hash functions.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Proofs</div>
                                <div>Boosting</div>
                                <div>Poisson Approximation</div>
                                <div>Importance Sampling</div>
                                <div>Hashing</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            This was probably the most fun class I took at Dartmouth, because so many algorithms required thinking in counter-intuitive ways.
                            I often found myself staring at a problem for hours before I could solve it, but then I'd make the mental leap and the solution was 
                            beautifully simple.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/current_chungus"}>
                    <CredentialsHeader>Operating Systems</CredentialsHeader>
                    <ClassHeaderDescription>Fall 2022 (the provided link links to my operating system)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                This class begins by teaching the basics of multithreading and multiprocessing; we then worked in teams of 2-3 
                                to implement our own "simple" operating systems. We mapped our own virtual memory, protected our address space,
                                and implemented our own traps, syscalls, and synchronization primatives (locks, pipes, queues, cvars). Ultimately,
                                our operating system was able to accept user commands and simultaneously execute multiple processes.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Multithreading</div>
                                <div>Multiprocessing</div>
                                <div>Race Conditions</div>
                                <div>Virtual Memory</div>
                                <div>Traps & Syscalls</div>
                                <div>Synchronization</div>
                                <div>C</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            This class gave me a great understanding for the complexities of operating system design, as well as a very deep understanding
                            of how synchronization primatives are implemented.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://dartmouth.smartcatalogiq.com/en/2022/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-51/"}>
                    <CredentialsHeader>Computer Architecture</CredentialsHeader>
                    <ClassHeaderDescription>Spring 2022 (the provided link is a guide for class material)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                In this class, I designed and simulated a 32-bit CPU executing a simplified Assembly command set. The class started
                                by teaching the basics of digital logic; we then designed increasingly complicated components of the CPU (adders, ALUs, 
                                registers), and eventually assembled them into a simple 32-bit CPU.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Digital Logic</div>
                                <div>Microcode</div>
                                <div>Finite State Machines</div>
                                <div>CPU Architecture</div>
                                <div>Assembly</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            One of my biggest takeaways from this class was how important developer tooling is for efficiently debugging a system. When I 
                            built my 32-bit CPU, one of the first things I did was construct a "traffic light", which simply showed what state the CPU was in 
                            at any given time (i.e., is it reading memory?). This allowed me to quickly understand when my CPU deviated from expected program 
                            behavior, and saved me a full day compared to my peers.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://github.com/isaac-400/cs81-final"}>
                    <CredentialsHeader>Introduction to Robotics</CredentialsHeader>
                    <ClassHeaderDescription>Fall 2021 (the provided link is to our final robot repository)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                This class taught the basics of robotics, including localization and sensing techniques, motion planning, and managing uncertainty. I lead 
                                a four-person team in creating a search-and-destroy robot, which would take a known map of a closed patrol area, compute an optimal shortest-path 
                                route to traverse the entire patrol area, patrol the route, and chase and ram any anomalous objects in the area.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Robotics</div>
                                <div>SLAM</div>
                                <div>ROS</div>
                                <div>Python</div>
                                <div>Docker</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            One of my biggest takeaways from this class was effective team management. I realized early on that my team was composed of 
                            people with a range of skill levels, and some of the less experienced people in the group would likely need additional support
                            in completing their parts of the robot. Ultimately, I budgeted extra time at the end of the project to help my team members cross
                            the finish line, but I asked that they do as much as they could early on. This ended up working pretty well, with us all doing a 
                            long hackathon on my PC at the end of the project. Everyone contributed meaningfully, and the project was done satisfactorily.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/cs69-final-project"}>
                    <CredentialsHeader>Multirobot Systems</CredentialsHeader>
                    <ClassHeaderDescription>Fall 2022 (the provided link is to our final robot repository)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                This class taught the basics of programming multirobot systems. It included swarming behaviors (flocking), robot coordination and
                                path planning. For our final project, I led a five-person team, where we designed and simulated a multirobot system which would 
                                explore a maze, with robots exchanging information when they interacted with one another. Once a robot is made aware of an exit, 
                                it uses Djikstra's algorithm to plan a shortest-path to that exit.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Robotics</div>
                                <div>Docker</div>
                                <div>SLAM</div>
                                <div>ROS</div>
                                <div>Python</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            This final project impressed upon me just how inaccurate robot telemetry data can be. Even though we used robots driving through 
                            a simulated environment, we typically had difficulty getting SLAM data from two different robots to line up. For real-world applications,
                            we expect this to be even worse. Therefore, for future robot operations, I plan to use a combination of localization strategies
                            to improve robot telemetry data, including GPS data, compass bearings, and LIDAR data.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://github.com/averageflamethrowerguy/Syscall-Anomaly-Detection"}>
                    <CredentialsHeader>Decision Making Under Uncertainty</CredentialsHeader>
                    <ClassHeaderDescription>Spring 2024 (the provided link is to our final repository)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                This class taught many of the algorithms for making decisions under uncertainty, including Bayesian networks,
                                Markov models, multi-armed bandits, and Monte-Carlo simulation. For my final project, I led a two-person team 
                                in making a decision-making system for detecting malicious systems running on a Linux machine. This approach used 
                                an SVM to categorize syscall sequences as benign or anomoulous, and then used a sampling procedure and decision rule
                                to categorize an overall program as benign or malicious.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Python</div>
                                <div>SVM</div>
                                <div>Numpy</div>
                                <div>Pandas</div>
                                <div>Data Processing</div>
                                <div>Markov Models</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            Since I was taking this class at the same time as Randomized Algorithms, I had an incredible (and unexpected) opportunity 
                            for cross-learning. Many of the algorithms we were taught in this class used techniques I had learned in Randomized Algorithms,
                            most prominantly importance sampling. 
                        </div>
                    </ProjectDescription>
                </IndividualClass>
                <IndividualClass onClick={() => window.location.href = "https://github.com/BoxianWang/cs77-final-project?tab=readme-ov-file"}>
                    <CredentialsHeader>Computer Graphics</CredentialsHeader>
                    <ClassHeaderDescription>Spring 2022 (the provided link is to our final repository)</ClassHeaderDescription>
                    <CredentialsSubcontainer>
                        <ProjectDescription style={{marginLeft: 0}}>
                            <CredentialsSubHeader>Description</CredentialsSubHeader>
                            <div>
                                This class covered the basics of computer graphics, including ray tracing, object meshes, animation, transformations,
                                and rasterization. For my final project, I led a team of three people in implementing ray tracing using CUDA on an RTX 3080.
                                Using a source that provided us a basis in C++, we first wrote a naive CUDA implementation, and then worked on further 
                                performance improvements. We ultimately were able to achieve a 2000x speedup over a naive C++ implementation.
                            </div>
                        </ProjectDescription>

                        <ProjectElement style={{minWidth: 200}}>
                            <CredentialsSubHeader>Skills</CredentialsSubHeader>
                            <div>
                                <div>Ray Tracing</div>
                                <div>Python</div>
                                <div>CUDA</div>
                                <div>C++</div>
                                <div>OpenGL</div>
                            </div>
                        </ProjectElement>
                    </CredentialsSubcontainer>
                    <ProjectDescription style={{marginLeft: 0, width: "100%", marginBottom: 10}}>
                        <CredentialsSubHeader>Takeaways</CredentialsSubHeader>
                        <div>
                            The final project provided me an excellent opportunity to implement some of my learnings from Computer Architecture, which I was 
                            taking at the same time. For instance, I tried to improve the locality of my bounding tree implementation by putting the objects 
                            of the bounding tree onto a backing array (this was ultimately unsuccessful). I also worked on optimizations based on my understanding
                            of GPU compute architecture, which significantly improved performance.
                        </div>
                    </ProjectDescription>
                </IndividualClass>
            </ProjectContainer>
            </div>
    </BodyContainer>
}

const IndividualClass = styled.div`
    padding: 5px;
    margin: -5px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px lightblue;
    border: 2px solid lightgrey;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    max-width: 550px;`

const ClassHeaderDescription = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
`

const ProfessorTestimony = styled.div`
    margin-bottom: 10px;
`