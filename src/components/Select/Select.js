import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'
import {default as SelectField} from 'react-select'

import chevronDown from '../../assets/images/icons/chevron-down.svg'
import { bgIcon } from '../../styles/global';
import { media, width } from '../../styles/utils'
import { capeCod } from '../../styles/colors'

class Select extends Component{

    static defaultProps = {
        options: [
            { value: 0, label: 'Test Option #1' },
            { value: 1, label: 'Test Option #2' },
        ]
    }

    state = {
        value: this.props.defaultValue || '',
        placeholder: this.props.placeholder || 'Select an option'
    };

    renderOption = (option) => {
        console.log(option)
        return (
            <SelectOption 
                style={{
                    marginTop: option.value !== 0 ? 10 : 0
                }}
     
                value={option.value}
            >
                {option.label}
            </SelectOption>
        )
    }

    setValue = (value) => {
        const { onSelectChange, disableChange } = this.props;

        if (!disableChange) {
            this.setState({ value });

            if (onSelectChange) {
                onSelectChange(value)
            }
        }
    }
    
    onChange = (params) => {
        
    }
    
    render() {
        const {options, defaultValue, error} = this.props;
                
        return (
            <Container>

                <SelectField
                    className={`custom-select ${error ? 'error' : ''}`}
                    value={this.state.value}
                    placeholder={this.state.placeholder}
                    options={options}
                    onChange={this.setValue}
                    searchable={false}
                    clearable={false}
                    optionRenderer={this.renderOption}
                />

            </Container>
        )
    }

}

const Container = styled.div`
    display: flex;
`;

const SelectOption = styled.div`

    font-family: DomaineSansLight;
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: -0.3px;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
    color: ${capeCod};

    ${media.phone`
        font-size: 16px;
        line-height: 1.63;
    `}

    &:hover { 
        opacity: 0.5;
    }
`

injectGlobal`
    .custom-select {
        position: relative;
        width: 100%;

        &.error {
            .Select-multi-value-wrapper {
                border: solid 1px ${capeCod};
            }
        }

        .Select-multi-value-wrapper,
        .Select-value {
            font-size: 18px;
            line-height: 1.44;
            letter-spacing: -0.4px;
            padding: 0;
            padding-left: 24px;
            user-select: none;
            height: 56px;
            color: rgba(66, 69, 82, 0.5);
            
            display: flex;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;

            ${media.phone`
                font-size: 16px;
                line-height: 1.63;
            `}
        }
    
        .Select-multi-value-wrapper  {
            width: 100%;
            display: flex;
            align-items: center;
            border: solid 1px #ebebeb;
            border-radius: 2px;
            background: white;
            position: relative;
            padding-left: 24px;

            &::after {
                content: '';
                ${bgIcon}
                background-image: url(${chevronDown});
                width: 10px;
                height: 20px;

                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .Select-placeholder {
            color: ${capeCod};
        }

        .Select-value {
            width: 100%;
            font-size: 18px;
            line-height: 1.44;
            letter-spacing: -0.4px;

            user-select: none;
            border: 0;
            height: 56px;
            color: ${capeCod};
            background: none;
            padding: 0;
        }

        .Select-menu-outer {
            background: white;
            position: absolute;
            right: 0;
            left: 0;
            top: 55px;
            width: 100%;
            min-height: 56px;
            padding: 14px 12px;
            box-sizing: border-box;
            border: solid 1px #ebebeb;
            border-radius: 2px;
            border: solid 1px #ebebeb;
            z-index: 10;
            max-height: 250px;
            overflow-y: scroll;
        }
    }
`

export default Select