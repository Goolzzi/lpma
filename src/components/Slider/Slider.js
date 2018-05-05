import React, {Component} from 'react'
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import { injectGlobal } from 'styled-components';

import { capeCod, mantis, porsche, tonysPink, morningGlory, mako } from '../../styles/colors'
import { bgIcon } from '../../styles/global'

import singleHouseIcon from '../../assets/images/icons/icon-single-house.svg';
import multiHouseIcon from '../../assets/images/icons/icon-multi-house.svg';

class Slider extends Component {

    static defaultProps = {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 1,
        onSliderChange: () => {},
    };
    
    render() {
        const {min, max, step, defaultValue, onSliderChange, onSliderChangeEnd} = this.props;
        
        return (
           <Container>
               <div
                    className={'slider-wrapper'}
                >
                    <Icon>
                        <SingleHouse /> 
                    </Icon>

                    <ReactSlider 
                        className={'slider'}
                        barClassName={'bar'}
                        min={min}
                        max={max} 
                        step={step}
                        defaultValue={defaultValue}
                        onChange={onSliderChange}
                        onAfterChange={onSliderChangeEnd}
                        withBars 
                    >
                        <div
                            className={'handle'}
                        />
                    </ReactSlider>

                    <Icon>
                        <MultiHouse />
                    </Icon>
                </div>
            </Container>
        )
    }

}

const Container = styled.div`
    display: flex;
    flex: 1;
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    width: 69px;
`
const SingleHouse = styled.div`
    ${bgIcon};
    width: 14px;
    height: 14px;
    background-image: url(${singleHouseIcon});
`
const MultiHouse = styled.div`
    ${bgIcon};
    width: 21px;
    height: 17px;
    background-image: url(${multiHouseIcon});
`

injectGlobal`
    .slider-wrapper {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        background-color: ${mako};

        .bar {
            height: 3px;
            padding-right: 10px;
            position: relative;
            background-color: #BDBDBD;
            border-radius: 6px;
        }

        .slider {
            width: 641px;
            display: flex;
            align-items: center;
            height: 20px;
        }

        .handle {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #000000;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.19);
        }

    }
`

export default Slider
