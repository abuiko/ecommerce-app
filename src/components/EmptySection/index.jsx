import React from 'react'
import { Wrapper, Icon, Text, BtnContainer, BtnMenu } from './EmptyElements'



const EmptySection = (props) => {
    return (
        <Wrapper>
            <Icon>
                {props.icon}
            </Icon>
            <Text>Your {props.title} is Empty</Text>
            <BtnContainer>
                <BtnMenu type="leftBtn">Women's</BtnMenu>
                <BtnMenu>Men's</BtnMenu>
            </BtnContainer>

        </Wrapper>
    )
}

export default EmptySection
