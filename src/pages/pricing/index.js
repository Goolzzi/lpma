import React, {Component} from 'react'
import styled, { css } from 'styled-components'

import { grey } from '../../styles/colors'
import { media } from '../../styles/utils'
import { data } from './data/data'

class Pricing extends Component {

    state = {
        duration: 'annual',
        sliderValue: 50,
    }
    
    renderDurationSwitcher = () => {
        // To do: Radio button from scratch
    }

    renderSlider = () => {
        // To do: Use corvid slider & restyle
    }

    renderPlan = (item, i) => {
        return (
            <Plan
                key={i}
            >
                <Heading>{item.heading}</Heading>
                <Subheading>{item.subheading}</Subheading>
                <Description>{item.description}</Description>
            </Plan>
        )
    }

    render() {
        return (
            <Wrapper>
				<Container>
                   
                    <Top>
                        <Heading>Pricing</Heading>
                        
                        {this.renderDurationSwitcher()}
                        {this.renderSlider()}
                    </Top>

         
                    {/* Plans  */}

                    <PlanWrapper>
                        {data.plans.map((item, i) => {
                            return this.renderPlan(item, i)
                        })}
                    </PlanWrapper>

                </Container>
            </Wrapper>
        )
    }
}


const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    background: ${grey};
    color: white;
`

const Container = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    max-width: 1400px;
`

const Heading = styled.div`
    font-family: 'DomaineSansMedium';
    text-transform: uppercase;
`

const Subheading = styled.div``
const Description = styled.div``

const Top = styled.div`
    padding-top: 178px;
    padding-bottom: 160px;

    ${Heading} {
        font-size: 56px;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: -2.5px;
    }
`

const PlanWrapper = styled.div`
    display: flex;
`

const Plan = styled.div`
    ${Heading} {
        
    }

    ${Description} {

    }
`



export default Pricing;
