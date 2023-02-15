import { BioCardDiv } from "./StyledComponents";

const BioCard = (props) => {

    return(
        <BioCardDiv>
            <h2>About me:</h2>
            <p>
                I'm a full stack web developer based in Bentonville, Arkansas who switched away from the medical industry in 2022. 
                I have been programming as a hobby (and using linux) since high school and I have a natural passion for technology.
                After teaching myself some python and ruby/rails, I graduated from a bootcamp focused on React and Node in 2021. 
                That same year I started a job working on cloud native Reactive Java infrastructure for the largest retailer in America.
            </p>
            <p>    
                I have quickly gained a stellar reputation not only for my technical ability but also
                for my organizational ability and communication skills. I am great at working in teams and creating means to clear 
                recurrent blockers in the development process. I'm passionate about the whole software development life cycle, 
                from requirements specification, to architecture, to design, to agile methodologies, to quality assurance. 
                I have all the tools at my disposal to turn your business problems into software solutions.
            </p>
            <p>
                I have an academic background in philosophy, and because of that I've always really enjoyed the theoretical aspect
                of software construction. I'm very passionate about process and perspective, and I believe the metaphors we use to 
                understand software are fundamentally important to creating and maintaining it well. I am constantly upskilling, 
                from learning new languages like Scala and Golang to reading about the theory, practice, and history of computer science
                and software engineering. I'm committed to life long learning and the quickest way to convince me to work for you is 
                to offer an interesting and diverse set of technical experiences.
            </p>
            <p style={{fontWeight: 'bold'}}>
                Below are some of my projects, fetched from Github with a Flask API:
            </p>
        </BioCardDiv>
    )
} 

export default BioCard;