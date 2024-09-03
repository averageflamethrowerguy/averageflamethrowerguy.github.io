import { useSelector } from "react-redux"
import { BrowserRouter, useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../elements/TopBar";
import { BodyContainer, ImageContainer, LeftText, MiddleContainer, RightText, TextHeader } from "../elements/CommonElements";
import { CredentialsPanel } from "./CredentialsPanel";
import ib_logo from "../../ib_logo.png"
import dartmouth_logo from "../../dartmouth_logo.png"
import qbraid_logo from "../../qbraid_logo.png"
// import dyson_sphere from "../../dyson_sphere.webp"

export function Home() {
    let authState = useSelector((state: any) => state.auth)
    const navigate = useNavigate();


    return (
    <div>
       <TopBar />


       <BodyContainer>
        <div>
            <TextHeader>About me</TextHeader>
            <MiddleContainer>
                Hello! I'm Elliot, an entrepreneur, amateur bodybuilder, endurance hiker, and recent graduate from Dartmouth College. 
                With a history of work in ultra-small, high-velocity startups, I'm looking to bring the same energy to a more mature
                company.
            </MiddleContainer>

            <TextHeader>In Brief</TextHeader>
            <CredentialsPanel />

            <TextHeader>My Story</TextHeader>
            <div>
                <LeftText onClick={() => navigate('/academics')}>
                    I grew up in Seattle, WA and studied at Ingraham High School, and later at North Seattle College. 
                    I led the school team in the FIRST FTC Robotics challenge, and completed the International Baccaleareate (IB) program.
                    
                    <ImageContainer>
                        <img src={ib_logo} style={{width: 60, height: 60}} />
                    </ImageContainer>
                </LeftText>

                <RightText onClick={() => navigate('/academics')}>
                    <ImageContainer>
                        <img src={dartmouth_logo} style={{width: 100, height: 60, marginRight: -20, marginLeft: -20}} />
                    </ImageContainer>

                    Upon starting my studies at Dartmouth, I initially pursued a path in mechanical engineering, inspired by my passion for robotics. 
                    However, the onset of the COVID-19 pandemic led to Dartmouth closing during my freshman spring. Recognizing the challenges that the 
                    pandemic would pose to maintaining a high-quality education, I made the decision to temporarily withdraw from college.
                </RightText>

                <LeftText  onClick={() => navigate('/qbraid')}>
                    I continued my education by taking Harvard's online computer science courses. In June, I co-founded a quantum computing startup with a 
                    team of quantum computing and computer science students. At qBraid, I played a key role in developing the company's backend infrastructure, 
                    landing page, login systems, analytics platform, and quantum learning platform—components that continue to support the company years later. 
                    When Dartmouth announced the return to in-person instruction in September 2021, I ensured a smooth transition by hiring and training my 
                    replacements, and stayed on an additional three months to maintain the integrity of my software products.

                    <ImageContainer>
                        <img src={qbraid_logo} style={{width: 170, height: 60, marginRight: -20, marginLeft: -20}} />
                    </ImageContainer>
                </LeftText>

                <RightText onClick={() => navigate('/yaynay')}>
                    During this time, I also joined YayNay, a voter engagement platform co-founded by my best friend, Jared Heath. I optimized YayNay's texting 
                    and backend infrastructure, enabling it to handle a significant increase in website traffic without substantially raising costs. These 
                    enhancements later proved valuable as YayNay sought to attract high-profile clients.
                </RightText>
            </div>
        </div>

        <TextHeader>My Aspirations</TextHeader>
        <MiddleContainer>
        My experiences at qBraid and YayNay offered contrasting yet valuable lessons. At qBraid, we had a highly skilled technical team comprised of PhD 
        and postdoctoral students in quantum computing, but we often struggled with generating leads and understanding market needs. On the other hand, 
        YayNay was led by experienced professionals with backgrounds in the White House, giving us a clear sense of direction, but we faced challenges 
        due to a lack of developer resources.
        </MiddleContainer>

        <MiddleContainer>
        These differing environments taught me the importance of developing a versatile professional skill set. I recognized the need to build the capacity 
        to attract top-tier talent, secure funding and business opportunities, and effectively manage diverse teams to achieve success in any venture.
        </MiddleContainer>
        <MiddleContainer>
            I soon recognized that small startups, while dynamic and exciting, were not the ideal environment for me to cultivate these essential skills. 
            Startups often have highly motivated founders, but their inexperience can make them less effective as role models for learning both software 
            development and management. To truly develop my abilities, I decided to transition into the public workplace, where I could learn from some 
            of the best managers and developers in the world. This environment would provide the mentorship and exposure necessary to refine my skills 
            and build a strong foundation for future success.
        </MiddleContainer>

        <TextHeader>Contact Me</TextHeader>
        <MiddleContainer style={{textAlign: "center", marginBottom: "50vh"}}>
            Please reach out to me at elliotpotter496@gmail.com
        </MiddleContainer>

    </BodyContainer>
    
    </div>)
}