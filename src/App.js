import React, { Component } from 'react';
import './Fontfaces.css'
import './App.css';
import './Event.scss';
import Event from './Event.js';
import Timeline from './Timeline'
import Navbar from './Navbar'

let position = 0;
let eventArray = [];
let event1;

class DownArrow extends Component{

    handleClick(){
        let allcontain = document.getElementById('allcontain');
        if (position < (8)) {
            position++;
            let current = allcontain.style.transform;
            let pos = parseInt(current.match(/-?[0-9]+/));
            if(window.innerWidth > 992) pos -= 60;
            else pos -= 46;
            allcontain.style.transform = "translateY(" + pos + "vh)";
        }
       eventArray =  document.getElementsByClassName('contained');
        for (let i = 0; i < eventArray.length; i++){
            event1 = eventArray[i];
            event1.style.transform = "translateX(0vw)";
            let a = document.getElementById(event1.id + "left");
            a.style.opacity = '0.33';
        }
        window.pos = 0;
        this.props.updateActive();
    }

    render(){
        return(
            <div className={'downArrow'} onClick={this.handleClick.bind(this)}>
                <img className={'downArrowArrow'} src={'https://catfish.columbiaspectator.com/videos/Asset3.svg'}/>
            </div>        )
    }
}

class UpArrow extends Component{

    handleClick(){
        let allcontain = document.getElementById('allcontain');
        if (position > 0) {
            position--;
            let current = allcontain.style.transform;
            let pos = parseInt(current.match(/-?[0-9]+/));
            if(window.innerWidth > 992) pos += 60;
            else pos += 46;
            allcontain.style.transform = "translateY(" + pos + "vh)";
        }
        eventArray =  document.getElementsByClassName('contained');
        for (let i = 0; i < eventArray.length; i++){
            event1 = eventArray[i];
            event1.style.transform = "translateX(0vw)";
        }
        window.pos = 0;
        this.props.updateActive();
    }

    render(){
        return(
            <div className={'upArrow'} onClick={this.handleClick.bind(this)} style={{opacity: '0.33'}}>
                <img className={'upArrowArrow'} src={'https://catfish.columbiaspectator.com/videos/Asset4.svg'}/>
            </div>
        )
    }
}

const excludeYears = new Set([2003, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]);

class App extends Component {
    constructor(){
        super();
        this.state = {activeItem: 0}
        this.incrementActiveItem = this.incrementActiveItem.bind(this)
        this.decrementActiveItem = this.decrementActiveItem.bind(this)
        this.setActiveItem = this.setActiveItem.bind(this)
    }

    incrementActiveItem(){
        let i = this.state.activeItem+1;
        if (i === 17){
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
        }
        if (i > 17){
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
            return;
        }
        while (excludeYears.has(i+2001) && i <= 17){
            i++;
        }
        let a = document.getElementsByClassName("upArrow")[0];
        a.style.opacity = 1;
        this.setState({activeItem: i})
    }

    decrementActiveItem(){
        let i = this.state.activeItem-1;
        if (i === 0){
            let a = document.getElementsByClassName("upArrow")[0];
            a.style.opacity = 0.33;
        }
        if (i < 0) {
            return;
        }
        while (excludeYears.has(i+2001)){
            i--;
        }
        let a = document.getElementsByClassName("downArrow")[0];
        a.style.opacity = 1;
        this.setState({activeItem: i})
    }

    setActiveItem(i) {
        this.setState({activeItem: i})
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className={"maintitle"}>
                    <div className={'opinion'}>
                        OPINION ARCHIVE
                    </div>
                    <img className={'thepath'} src={'https://catfish.columbiaspectator.com/videos/ThePath.svg'}/>
                    <div className={'sub'}>
                        AN EDITORIAL HISTORY OF THE GRADUATE STUDENTS OF COLUMBIA UNIVERSITY
                    </div>
                    <div className={'letter'}>
                        LETTER FROM THE EDITOR:
                    </div>
                    <div className="letter-content">
                        <p>Dear Reader,</p><p>

                        From May 11 to July 20, 1894, 250,000 workers from across 27 states went on strike. Exactly 40 days later, the Pullman Strike ended—though not before 30 union workers were killed by the railroad companies and transportation across the Midwest ground to a halt. </p><p>

                        Dating <a href="https://www.columbiaspectator.com/eye-lead/2018/09/26/looking-back-18-years-into-the-fight-for-a-union/">the fight for graduate student unionization</a> proves more difficult. Did it begin in <a href="http://spectatorarchive.library.columbia.edu/?a=q&r=121&results=1&e=-------en-20--101--txt-txIN-graduate+student+unionization------">April 1999</a>, with the first meeting between the Graduate Student Advisory Council and then-Dean of Arts and Sciences Eduardo Macagno? Did it begin in 2000, with a dedicated group of history students forming Graduate Student Employees United? Or did it only begin in earnest in April 2002, with a strike eerily similar to one that <a href="https://www.columbiaspectator.com/news/2018/04/25/picket-lines-and-canceled-classes-mark-beginning-of-graduate-student-strike/">would occur 16 years later</a>, in April 2018? </p><p>

                        For this archival timeline, we’ve chosen an ambiguous start in the aughts and conclude just before the vote to bargain early this week. This project is the first of its kind for Opinion, combining op-eds, columns, letters to the editor, and staff editorials from the last 20 years into a coherent narrative which spans the history of graduate student unionization from conception to—finally—bargaining. </p><p>

                        In creating this, I expected to find a linear story, a steady development of opinions as the attitudes and predicaments of students changed. Instead, we found a narrative full of stops and starts, a history of opinions as cyclical as the history of the unionization struggle itself. The defining questions that organize the pieces below, indicated by the small icons on the top, are as follows:</p>
                        <div><img className="keyImage" src="https://catfish.columbiaspectator.com/videos/Theme1.svg"></img>Are members of Graduate Workers of Columbia students or workers?</div>
                        <div><img className="keyImage" src="https://catfish.columbiaspectator.com/videos/Theme2.svg"></img>Is graduate student unionization in the interests of undergraduates?</div>
                        <div><img className="keyImage" src="https://catfish.columbiaspectator.com/videos/Theme3.svg"></img>Will a union benefit graduate students?</div>
                        <div><img className="keyImage" src="https://catfish.columbiaspectator.com/videos/Theme4.svg"></img>Is there a legal mandate for graduate student unionization?</div>
                        
                        <p>

                        The sheer amount written on graduate student unionization in the last two decades means that this project, while extensive, does not feature every article. But I hope that it can serve as a reference for the future of unionization discussions. I hope that it can showcase the ways in which the Opinion pages become an archivist for the campus community, long after we leave the picket line. I hope that it can provide guidance in the fight for unionization continues.</p><p>

                        We have chosen bargaining as the denouement to this timeline, but there is no guarantee that the end is here; the opposite may be true. The University has been known to stall, and with an inability to strike until April 2020, the graduate workers union may find themselves in bargaining limbo for at least the following two years.</p><p>

                        I don’t know what will happen. If the past two decades of op-eds tell us anything, it is that the fight can always continue. </p><p>

                        Yours,</p><p>
                        Hannah Barbosa Cesnik</p><p>
                        Editorial Page Editor</p>
                    </div>
                    <div className="timeline-title">
                    EXPLORE THE TIMELINE
                    </div>
                </div>
                <UpArrow updateActive={this.decrementActiveItem}/>
                <Timeline excludeYears = {excludeYears} activeItem = {this.state.activeItem} setActiveItem={this.setActiveItem}/>
                <div className={'allcontainer'}>
                <div className={'allcontain'} id={'allcontain'} style={{transform: 'translateY(0)'}}>
                    <Event year={"2001"}
                           opeds={
                               [
                                   [
                                       "The case for a graduate student union",
                                       "February 5, 2001",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ATVJZYGCE5HWRDBYR4DOBNKS74.jpg",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/the-case-for-a-graduate-student-union/",
                                       "In one of Spectator’s first op-eds on graduate student unionization a semester after the formation of Graduate Student Employees United more than 17 years ago, organizer and doctoral candidate in history John McMillian makes the case for unionization to his fellow graduate students."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2002"}
                           opeds={
                               [
                                   [
                                       "We are the union?",
                                       "February 13, 2002",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/IB42F6LMFNCEFBPJOIJ6HEWHXU.jpg",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/we-are-the-union-2/",
                                       "As the Graduate School of Arts and Sciences prepares for its first unionization vote in early 2002, Adam Meshel, a third-year graduate student in the biological sciences, asks the union supporters on campus to not erase his voice. Attending graduate school is a privilege and an apprenticeship for Meshel—not a job."
                                   ],
                                   [
                                       "Union intrusion into academia",
                                       "March 8, 2002",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YS4NLXOMY5FP7HCR7DYHY32BWY.jpg",
                                       [1,2],
                                       "https://www.columbiaspectator.com//opinion/2018/11/30/union-intrusion-into-academia-2/",
                                       "A week before the first vote to unionize, an undergrad serving as both a teaching and research assistant points out that United Automobile Workers—a group that aggressively lobbied against letting H-1B visa holders keep their status while switching employers—is the sole candidate on the ballot."
                                   ],
                                   [
                                       "Professors serve as educators to students, not bosses",
                                       "March 25, 2002",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YS4NLXOMY5FP7HCR7DYHY32BWY.jpg",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/professors-serve-as-educators-to-students-not-bosses/",
                                       "In this letter to the editor, Professor Robert E. Harrist expresses dismay at the rhetoric in pro-unionization op-eds of professors as bosses.\n"
                                   ],
                                   [
                                       "Bollinger should count the votes",
                                       "April 18, 2002",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/N2JBBY5DWZHYNBNQICAWIWTFAY.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/bollinger-should-count-the-votes/",
                                       "On the eve of Lee Bollinger’s arrival at Columbia in 2002, striking graduate students urge the incoming president to release the results of a recent unionization election and recognize the budding GSEU."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2004"}
                           opeds={
                               [
                                   [
                                       "After two years, one voice",
                                       "April 16, 2004",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4LH2FYEMSJFEJG47CLICWR6TT4.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/after-two-years-one-voice/",
                                       "On the eve of a graduate student strike, Spectator’s editorial board denounces the University and affirms its support for the strike, stating that “Columbia should face the facts: The movement toward graduate student unionization is not going away.”"
                                   ],
                                   [
                                       "The UAW is at it again",
                                       "April 19, 2004",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YS4NLXOMY5FP7HCR7DYHY32BWY.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/the-uaw-is-at-it-again/",
                                       "Two years into the initial fight for a graduate student union, history graduate student Giovanni Ruffini warns that United Automobile Workers is disrupting the education of graduate students and deceiving the Columbia community."
                                   ],
                                   [
                                       "A future for the union: administrators must now sit down with grad students ",
                                       "September 9, 2004",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/IB42F6LMFNCEFBPJOIJ6HEWHXU.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com//opinion/2018/11/30/a-future-for-the-union-2/",
                                       "Spectator’s editorial board speaks out against the National Labor Relations Board’s ruling at Brown, and strongly condemns Bollinger’s handling of graduate student unionization."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2005"}
                           opeds={
                               [
                                   [
                                       "Steeerike!",
                                       "March 31, 2005",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/62BGTFRS2VFGVK5SGD2K2ZVCS4.jpg",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/steeerike/",
                                       "As the GSEU prepares to strike again, the editorial board claims that though “a one-week strike won't win them union recognition, it will make a valuable statement, and it deserves undergraduate support.”"
                                   ]
                               ]
                           }
                    />
                    <Event year={"2006"}
                           opeds={
                               [
                                   [
                                       "Striking Out",
                                       "April 18, 2006",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ATVJZYGCE5HWRDBYR4DOBNKS74.jpg",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2018/11/30/striking-out/",
                                       "In 2006, a particularly slow-moving year for unionization, this editorial argues that the decision by the GSEU “not to strike is troubling and indicates that the Columbia administration's anti-union tactics are indeed working.”"
                                   ]
                               ]
                           }
                    />
                    <Event year={"2015"}
                           opeds={
                               [
                                   [
                                       "Graduate students should be allowed to unionize",
                                       "March 3, 2015",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JL6IMJOTHRGIFOHFB5USC7KW2I",
                                       [1,2],
                                       "https://www.columbiaspectator.com/opinion/2015/03/05/graduate-students-should-be-allowed-unionize/",
                                       "In the midst their of legal struggle with the NLRB, Spectator’s editorial board combs over the legal arguments for a graduate student union and makes its case against the University. "
                                   ],
                                   [
                                       "Organizing together works",
                                       "March 5, 2015",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JL6IMJOTHRGIFOHFB5USC7KW2I",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2015/03/05/organizing-together-works/",
                                       "In the middle of the Graduate Workers of Columbia’s petition to the NLRB, doctoral candidate Andrea Crow exposes the University’s union-busting tactics and explains that hikes in stipends and University support have actually been the fruits of unionization."
                                   ],
                                   [
                                       "Graduate working conditions are undergraduate learning conditions",
                                       "April 7, 2015",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2SAQNCZ4YZCSBI677BRVS5LFJE",
                                       [2],
                                       "https://www.columbiaspectator.com/opinion/2015/04/07/graduate-working-conditions-are-undergraduate-learning-conditions/",
                                       "As the NLRB decision nears, undergraduates argue that they have an invested obligation to support the Graduate Student Union as it directly affects their quality of education."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2016"}
                           opeds={
                               [
                                   [
                                       "Graduate students deserve a healthcare plan with teeth",
                                       "September 12, 2016",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LLVXZT3OFNFK3FRD22KG2ZDYXQ",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2016/09/12/graduate-students-deserve-healthcare-plan-teeth/",
                                       "Doctoral candidate Nicole Gervasio explains how her decision to support unionization is directly tied to her experience living with a rare autoimmune disorder on Columbia’s poor healthcare plan."
                                   ],
                                   [
                                       "Numbers bring a different perspective to the unionization debate",
                                       "October 20, 2016",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PW6GTREB45DLJLRX44FA35DLOE",
                                       [3,4],
                                       "https://www.columbiaspectator.com/opinion/2016/10/20/numbers-bring-different-perspective-unionization-debate/",
                                       "In this op-ed, doctoral candidate Mohammed Shaik crunches the numbers on arguments for and against the Graduate Student Union and urges students to investigate and question for themselves."
                                   ],
                                   [
                                       "Why engineering students are voting yes for our union",
                                       "November 21, 2016",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GJYJ5SS7CBGNXOBMWSBEZTWXGE",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2016/11/21/why-engineering-students-are-voting-yes-our-union/",
                                       "Engineering graduate students explain their rationale for supporting the Graduate Student Union and debunk myths about lower funding and fewer research opportunities."
                                   ],
                                   [
                                       "What happens when the union's views aren't yours",
                                       "December 1, 2016",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LBY4UBJTLJE2JH6TTJLMIAHICQ",
                                       [3,4],
                                       "https://www.columbiaspectator.com/opinion/2016/12/01/what-happens-when-unions-views-arent-yours/",
                                       "After the announcement of a University election on unionization, University Provost John Coatsworth, and Associate Provost David Austell, argue that the interests of the union are not those of the students."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2017"}
                           opeds={
                               [
                                   [
                                       "Honoring graduate unionization has become a matter of democratic principle",
                                       "March 31, 2017",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CHFWNR2MHZB6DA7G3PXOUZF2KE",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2017/03/31/honoring-graduate-unionization-has-become-a-matter-of-democratic-principle/",
                                       "In another staff editorial, Spectator’s editorial board argues that, in the aftermath of an overwhelming election in favor of unionization, the administration’s decision not to bargain is nothing less than anti-democratic."
                                   ]
                               ]
                           }
                    />
                    <Event year={"2018"}
                           opeds={
                               [
                                   [
                                       "Why I'm joining over 140 faculty in support of a graduate workers' union",
                                       "February 8, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/3K7FYJDYXZCNVNGSFFYPJOSV7M.jpg",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2018/02/08/why-im-joining-over-140-columbia-faculty-in-support-of-a-graduate-workers-union/",
                                       "Professor of English Marianne Hirsch contends that the working conditions of graduate students are closer to those of faculty than those of students."
                                   ],
                                   [
                                       "The Price of a Strike",
                                       "April 16, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MK467EKH65CC3NESX53DL3X2YI.png",
                                       [2],
                                       "https://www.columbiaspectator.com/opinion/2018/04/16/the-price-of-a-strike/",
                                       "After the announcement of the spring 2018 strike, columnist Joey Siegel argues that striking graduate students actually hurt undergraduates and therefore the interests of the two groups are not aligned."
                                   ],
                                   [
                                       "LTE: Yes the grad student strike is \"worth it for everyone\"",
                                       "April 18, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MK467EKH65CC3NESX53DL3X2YI.png",
                                       [1,2],
                                       "https://www.columbiaspectator.com/opinion/2018/04/18/letter-to-the-editor-yes-the-grad-student-strike-is-worth-it-for-everyone/",
                                       "In response to Siegel’s column, Student-Worker Solidarity lauds striking as a powerful tool and explains that the administration's refusal to bargain shows who is really to blame for undergraduates’ suffering education."
                                   ],
                                   [
                                       "Undergraduates, join the picket line",
                                       "April 24, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J7S6ODP655BYZBEDTARBOGVWTA.jpg",
                                       [2],
                                       "https://www.columbiaspectator.com/opinion/2018/04/24/undergraduates-join-the-picket-line/",
                                       "On the eve of the spring 2018 strike, a Columbia College junior calls on their experience with strikes in England to implore other undergraduates to join the picket line."
                                   ],
                                   [
                                       "Whether grad students are employees should be decided by law, not politics",
                                       "April 30, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MATMRN3TXBDRZAQSSZAMEFJRNE.jpg",
                                       [1,4],
                                       "https://www.columbiaspectator.com/opinion/2018/04/30/whether-grad-students-are-employees-should-be-decided-by-law-not-politics/",
                                       "As the spring 2018 strike unfolds, Provost John Coatsworth argues that unionization is about legal precedent and attributes the 2016 NLRB ruling as a result of temporary political changes."
                                   ],
                                   [
                                       "As other Ivies bargain, Columbia falls behind",
                                       "September 18, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/K3GYBNUG6FE2DC4BOOATQLZ7QI.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/09/18/as-other-ivies-bargain-columbia-falls-behind/",
                                       "In the wake of the spring 2018 strike, Graduate Workers of Columbia announces its plan of “relentless disruption,” finally abandoning the NLRB, and several doctoral candidates plead with the administration to recognize the union as other schools across the nation begin to bargain."
                                   ],
                                   [
                                       "After United Automobile Workers’ betrayal, Graduate Workers must vote ‘no’",
                                       "November 25, 2018",
                                       "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EQYJAQZWIFA7JAPM4LKGTVXHMI.jpg",
                                       [3],
                                       "https://www.columbiaspectator.com/main/2018/11/22/after-uaws-betrayal-graduate-workers-must-vote-no/",
                                       "After news of the University’s intent to bargain came as a shock to many graduate students, Jared Sacks, a member of Graduate Workers of Columbia, urges graduate students to vote against the proposed framework created without GWC input—which prohibits striking until April 2020. Union members ultimately voted to ratify the framework this month."
                                   ]
                               ]
                           }
                    />
                </div>
                </div>
                <DownArrow updateActive={this.incrementActiveItem}/>

            </div>
        );
    }
}

export default App;
