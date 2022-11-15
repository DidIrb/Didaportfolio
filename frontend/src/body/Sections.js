import React from "react";
import designimage from '../assets/design.png'

const Sections = () => {
    return (
        <div className="innerbody">
            <div className="backimg">
                <img src={designimage} alt="background design" />
            </div>
            <div className="sections">

                {/* Home section */}

                <div className="section home">
                    <div className="content">

                        <div className="first">
                            {/* <h1 >Software Developer</h1> */}
                        </div>
                        <div className="middle">
                            <p > Welcome, The name is <br /> Dida Irbaye <br /> A software Developer </p>
                        </div>
                        <div className="last">
                            <div className="scroller">
                                <div class="mouse"></div>
                                <p>scroll down</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* section 2 the about section */}

                <div className="section aboutme">
                    <div className="content">
                        <div className="first ">
                            <div className="cont">
                                <h1 >About Me</h1>
                                <p>
                                    Simply a software developer, I love solving problems I identify, some problems
                                    can be solved easily using systems, I create solutions and
                                    use whatever is neccesary to achieve my goal.
                                </p>
                            </div>
                        </div>
                        <div className="middle">

                        </div>
                        <div className="last expound">
                            <div className="traits1">
                                <h3>Patient</h3>
                                <h3>Cutious</h3>
                                <h3>Ambitious</h3>
                            </div>
                            <div className="budtha">
                                <img src="https://static.vecteezy.com/system/resources/previews/005/160/351/original/man-in-pose-lotus-yoga-pose-meditation-position-vector.jpg" alt="budthas" />
                            </div>
                            <div className="traits2">
                                <h3>Hard-Working</h3>
                                <h3>Competitive</h3>
                                <h3>Creative</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 3 the Skills section */}
                <div className="section Skills">
                    <div className="content">
                        <div className="first">
                            <div className="cont">
                                <h1 >SKILLS</h1>
                                <p>
                                A software developer has a number of responsibilities and we all have to pick an area of specialty, I am a full stack developer and have skills in this areas
                                </p>
                                <div className="skillsets">
                                    <h2>Website Dev</h2>
                                    <h2 className="highlight">UI/UX Design</h2>
                                    <h2>Mobile Dev</h2>
                                </div>
                            </div>
                        </div>
                        <div className="middle">
                            cv
                        </div>
                        <div className="last">
                            <div className="cardcontainer">
                                <div className="farmiliarwith">
                                    <h3>TOOLS AND FRAMEWORKS USED</h3>
                                    <p>There is no specific language that can exclusively do something, most programming languages
                                        has the capacity to create whatever the user wants, as a developer I chose Javascript as my main language 
                                        and have familiarized myself with the following.
                                    </p>
                                    <div className="tools">
                                        {/* adding the icons I know */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* section 4 the projects done section */}
                <div className="section Projects">
                    <div className="content">
                        <div className="first">
                            <div className="cont">
                                <h1 >PROJECTS</h1>
                                <p>
                                I love building applications and websites that serve a purpose, 
                                from simple applicatios to complex e-commerce websites, I have worked on them all, 
                                some of these projects are listed below.
                                </p>
                            </div>
                        </div>
                        <div className="middle">
                            github repo
                        </div>
                        <div className="last">
                            {/* adding the slider for projects done */}
                            
                        </div>
                    </div>
                </div>


                {/* section 5 the about section */}


            </div>
        </div>
    )
}

export default Sections;