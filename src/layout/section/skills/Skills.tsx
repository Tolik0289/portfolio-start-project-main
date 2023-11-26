import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";


export const Skills = () => {
    return ( 
    <StyledSkills>
     <SectionTitle>My Skills</SectionTitle>
     <div>
        <FlexWrapper wrap="wrap" justify="space-between ">
            <Skill 
            iconId={"codeSvg"} 
            title="html5" 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
            <Skill 
            iconId={"css"} 
            title="css3" 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill 
            iconId={"react"} 
            title="React" 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill 
            iconId={"typeScript"} 
            title="typescript" 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim" />
            <Skill 
            iconId={"styled"} 
            title="styled components" 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
            <Skill 
            iconId={"figma"} 
            title="WEB DESIgN  " 
            discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>

        </FlexWrapper>
     </div>
     
 </StyledSkills>
 );
};

const StyledSkills = styled.section`
    
`