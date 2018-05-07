import React, {Component} from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { find } from 'lodash'

import { capeCod, mantis, porsche, tonysPink, morningGlory, mako, green } from '../../styles/colors'
import { media } from '../../styles/utils'
import { data } from './data/data'

import Slider from '../../components/Slider'
import Switch from '../../components/Switch'
import Select from '../../components/Select' 
import Submit from '../../components/Submit' 

class Pricing extends Component {

    state = {
        duration: 'annual',
        sliderValue: 55,
        activePlans: [true],
        featuresVisible: false,
        totalPrice: 0,
        selectOption: '',
        selectError: false
    }

 
    renderDurationSwitcher = () => {
        return (
            <Switch 
                labelLeft='Monthly'
                labelRight='Annual'
                value={this.state.duration}
                onSwitchChange={this.onSwitchChange}
            />
        )
    }

    onSwitchChange = (value) => {
        this.setState({
            duration: value
        })
    }

    renderSlider = () => {
        const { sliderValue } = this.state;

        return (
            <SliderWrapper>
                <Heading>{data.sliderHeading}</Heading>
                <Slider
                    min={data.sliderRange[0]}
                    max={data.sliderRange[1]}
                    defaultValue={sliderValue}
                    onSliderChange={this.onScaleSliderChange}
                />
            </SliderWrapper>
        )
    }
    
    onScaleSliderChange = (value) => {
        this.setState({
            sliderValue: value
        })
    }

    renderPlanFeatures = (plan, i) => {
        const { sliderValue } = this.state;

        return (
            <Features>
                {plan && plan.features.map((item, i) => {
                    console.log(item)

                    const variant = find(item.variants, function(o) { 
                        return (o.range[0] <= sliderValue) && (o.range[1] >= sliderValue)
                    });

                    if (variant) {
                        return (
                            <Feature>
                                <Dot/>
                                {variant.text}
                            </Feature>        
                        )
                    }
                })}
            </Features>
        )
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
                    <Price>${this.calculatePricing(plan)}</Price>
                    / month
                </PricingWrapper>

                <Subheading>{plan.subheading}</Subheading>
                <Description>{plan.description}</Description>
            
                {this.renderPlanFeatures(plan)}

            </Plan>
        )
    }

    calculatePricing = (plan) => {
        const { sliderValue } = this.state;

        const price = find(plan.pricing, function(o) { 
            return (o.range[0] <= sliderValue) && (o.range[1] >= sliderValue)
        });

        return price ? price.monthly : 0;
    }

    togglePlan = (i) => {
        const plans = this.state.activePlans;
        
        if (plans[i] && i !== 0) {
            plans[i] = !plans[i]
        } else {
            plans[i] = true
        }

        Array(i + 1).fill().forEach((elm, index) => {
            if (plans[i]) {
                plans[index] = true;
            }
        })
       
        this.setState({
            activePlans: plans
        })
    }

    toggleFeatures = () => {
      
    }

    onSelectChange = (value) => {
        const { selectError } = this.state;

        this.setState({
            selectOption: value.label,
            selectError: selectError ? false : selectError
        })
    }

    handleSubmit = (e) => {
        const { selectOption } = this.state;
        e.preventDefault();

        if (selectOption == '') {
            this.setState({
                selectError: true
            })
        } else {
            
        }
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

                    {/* Plans */}

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

                        <Total>
                            <LabelLeft>Total</LabelLeft>
                            <Price>${this.state.totalPrice}</Price>
                            <LabelRight>AUD/month</LabelRight>
                        </Total>

                    </PlanWrapper>
                    

                    {/* Join */}

                    <Join>

                        <JoinButton
                            label={'Join Now'}
                            handleSubmit={this.handleSubmit}
                            theme={'mantis'}
                        />

                         <Select
                            placeholder={'Please select an option'}
                            defaultValue={'Speak with us'}
                            onSelectChange={this.onSelectChange}
                            error={this.state.selectError}
                            options={[
                                { value: 'Speak with us', label: 'Speak with us' }
                            ]}
                        />

                    </Join>

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
    background: ${capeCod};
    padding-bottom: 177px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 178px;

    > ${Heading} {
        font-size: 56px;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: -2.5px;
        color: white;
        padding-bottom: 160px;
    }
`

const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 98px;

    width: 779px;

    > ${Heading} {
        font-size: 24px;
        font-weight: 500;
        line-height: 34px;
        letter-spacing: -0.3px;
        color: white;
    }

    /* Slider */

    > :last-child {
        width: 100%;
        margin-top: 31px;
    }
`

const Button = styled.div`
    height: 64px;
    width: 161px;
    background-color: white;
`

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 64px; 
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
        color: ${mantis};
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


const Features = styled.div`
    margin-top: 56px;
`

const Feature = styled.div`
    display: flex;

    font-family: 'DomaineSansLight';
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: -0.3px;

    &:not(:last-child) {
        margin-bottom: 16px;    
    }
`

const Dot = styled.div`
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: ${green};
    margin-right: 8px;
    transform: translateY(10px);
    flex: 0 1 4px;
    min-width: 4px;
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
        text-transform: uppercase;
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
    font-family: 'DomaineSansMedium';
    font-size: 28px;

    &:not(:last-child) {
        margin-right: 12px;
    }
`

const LabelLeft = styled.div``
const LabelRight = styled.div``
const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    ${LabelLeft} { 
        font-family: 'DomaineSansMedium';
        font-size: 24px;
        line-height: 1.42;
        letter-spacing: -0.6px;
        color: white;
        padding-right: 15px;
        text-transform: uppercase;
    }
    ${LabelRight} { 
        font-family: 'DomaineSansLight';
        font-size: 24px;
        line-height: 1.42;
        letter-spacing: -0.6px;
        color: white;
        padding-left: 15px;
    }
    ${Price} {
        color: ${mantis};
        font-family: 'DomaineSansMedium';
        font-size: 56px;
        letter-spacing: -2.5px;
        line-height: 1;
    }
`

const Join = styled.div`
    margin-top: 85px;
    width: 560px;
`

const JoinButton = styled(Submit)`
    height: 56px;
    margin-bottom: 24px;
    
    font-family: 'DomaineSansMedium';
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: -0.3px;
    text-transform: uppercase;
    
    ${media.phone`

    `}
`


export default Pricing;
