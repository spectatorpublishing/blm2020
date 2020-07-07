import React,{ Component } from 'react';
import OpEd from './OpEd';

let position = 0;

class RightArrow extends Component{

    checkOpac(){
        let toReturn = '1';
        if (window.innerWidth > 992) {
            if (position >= this.props.opeds.length - 2) {
                toReturn = '0.33';
            }
            else toReturn = '1';
        }
        else{
            if (position >= this.props.opeds.length - 1) {
                toReturn = '0.33';
            }
            else toReturn = '1';
        }
        return toReturn;
    }

    handleClick(){
        if (window.pos === 0){
            position = 0;
            window.pos = 1;
        }
        let contained = document.getElementById(this.props.year);
        if (window.innerWidth > 992) {
            if (position < (this.props.opeds.length - 2)) {
                let current = contained.style.transform;
                let pos = parseInt(current.match(/-?[0-9]+/));
                pos -= 35;
                contained.style.transform = "translateX(" + pos + "vw)";
                position++;
                let a = document.getElementById(this.props.year + "left");
                a.style.opacity = "1";
            }
            if (position >= this.props.opeds.length - 2){
                let a = document.getElementById(this.props.year + "right");
                a.style.opacity = "0.33";
            }
        }
        else {
            if (position < (this.props.opeds.length - 1)) {
                let current = contained.style.transform;
                let pos = parseInt(current.match(/-?[0-9]+/));
                pos -= 69;
                contained.style.transform = "translateX(" + pos + "vw)";
                position++;
                let a = document.getElementById(this.props.year + "left");
                a.style.opacity = "1";
            }
            if (position >= this.props.opeds.length - 1){
                let a = document.getElementById(this.props.year + "right");
                a.style.opacity = "0.33";
            }
        }
    }

    render(){
        return(
            <div className={'rightArrow'} id={this.props.year + "right"} onClick={this.handleClick.bind(this)} style={{opacity: this.checkOpac()}}>
                <img className={'rightArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'}
                style = {{transform:'rotate(90deg)'}}/>
            </div>
        )
    }
}

class LeftArrow extends Component{

    handleClick(){
        if (window.pos === 0){
            position = 0;
            window.pos = 1;
        }
        let contained = document.getElementById(this.props.year);
        if (window.innerWidth > 992){
            if (position > 0) {
                let current = contained.style.transform;
                let pos = parseInt(current.match(/-?[0-9]+/));
                console.log(pos);
                pos += 35;
                contained.style.transform = "translateX(" + pos + "vw)";
                position--;
                let a = document.getElementById(this.props.year + "right");
                a.style.opacity = "1";
            }
        }
        else {
            if (position > 0) {
                let current = contained.style.transform;
                let pos = parseInt(current.match(/-?[0-9]+/));
                pos += 69;
                contained.style.transform = "translateX(" + pos + "vw)";
                position--;
                let a = document.getElementById(this.props.year + "right");
                a.style.opacity = "1";
            }
        }
        if (position === 0){
           let a = document.getElementById(this.props.year + "left");
           a.style.opacity = "0.33";
        }
    }

    render(){
        return(
            <div className={'leftArrow'} id={this.props.year + "left"} onClick={this.handleClick.bind(this)} style={{opacity: '0.5'}}>
                <img className={'leftArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'}
                style = {{transform:'rotate(-90deg)'}}/>
            </div>        )
    }
}

class Event extends Component{


     makeOped(){
        let opedList = this.props.opeds;
        let toReturn = [];
        for (let i = 0; i < opedList.length; i++){
            // console.log('YEET', i);
            
            // console.log('opedlist', opedList[i])
            // console.log("event" + opedList[i][3]);
            toReturn.push(<OpEd id={opedList[i][0]} title={opedList[i][0]} date={opedList[i][1]} background={opedList[i][2]} icons={opedList[i][3]} url={opedList[i][4]} blurb={opedList[i][5]}/>);
        }
        return toReturn;
    }

    render(){

        return(
            <div>
                <div className={'box'}>
                    <div className={'year'}>
                            <img src={'https://catfish.columbiaspectator.com/videos/' + this.props.year + '.svg'} style={{width:'100%'}}/>
                    </div>
                    <div className={'containered'}>
                        <LeftArrow opeds={this.props.opeds} year={this.props.year}/>
                        <div className={'oped-container'}>
                            <div className={'contained'} id={this.props.year} style={{transform: 'translateX(0)'}}>
                                {this.makeOped()}
                            </div>
                        </div>
                        <RightArrow opeds={this.props.opeds} year={this.props.year}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;