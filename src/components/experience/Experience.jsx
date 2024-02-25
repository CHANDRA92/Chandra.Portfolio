import React from 'react';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaHtml5,FaCss3Alt,FaJava} from "react-icons/fa6";
import { RiJavascriptFill,RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTailwind } from "react-icons/tb";
import { SiDjango,SiMongodb,SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscGithubInverted } from "react-icons/vsc";
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
    <h5>The Skills I Have</h5>
    <h2>Skills</h2>
    <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Front-end Development</h3>
            <div className="experience__content">
                <article className="experience__details">
                    {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                    <FaHtml5 className="experience__details-icon"/>
                    <h4> HTML</h4>
                </article>
                <article className="experience__details">
                    <FaCss3Alt className="experience__details-icon"/>
                    <h4>CSS</h4>
                </article>
                <article className="experience__details">
                    {/* <BsFillPatchCheckFill className="experience__details-icon" /> */}
                    <RiJavascriptFill className="experience__details-icon"/>
                    <h4>JavaScript</h4>
                </article>
                <article className="experience__details">
                    <RiReactjsLine className="experience__details-icon"/>
                    <h4>React JS</h4>
                </article>
                <article className="experience__details">
                    <TbBrandTailwind className="experience__details-icon"/>
                    <h4>Tailwind</h4>
                </article>
            </div>
        </div>
        <div className="experience__backend">
            <h3>Back-end Development</h3>
            <div className="experience__content">
                <article className="experience__details">
                    <BiLogoPostgresql className="experience__details-icon"/>
                    <h4>PostgreSQL</h4>
                </article>
                <article className="experience__details">
                    <SiDjango className="experience__details-icon"/>
                    <h4>Python (Django)</h4>
                </article>
                <article className="experience__details">
                    <TbBrandNextjs className="experience__details-icon"/>
                    <h4>Next.js</h4>
                </article>
                <article className="experience__details">
                    <SiMongodb className="experience__details-icon"/>
                    <h4>MongoDB</h4>
                </article>
                <article className="experience__details">
                    <VscGithubInverted className="experience__details-icon"/>
                    <h4>Git/GitHub</h4>
                </article>
            </div>
        </div>
        <div className="experience__languages">
            <h3>Languages</h3>
            <div className="experience__content">
                <article className="experience__details">
                    <SiPython className="experience__details-icon" />
                    <h4>Python</h4>
                </article>
                <article className="experience__details">
                    {/* <!-- Replace the following placeholder with the logo for Java --> */}
                    {/* <img src="java_logo.png" alt="Java Logo" className="experience__details-icon" /> */}
                    <FaJava className="experience__details-icon" />
                    <h4>Java</h4>
                </article>
                {/* <!-- Add more languages as needed --> */}
            </div>
        </div>
    </div>
</section>

  )
}

export default Experience