import React, { Component } from 'react'
import styled from 'styled-components'

const timelineHeight = 175;

const TimelineWrapper = styled.div`
    position: absolute;
    width: 5vw;
    height: ${timelineHeight + 'px'};
`

const TimelineLine = styled.div`
    width: 2px;
    background: white;
    height: ${timelineHeight + 'px'};
    margin: 0 auto;
`

const TimelineItem = styled.div`
    z-index: 10;
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${props => props.offset == props.active ? "#cf4137" : "white"};
    top: ${props => (props.offset/4 * timelineHeight)}px;
    margin-top: -5px;
    margin-left: -4px;
    border-radius: 50%;
`

class Timeline extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const activeItem = this.props.activeItem;
        let TimelineItems = []

        for(let i = 0; i <= 4; i++){
            let year = 2016+i;
            if (this.props.excludeYears.has(year)) continue;
            TimelineItems.push(<TimelineItem offset={i} active={activeItem} onClick={() => console.log("test") || this.props.setActiveItem(activeItem)}/>)
        }

        return <TimelineWrapper>
            <TimelineLine>
                {TimelineItems}
            </TimelineLine>
        </TimelineWrapper>
    }
}
export default Timeline