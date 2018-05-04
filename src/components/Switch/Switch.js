import React, { Component } from 'react';
import styled from 'styled-components';

class Switch extends Component {

    state = {
        selected: this.props.value || 'left',
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.value !== this.state.selected) {
            this.setState({ selected: nextProps.value })
        }
    }

    handleClick = alignment => {
        this.setState({ selected: alignment });
        this.props.onSwitchChange(alignment);
    }

    render() {
        const { selected } = this.state;

        return (
            <Container>
                <Button
                    data-selected={selected == 'left' ? true : false}
                    onClick={() => this.handleClick('left')}
                    >
                </Button>

                <Button
                    data-selected={selected == 'right' ? true : false}
                    onClick={() => this.handleClick('right')}
                    >
                </Button>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 4px;
    overflow: hidden;
`;

const Button = styled.div`
    height: 30px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.15s ease;

    background: white;

    &:hover {
        background: rgba(black, 0.5);
    }

    &[data-selected='true'] {
        background: black;
    }
`;

export default Switch;
