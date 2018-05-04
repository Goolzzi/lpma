import React, {Component} from 'react'
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import { injectGlobal } from 'styled-components';


class Alignment extends Component {

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

                </div>
            </Container>
        )
    }

}

const Container = styled.div`
    display: flex;
    flex: 1;
`;

injectGlobal`
    .slider-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: flex-start;

        .bar {
            height: 3px;
            padding-right: 10px;
            position: relative;
            background-color: #BDBDBD;
            border-radius: 6px;
        }

        .slider {
            width: 100%;
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

export default Alignment
