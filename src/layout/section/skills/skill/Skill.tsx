import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string 
  title: string 
  discription: string
}

export const Skill = (props: SkillPropsType) => {
    return (
       
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitel>{props.title}</SkillTitel>
            <SkillText>{props.discription}</SkillText>
        </StyledSkill>
       
    );
};

const StyledSkill = styled.div`
 width: 30%;
 background-color: rgba(255, 255, 255, 0.56);
 margin: 10px;
`

const SkillTitel = styled.h3`
    
`
const SkillText = styled.p`
    
`