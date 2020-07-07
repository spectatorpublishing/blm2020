import React, {Component} from "react";

import styled from 'styled-components';

const Icon = styled.div`
    height: 30px;
    width: 30px;
    background: url("${props => props.bgimage}");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: 0 5px;
    z-index: 20;
`

const IconWrapper = styled.div`
    position: absolute;
    top: -15px;
    @media (max-width: 992px){
        top: 5px;
    }
    left: 5px;
    width: 100%;
    display: flex;
`

class OpEd extends Component{

    render(){

        console.log("oped" + this.props.icons);
        const icon = [];
        if (this.props.icons != null) {
            for (let i = 0; i < this.props.icons.length; i++) {
                let a = "";
                if(this.props.icons[i]===(1)) a = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MFYJEBOIYNBJTNYGQHB3O6PAZY.png';
                if(this.props.icons[i]===(2)) a = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DQYXU4AKQFDTTGKN5LVPZ33774.png';
                if(this.props.icons[i]===(3)) a = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OHLML5GTFVBC3NLCWJY6FZ6SYM.png ';
                if(this.props.icons[i]===(4)) a = 'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YJCTG4CADVFV3NUQVONGVZ5YIY.png';
                icon.push(<Icon bgimage={a}/>);
            }
        }

        return(
            <a href={this.props.url}>
            <div className={'oped'} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("+this.props.background+")"}} id={this.props.id} onMouseOver={this.mousein}>
                <IconWrapper>
                    {icon}
                </IconWrapper>
                <div className={'title'} id={this.props.id + "title"}>{this.props.title}</div>
                <div className={'date'} id={this.props.id + "date"}>{this.props.date}</div>
                <div className={'blurb'} id={this.props.id + "blurb"}>
                    <div className={'blurbtext'}>
                        {this.props.blurb}
                    </div>
                </div>
            </div>
            </a>
        )
    }
}

export default OpEd;