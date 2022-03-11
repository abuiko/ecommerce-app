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
                <BtnMenu>Shop Now</BtnMenu>

            </BtnContainer>

        </Wrapper>
    )
}

export default EmptySection
