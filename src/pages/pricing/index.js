import React, {Component} from 'react'
import styled, { css } from 'styled-components'

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
                    <Heading>Pricing</Heading>

                    {this.renderDurationSwitcher()}
                    {this.renderSlider()}

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
`

const Container = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    max-width: 1280px;
`

const Heading = styled.div`
	font-size: 50px;
`

const Subheading = styled.div``
const Description = styled.div``


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
