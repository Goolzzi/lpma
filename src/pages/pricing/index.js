import React, {Component} from 'react'
import styled, { css } from 'styled-components'

import { grey, green } from '../../styles/colors'
import { media } from '../../styles/utils'
import { data } from './data/data'

class Pricing extends Component {

    state = {
        duration: 'annual',
        sliderValue: 50,
        activePlans: [true],
        featuresVisible: false
    }
    
    renderDurationSwitcher = () => {
        // To do: Radio button from scratch
    }

    renderSlider = () => {
        // To do: Use corvid slider & restyle
    }
    
    renderPlan = (plan, i) => {
        const { activePlans } = this.state;
        
        return (
            <Plan
                key={i}
                active={activePlans[i] ? true : false}
                onClick={() => this.togglePlan(i)}
            >
                <Heading>{plan.heading}</Heading>
                <PricingWrapper>
                    <Price>${this.calculatePricing()}</Price>
                    / month
                </PricingWrapper>
                <Subheading>{plan.subheading}</Subheading>
                <Description>{plan.description}</Description>
            </Plan>
        )
    }

    calculatePricing = (plan) => {
        // console.log('calculatePricing', plan)

        return 99;
    }

    togglePlan = (i) => {
        const plans = this.state.activePlans;
        
        if (plans[i] && i !== 0) {
            plans[i] = !plans[i]
        } else {
            plans[i] = true
        }
       
        this.setState({
            activePlans: plans
        })
    }

    render() {
        const { featuresVisible } = this.state;

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
                        <Plans>
                            {data.plans.map((item, i) => {
                                return this.renderPlan(item, i)
                            })}
                        </Plans>

                        <CompareFeatures
                            onClick={() => this.toggleFeatures()}
                        >
                            <Label>Compare Features</Label>
                            <Expander>{featuresVisible ? '-' : '+'}</Expander>
                        </CompareFeatures>

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

const Subheading = styled.div`
    font-family: 'DomaineSansMedium';
`

const Description = styled.div`
    font-family: 'DomaineSansLight';
`

const Label = styled.div``

const Price = styled.div``

const Top = styled.div`
    padding-top: 178px;
    padding-bottom: 160px;

    ${Heading} {
        font-size: 56px;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: -2.5px;
        color: white;
    }
`

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Plans = styled.div`
    display: flex;
`

const PricingWrapper = styled.div``

const Plan = styled.div`
    padding: 67px 60px 84px;
    background: #f2f2f2;
    border-top: 8px solid transparent;
    transition: all 0.15s ease;

    &:not(:last-child) {
        margin-right: 2px;
    }

    ${Heading} {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -1px;
        word-spacing: 1000px;        
    }

    ${Subheading} {
        margin-top: 64px;
    }

    ${PricingWrapper} {
        display: flex;
        align-items: flex-end;
        margin-top: 32px;
        
        font-family: 'DomaineSansLight';
        font-size: 24px;
        font-weight: 300;
        line-height: 34px;
    }

    ${Price} {
        font-family: 'DomaineSansMedium';
        color: ${green};
        font-size: 56px;
        line-height: 56px;
    }

    ${Description} {
        margin-top: 22px;

        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.3px;
    }

    ${props => {
        if (props.active) return css`
            background: white;
            border-top: 8px solid #70bf54;
        `
    }}
`

// Compare Features

const CompareFeatures = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 80px;
    padding: 0 60px;
    background: white;

    margin-top: 2px;

    ${Label} { 
        font-family: 'DomaineSansMedium';
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.3px;
    }

    user-select: none;
    cursor: pointer;

    /* Hover */

    transition: 0.15s opacity ease;

    &:hover {
        opacity: 0.8;
    }
`

// Expander

const Expander = styled.div`
    display: flex;
    color: black;

    &:not(:last-child) {
        margin-right: 12px;
    }
`

export default Pricing;
