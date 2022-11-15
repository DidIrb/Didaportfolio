import React from "react";
import { Icon } from '@iconify/react';
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
                            <Icon icon="academicons:cv-square" className="Icon" />
                        </div>
                        <div className="last">
                            <div className="cardcontainer">
                                <div className="farmiliarwith">
                                    <h3>TOOLS AND FRAMEWORKS USED</h3>
                                    <p> Most programming languages have the capacity to create whatever a developer wants,
                                        I mostly use JavaScript to develop my application <i>Specialty</i>,
                                        I am familiar with the following tools and languages.
                                    </p>
                                    <div className="tools">
                                        {/* adding the icons I know */}
                                        <div className="languages">
                                            <Icon icon="vscode-icons:file-type-js-official" className="Icon" />
                                            <Icon icon="vscode-icons:file-type-html" className="Icon" />
                                            <Icon icon="vscode-icons:file-type-css" className="Icon" />
                                            <Icon icon="vscode-icons:folder-type-php" className="Icon" />
                                        </div>
                                        <div className="toolsused">
                                            <Icon icon="logos:figma" className="Icon" />
                                            <Icon icon="vscode-icons:folder-type-mongodb-opened" className="Icon" />
                                            <Icon icon="simple-icons:express" className="Icon" />
                                            <Icon icon="vscode-icons:file-type-reactts" className="Icon" />
                                            <Icon icon="logos:nodejs" className="Icon" />
                                        </div>
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
                            <Icon icon="fa-brands:github-square" className="Icon" />
                        </div>
                        <div className="last">
                            {/* adding the slider for projects done */}
                            <div className="slider">

                                <input type="radio" name="slider" checked="checked" class="slider-nav" />
                                <input type="radio" name="slider" class="slider-nav" />
                                <input type="radio" name="slider" class="slider-nav" />
                                <input type="radio" name="slider" class="slider-nav" />

                                <div className="slider-inner">
                                    <div className="project">
                                        <div className="wrapper">
                                            <h2>Project Name</h2>

                                            <div className="view-project">
                                                <p> 
                                                    This is a description of the project that has been done by the developer
                                                    A simple web application that allow you to buy goods and sell goods.
                                                </p>
                                                {/* adding icons and add links to the projects iteself */}
                                                <div className="iconlinks">
                                                    <Icon icon="gg:media-live" className="Icon"/>
                                                    <Icon icon="fe:github" className="Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="wrapper">
                                            <h2>Project Name</h2>

                                            <div className="view-project">
                                                <p> 
                                                    This is a description of the project that has been done by the developer
                                                    A simple web application that allow you to buy goods and sell goods.
                                                </p>
                                                {/* adding icons and add links to the projects iteself */}
                                                <div className="iconlinks">
                                                    <Icon icon="gg:media-live" className="Icon"/>
                                                    <Icon icon="fe:github" className="Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="wrapper">
                                            <h2>Project Name</h2>

                                            <div className="view-project">
                                                <p> 
                                                    This is a description of the project that has been done by the developer
                                                    A simple web application that allow you to buy goods and sell goods.
                                                </p>
                                                {/* adding icons and add links to the projects iteself */}
                                                <div className="iconlinks">
                                                    <Icon icon="gg:media-live" className="Icon"/>
                                                    <Icon icon="fe:github" className="Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project">
                                        <div className="wrapper">
                                            <h2>Project Name</h2>

                                            <div className="view-project">
                                                <p> 
                                                    This is a description of the project that has been done by the developer
                                                    A simple web application that allow you to buy goods and sell goods.
                                                </p>
                                                {/* adding icons and add links to the projects iteself */}
                                                <div className="iconlinks">
                                                    <Icon icon="gg:media-live" className="Icon"/>
                                                    <Icon icon="fe:github" className="Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* section 5 the about section */}

                <div className="section contact">
                    <div className="content">
                        <div className="link links1">
                            <Icon icon="material-symbols:perm-phone-msg"   className="Icon"/>
                            <Icon icon="tabler:go-game"   className="Icon"/>
                            <Icon icon="academicons:cv-square" className="Icon" />
                        </div>

                        <div className="middle">  
                            <div className="wrapper">
                                <form action="">
                                    <h1>Get In Touch</h1>
                                    <br />
                                    <input type="text" placeholder="Full Name" className="Name" />
                                    <input type="text" placeholder="Email" className="Email"/>
                                    <textarea name="message" id="message" >
                                        write message here
                                    </textarea>
                                    <button className="submit">Submit</button>
                                </form>
                            </div>
                        </div>

                        <div className="link links2">
                            <Icon icon="fa-brands:github-square" className="Icon" />
                            <Icon icon="ic:sharp-mail"   className="Icon"/>
                            <Icon icon="cib:linkedin"  className="Icon" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Sections;