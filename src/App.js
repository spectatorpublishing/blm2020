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
        if (position < (4)) {
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
                <img className={'downArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'}
                style={{transform:'rotate(180deg)'}}/>
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
                <img className={'upArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'}/>
            </div>
        )
    }
}

const excludeYears = new Set([]);

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
        if (i === 4){
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
        }
        if (i > 4){
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
            return;
        }
        while (excludeYears.has(i+2015) && i <= 4){
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
        while (excludeYears.has(i+2016)){
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
                    <img className={'thepath'} src={'https://catfish.columbiaspectator.com/videos/ThePath.svg'} style={{opacity:0.0}}/>
                    <div className={'letter'}>
                        LETTER FROM THE EDITOR:
                    </div>
                    <div className="letter-content">
                        <p>Dear readers,</p><p>

                        Outside of the classroom, I find that personal growth and moral inquiry are often inadvertently regarded as separate dispositions at Columbia. When in class, we maintain that to shape and alter society is to scribble down a thought and raise our hands. Yet upon leaving the classroom, it seems that for many, notions of change and the responsibility to act recoil inward. </p><p>

                        Are discussions on justice, equality, race, or class only of “worth” when they lead to a Columbia degree or are the impassioned arguments I’ve heard in class catalyzed by something more? </p><p>

                        In the wake of the death of George Floyd and the subsequent protests, I am skeptical about how long this persistent hum of morals being released from their restraints will continue. However, while it lasts, I encourage the exploration of this phenomena—internal morality’s exposure to the outside world. I fundamentally believe that personal growth and moral inquiry are, in effect, the same thing.  </p><p>

                        In your pursuit of morality and personal growth, I urge you to read through some of the experiences of and injustices suffered by the Black community at the hands of students and Columbia itself over the past four years. The purpose of this scope is to promote sustained action, so I also implore you to treat it as more than a class reading and aim to deeply engage with it. I hope you will continue to seek a better understanding of not only your peers and the greater Black community, but also other oppressed people grappling with racism in America. </p><p>

                        Each piece will have an icon that corresponds with its general theme for increased accessibility and absorption:</p>
                        <div><img className="keyImage" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DQYXU4AKQFDTTGKN5LVPZ33774.png"></img>Administrative: What is the impact of institutional racism?</div>
                        <div><img className="keyImage" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OHLML5GTFVBC3NLCWJY6FZ6SYM.png"></img>Student Life: What is the impact of anti-Blackness?</div>
                        <div><img className="keyImage" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YJCTG4CADVFV3NUQVONGVZ5YIY.png"></img>Student Life: What is the Black experience at Columbia?</div>
                        <div><img className="keyImage" src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MFYJEBOIYNBJTNYGQHB3O6PAZY.png"></img>City: What is Columbia’s impact on Harlem and other predominantly Black communities?</div>
                        
                        <p>

                        So much is currently unknown, but I hope that you find some meaning in reading what is. </p><p>

                        Sincerely,</p><p>
                        Tamarah Wallace</p><p>
                        Editorial Page Editor</p>
                    </div>
                    <div className="timeline-title">
                    EXPLORE PIECES
                    </div>
                </div>
                <UpArrow updateActive={this.decrementActiveItem}/>
                <Timeline excludeYears = {excludeYears} activeItem = {this.state.activeItem} setActiveItem={this.setActiveItem}/>
                <div className={'allcontainer'}>
                <div className={'allcontain'} id={'allcontain'} style={{transform: 'translateY(0)'}}>
                    <Event year={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ERFLEC4UUVEHLMYO2EQOCDSSDY.png"}
                           opeds={
                               [
                                   [
                                       "The case for ethnic studies in the Core",
                                       "November 16, 2016",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/ZC4JPDILVJD6RHTEO5WNG763HI",
                                       [2,3,4],
                                       "https://www.columbiaspectator.com/opinion/2016/11/16/case-ethnic-studies-core/",
                                       "A shift in Core requirements and designations could allow historically excluded areas of study the differentiated space they deserve. Ethnic studies should be part of Columbia's required Core Curriculum. All students should be exposed to the bodies of knowledge and dialogue encouraged and examined by this interdisciplinary field. As it is, the Core sends an alienating and powerful message to students about what constitutes universally valuable experience and knowledge. The Core perpetuates hierarchical notions of canon and knowledge bodies."
                                   ],
                                   [
                                       "Letter to the editor: #MLKNeverSaidThat",
                                        "October 31, 2016",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3RLTVEDYQFF27HMYX362XCFUMY",
                                        [3,4],
                                        "https://www.columbiaspectator.com/opinion/2016/10/30/letter-editor-mlkneversaidthat/",
                                        "White professors and white students will never understand what it is like to sit through two semesters of text after text that champions rationality above all else, while aggressively asserting that the \"savages\" outside Europe lack reason. They may sympathize with students of color, but they will never feel the weight of academia telling them that their people are lesser, inferior, and incapable due to their race."
                                   ],
                                   [
                                       "\"Tough on Crime\" policies are tough on the public",
                                       "September 27, 2016",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/CVCCOIA3CFCPTNS72OR5DXABCI",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2016/09/27/tough-crime-policies-are-tough-public/",
                                       "We, as both Columbia students and concerned New York residents, must push Congress to focus on an assessment of the structure and goals of federal sentencing policies, specifically on the effects of mandatory sentencing, the length of drug offender sentences, and the impact of long-term incarceration on the federal prison system. "
                                   ],
                                   [
                                       "The Mixed-Race in-betweeners",
                                       "August 18, 2016",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VHHFCFF6IJF37LOSCQKGTEOTAU",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2015/11/12/mixed-race-betweeners/",
                                       "Mixed individuals experience a sense of disconnect that has little to do with the identity-based communities they lay claim to. We also often feel that our involvement in these student groups is disingenuous. Who am I, a light-skinned Mixed man who's rather racially ambiguous, to speak on colorism or racial profiling? Often, society's perception deviates from the traditional racial or ethnic narrative, which places us somewhere outside of what should be a relatable experience. For me to say that I am Black can often feel audacious. Who am I to be so bold?"
                                   ]
                               ]
                           }
                    />
                    <Event year={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TT7BYIORC5H6DFP7DCAMRMAD7E.png"}
                           opeds={
                               [
                                   [
                                       "The problem with discourse",
                                       "February 13, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3RLTVEDYQFF27HMYX362XCFUMY",
                                       [3,4],
                                       "https://www.columbiaspectator.com/opinion/2017/02/13/the-problem-with-discourse/",
                                       " In this speech, Martin Luther King Jr., a staunch supporter of nonviolence, does what many contemporary critics of rioting are unable to do: He sincerely engages with the reasoning behind riots. King does not rebuke riots wholesale. He does not dismiss the rioters by depicting them as illogical and entitled youth. He does not blame the symptoms for the virus. Instead, he works to understand their rationale and root their actions in the inequities present in our political system."
                                   ],
                                   [
                                       "I am not your token negro",
                                       "November 13, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UWTH66IUZVE4FHEYUXHWRVLANA.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2017/11/14/i-am-not-your-token-negro/",
                                       "Perhaps the administration values the free speech of white supremacists because it has historically benefitted from their ideologies, but it attempts to distance itself from bigots through speeches about diversity and tolerance, Big Brotheresque fireside chats, and superficial inclusion workshops."
                                   ],
                                   [
                                       "There's validation and worth in black women's rage",
                                       "January 26, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/PCQR6ZT73BCLZLBWRQSJNTX5AM",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2016/12/01/theres-validation-and-worth-black-womens-rage/",
                                       "As a black woman in this society, I often feel like my identity is taken for granted or abused, as if we black women somehow simultaneously offer too much and not enough to society. We are sensationalized and exoticized in the media, while our various contributions are exploited to the masses of non-black consumers.  People will pay thousands of dollars to obtain the semblance of our physical features, but only praise them on women of other races."
                                   ],
                                   [
                                       "Columbia: You owe Harlem, big time",
                                       "February 17, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/SHMEGXTRTNDX3KFT3HUYS75ROI",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2017/02/17/columbia-you-owe-harlem-big-time/",
                                       "After forcing people out of business, forcing residents to leave their homes, and completely failing to acknowledge people’s concerns, Columbia owes Harlem. Reparations can occur in many forms, but in this case, I believe that the most effective form of reparations would be offering special consideration during the admissions process to applicants who reside in Harlem."
                                   ],
                                   [
                                       "What it takes to pass outside of class",
                                       "November 8, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/2REYHZX3NBGXFODFXR7DGSF6DU.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2017/11/09/what-it-takes-to-pass-outside-of-class/",
                                       "From my entrance to the outside world, I was taught the importance of fitting in, along the lines of both race and gender. My race has always been intrinsically linked to my gender. I lived in an environment where the womanhood I was exposed to was black womanhood. My mother had braids, sew-ins, and relaxed hair that she paired with red lipstick and gold hoop earrings. So I saw my race as being inseparable from my womanhood. I am a black woman, more specifically a black trans woman. I don’t exist without an intersection of those three identities."
                                   ],
                                   [
                                       "Investing in Dark Money",
                                       "November 1, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/6T7UAOMUE5AUTEUQG252LQZUDI.jpg",
                                       [2],
                                       "https://www.columbiaspectator.com/opinion/2017/11/01/investing-in-dark-money/",
                                       "If Columbia is truly committed to creating a diverse community of scholars and faculty, it cannot sacrifice these very principles by investing its endowment in a hedge fund that is complicit in spreading white supremacy or ethno-nationalism. Are increased returns worth compromising the values of our institution? Or will Bollinger and the University Trustees continue an institutional history of consorting with fascists?"
                                   ],
                                   [
                                       "The problematic past of Contemporary Civilization",
                                       "October 26, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/X6MF56DSJJDRHDAATCOLE7A5HA.jpg",
                                       [2, 3],
                                       "https://www.columbiaspectator.com/opinion/2017/10/26/the-problematic-past-of-contemporary-civilization/",
                                       "It is undeniable that Columbia and CC have come a long way since their creation. The current curriculum no longer requires students to examine texts that promote scientific racism or asks students to elucidate the importance of Eli Whitney’s cotton gin in the context of American slavery. That being said, reverberations of the course’s distasteful ancestry still occupy the current curriculum. Contemporary Civilization and the broader Columbia Core still embrace Eurocentric canons and practices, keeping the same ugly form that was established when Columbia was, as University President Butler declared 111 years ago, a “Christian institution.”"
                                   ],
                                   [
                                       "The problem with ‘Africans’",
                                       "October 19, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DLSX7LENRZHZTPZUAN7MZN42AY.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2017/10/20/the-problem-with-africans/",
                                       "If you are a student who is not from an African country, please stop referring to those who are as “Africans,” because to do so is to rob us of our distinct cultures. To do so is essentially to proclaim that you do not care where we, as individuals, are from. Please stop asking us if we speak “African” because “African” is not a language. To students who are from an African country, please stop letting others refer to you as just “African,” because you are not. You know that we do not all speak the same language because there are over 1,500 languages spoken in Africa. You know that we do not all dress the same."
                                   ],
                                   [
                                       "Hey hey, ho ho, white performative allyship has got to go",
                                       "October 16, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/4IYZEJJZNVF75DBSD45WJE3CK4.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2017/10/17/hey-hey-ho-ho-white-performative-allyship-has-got-to-go/",
                                       "It seems that many white people are only willing to condemn instances of overt white supremacy, while covertly benefitting from systematic racial inequalities. Especially at Columbia, the Trump era has enabled the rise of performative allyship: empty activism from privileged folk, namely white liberals, driven by the desire to gain social capital. They will wear safety pins, take part in trending hashtags, post pictures from their superficial résumé-stuffer trips to Kenya, rap along to a Kendrick song about police brutality, and feel that they just ended racism. These actions are nullified by the fact that they fail to tackle the root of the problem, which is an inequitable system that oppresses people of color."
                                   ],
                                   [
                                       "Black lives matter, black girls too",
                                       "February 28, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/32VCXDCGBJHKFDQ6YN2DY64QRQ",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2017/02/28/black-lives-matter-black-girls-too/",
                                       "In 2017, almost 50 years after BOSS’s founding, there are a plethora of frustrations that still come with being a black woman at Barnard. Our voices often go unheard on campus because we are missing from several facets of school life. There are too few black women sitting in our classrooms, and even fewer at the front of them. We need more black women to advocate for us on an administrative level, as well as greater representation in our own school government. As a school that frequently reiterates its commitment to furthering the lives of all women, Barnard needs to make sure that black women have several seats at the table"
                                   ],
                                   [
                                       "Farewell to the Obamas",
                                       "January 20, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/QN22R5ZO2FEOBHRG3XTNCTECFQ",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2017/01/20/scope-farewell-obamas/",
                                       "As a Columbia student, as a child of a foreigner, and as a person of color, Obama is a reflection of the patchwork of America and the patchwork of this campus. It’s no surprise, then, that we as students—regardless of our personal opinions on his policies—have engaged so deeply with his legacy as a president. For all four of our authors, there is a resounding feeling that Obama held his position with unparalleled grace and poise—that, independent of his political choices, he gave the American people an example of what a president should be."
                                   ],
                                   [
                                       "Asian America, address anti-Blackness",
                                       "January 14, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NZFPE2QKKREB5C2HRKQ7FNJFYM",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2015/11/20/asian-america-address-anti-blackness/",
                                       "Conversations within the Asian American community need to focus not on assimilation into a racist framework, but on dismantling these very power structures by actively working with other students of color. There is a long history of solidarity between Black and Asian communities, and as Asian Americans, we have benefitted and continue to benefit from the work of Black activists. Given the fact that we owe a great deal not just to the centuries-long struggle of African Americans, but also to Black intellectuals, radicals, scholars, and activists, it is not just natural but absolutely vital that we respect and reciprocate the struggle and sacrifices of the Black community."
                                   ],
                                   [
                                       "For men of color, depression is not weak, criminal, or ungrateful",
                                       "January 12, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XVSNHHCVKVDZHE62UJ33UY4C3Y",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2016/11/17/men-color-depression-not-weak-criminal-or-ungrateful/",
                                       "Part of the challenge you might face in getting well is that public self-care bears a stigma. You're expected to strain yourself. Gentle forms of self-care (e.g. yoga, meditation) not only defy this stereotype but threaten your masculinity. Just the other day, when you invited a friend of yours to go to yoga with you, he said, \"There are some parts of Philly that just won't leave me.\" This reminds you of the response that you would get when you led black and brown middle schoolers through yoga and guided meditations back in your hometown: \"Man, I ain't finna do that gay a** s**t.\""
                                   ],
                                   [
                                       "Letter to the editor: Removing Jefferson's statue won't eradicate racism",
                                       "February 7, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MRAB5CVOKVB7NMZA542DG2AQAQ",
                                       [2, 3],
                                       "https://www.columbiaspectator.com/opinion/2015/12/13/letter-editor-removing-jeffersons-statue-wont-eradicate-racism/",
                                       "Institutional racism is pervasive, slippery, and dangerous. It can be found in symbols, such as statues or university names, or in policies that often have good intentions. The fight against institutional racism needs to be just as nuanced and fluid as institutional racism; otherwise, changes won't be sustainable or make any lasting impact. Removing any and all symbols that mark this racism is not very nuanced, nor is it the most powerful way to truly move toward a more inclusive campus."
                                   ],
                                   [
                                       "Letter to the editor: The anti-oppression politics of safe spaces",
                                       "January 25, 2017",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FUADVK5VQBAEPBWD7ZFYOGJ77U",
                                       [3,4],
                                       "https://www.columbiaspectator.com/opinion/2015/12/01/anti-oppression-politics-safe-spaces/",
                                       "Anti-oppression politics are about ending oppression, which means undermining the institutions and social practices that violently perpetuate privilege, want, and suffering. Safe spaces exist to resist oppression. They are, thus, necessarily political spaces. Employing the somehow radical idea that the existence of oppression and the testimony of those who experience it most directly are not topics for regular interrogation, the norms of the safe space counteract the systematic ways by which voices are silenced and reality is obscured."
                                   ]
                               ]
                           }
                    />
                    <Event year={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/2DL4N6DDVNHP3CJC6KJJYP4IE4.png"}
                           opeds={
                               [
                                   [
                                       "Why I left my frat",
                                       "April 27, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5FHWIX7QHBC45BTIHTY4U3ASVA.JPG",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2018/04/27/why-i-left-my-frat/",
                                       " I learned loyalty in a frat meant skin came before whoever you called your kin. The same person that you would do anything for would also be willing, at every turn, to make you loathe yourself. The same person that you would fist fight for would not even check his N-word-saying pal in front of a group of his peers. No one should be in an environment where you literally hate the person to the left of you. When I realized that I could change absolutely nothing in my fraternity, I decided to leave."
                                   ],
                                   [
                                       "There’s a difference between diversity and inclusion",
                                       "December 4, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/S6NTZJISTVDKXPYVW4JTNH2RMI.jpg",                                       
                                       [2,3,4],
                                       "https://www.columbiaspectator.com/opinion/2018/12/05/theres-a-difference-between-diversity-and-inclusion/",
                                       "There is a difference between diversity and inclusion. The University uses the presence of a diverse student body to indicate the attainment of a progressive ideal, a post-Jim Crow vision in which people of all backgrounds can coexist in a state of equity. But equity does not immediately arrive with the existence of “diversity.” A diverse environment must accompany active work on both institutional and communal levels to ensure that people of all backgrounds are being empowered to fight oppressive systems."
                                   ],
                                   [
                                       "The Liberation tour: the full story of Columbia",
                                       "April 26, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/BXEVE5JWKVDCPNITANNTHV4E3U",
                                       [1,2],
                                       "https://www.columbiaspectator.com/opinion/2018/04/26/the-liberation-tour-the-full-story-of-columbia/",
                                       "We must begin to use our Ivy League education to preserve this community and empower our neighbors as opposed to raising their property taxes and complaining about their loud block parties. Being a part of making Columbia more equitable means supporting and contributing to activism that brings attention to Columbia’s continued taking of land from residents of Harlem. It’s necessary for students and faculty members, at this juncture in history, to demand that statues, sculptures, and curricula be representative of all Americans."
                                   ],
                                   [
                                       "Columbia, how much have you really changed since 1968?",
                                       "April 12, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/IEU7FD4TTBEPHONHPQ4T4QISK4.jpg",
                                       [1,2,3],
                                       "https://www.columbiaspectator.com/opinion/2018/04/13/columbia-how-much-have-you-really-changed-since-1968/",
                                       "Eminent domain is just one of the many direct and indirect tactics through which long-time residents of Manhattanville have been displaced since 2003, but we speak of it specifically because it is most evocative. Just like the Morningside Gymnasium fifty years ago, it stands for a larger phenomenon: Columbia is a colony in a segregated city, and West Harlem is our ever-shrinking frontier. Eminent domain is a power invoked by the state to seize inhabited land—shops, apartment buildings, schools—by surveying the area and condemning it as \"blighted\"."                                   
                                    ],
                                   [
                                       "Grappling with history, identity and understanding",
                                       "April 12, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DZ7NJIM5LVGSPETEKFWY27KFTA.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/04/12/grappling-with-history-identity-and-understanding/",
                                       " I know that there’s a whole lot more for me to learn—especially about my country and its people. There’s also whole lot to forgive—of myself and my own shortcomings, and of the people in the past who did my people wrong. I’m beginning to realize that it’s impossible to fully understand the nuances of one’s present identity without looking into the past. Without asking yourself where you come from, and who you come from."
                                   ],
                                   [
                                       "Is this your campus activism?",
                                       "March 29, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/L4YJEUJ375CNBAIOEHWL5KAHNE.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2018/03/30/is-this-your-campus-activism/",
                                       "There exists at Columbia a faux-liberal atmosphere of commodified activism, one in which being “woke” can gain you social status. In this way, many students deem themselves activists through hollow conversations, social media posts, and boisterous tweets surrounding current political issues. As a group we act hollowly with good intentions, akin to T’Challa’s construction of the youth engagement center."
                                   ],
                                   [
                                       "Black emotional labor is core to my Columbia experience",
                                       "March 27, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XX27ZHY3PFDM7ENFKM3GNIFIMU.JPG",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2018/03/28/black-emotional-labor-is-core-to-my-columbia-experience/",
                                       "I have come to understand that on top of my current 18-credit course load, I may be forced to teach an extra class in my daily life. One in which I am constantly instructing my peers on my existence and recovering from racial trauma while avoiding a personal descent into complete Black rage—a form of anger, frustration, and disillusionment that stems from the historic racism derived from the Black experience."
                                   ],
                                   [
                                       "“Blackness,” questioned",
                                       "February 1, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/VVZ6SYBL5FDXJHZ6RAPWTFEAVE.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2018/02/01/blackness-questioned/",
                                       "But the vestiges of being an “Oreo” have stayed with me as I’ve embarked upon a new journey here at Columbia. I constantly question my identity as a black woman on this campus. Although I am in classes with more students of color who have an even wider range of experiences and ideas than those I was exposed to in high school, and am no longer required to assimilate in the same ways, I still struggle to come to terms with the fact that mainstream blackness does not match my own."
                                   ],
                                   [
                                       "The right to be mad",
                                       "April 16, 2018",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/HSQKB3EFLFC7XMIN56KWWGWXKQ.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2018/04/17/the-right-to-be-mad/",
                                       "Black anger is warranted. Anger is a normal human emotion. At what point is the slaughtering and ravaging of black bodies by systematic oppression, the erasure of black voices from the media and classroom curriculum, and white people treating Trump’s presidency as a joke not supposed to make us angry? As Audre Lorde explains, “My anger is a response to racist attitudes, to the actions and presumptions that arise out of those attitudes."
                                   ]
                               ]
                           }
                    />
                    <Event year={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DR7XG4WL2ZAFPKAUM4ZTY2A33Q.png"}
                           opeds={
                               [
                                   [
                                       "A culture of neglect",
                                       "October 28, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TFPYNSVFK5HVDFXDUNAJ4DTFJA",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2019/10/28/a-culture-of-neglect/",
                                       "The administration’s relationship to community members is like that of an antagonistic proprietor: It makes continued efforts to take land that is not its own, minimize dissent, and enforce its own sense of order. Public Safety, which patrols the surrounding neighborhood, seems to prioritize a sense of security for students above all else, including a sense of safety for community members."
                                   ],
                                   [
                                       "We can’t afford another Seneca Village in Manhattanville",
                                       "September 15, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JZSBY5Q4BFHKTCDQTJRBMDO6WE.jpg",
                                       [1],
                                       "https://www.columbiaspectator.com/opinion/2019/09/16/we-cant-afford-another-seneca-village-in-manhattanville/",
                                       "On the one hand, Columbia faculty working on the Seneca Village Project requested excavation permits to study the dreadful effects of eminent domain on 5 acres across seven blocks. They argued that knowing “what it meant to be a member of the black middle-class” is worth the excavation. On the other hand, hypocritically, Columbia asked New York for a permit to engulf 17 acres of land in a 0.35 square mile majority-minority low-income neighborhood." 
                                   ],
                                   [
                                       "Black is a color in the rainbow",
                                       "April 16, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5D2Z4P4GMJD5VNEVSQEFWUR2CY.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2019/04/16/black-is-a-color-in-the-rainbow/",
                                       "I know that Columbia is there to support us. However, there have been times attending a PWI when this same level of institutional support did not seem to apply to my blackness. Recent racially charged incidents toward black students and the subsequent lack of administrative action caused me to question my black identity and its worth on this campus. My friend, on the other hand, is able to be unapologetically black at Howard because her blackness is constantly affirmed by her peers and the administration."
                                   ],
                                   [
                                       "A litany for survival",
                                       "October 8, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/F2KZZJQGAREQHIULOC3USWEBNQ.jpg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2019/10/08/a-litany-for-survival/",
                                       "Columbia, as an institution, is hostile towards people from marginalized backgrounds pushing for radical change. As if it’s clockwork, whenever change is advocated for, a chorus of detractors reminds us of how much the University has already done for us and how what we’re asking for is impossible. What’s so controversial about asking a university with an 10.87 billion-dollar endowment for equitable access to food, health care, and housing?"
                                   ],
                                   [
                                       "What we owe to one other: the necessity to support Rodney Reed",
                                       "November 5, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XG64SO4D7JCVTKQSWZU65QODWE.jpg",
                                       [1],
                                        "https://www.columbiaspectator.com/opinion/2019/11/06/what-we-owe-to-one-other-the-necessity-to-support-rodney-reed/",
                                        "As more than just an example of how innocent people get convicted, Reed’s case demonstrates how black people are disproportionately sentenced to death. Reed’s alleged guilt seems to be maintained by the jury’s inability to believe that a black man could be having an affair with a white woman. His guilt depends on the toxic presupposition that a white cop was more reliable than a black man."

                                   ],
                                   [
                                       "No Space for Hate",
                                       "March 7, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/2SMCBZXWLNAUXF56LKLPFMVYXI.jpg",
                                       [3],
                                       "https://www.columbiaspectator.com/opinion/2019/03/07/no-space-for-hate/",
                                       "As conversation among my peers grew, I realized the shared personal trauma of many students in the Columbia community. The stories of my peers rarely make it to anyone’s front desk for a variety of reasons: the lack of clarity between free speech and acts of discrimination, the rarely discussed option of reporting, the time-consuming process of investigations, and the lack of support systems for victims. Unfortunately, this is not just a Columbia problem."
                                   ],
                                   [
                                       "Why we teach Toni Morrison in January",
                                       "February 11, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Y5FAYY23MNGA5FRMJJEWUPSD2U.jpg",
                                       [2, 3],
                                       "https://www.columbiaspectator.com/opinion/2019/02/12/why-we-teach-toni-morrison-in-january/",
                                       "Discussions of race, gender, and class are not only critical in texts that are centered on blackness, femininity, and poverty, but also in books like The Symposium that feature aristocratic white men. After all, these texts also make arguments about race and gender in what they choose to highlight as much as in what they choose to elide. While the in-class conversations we have about these issues may not be tantamount to radical change, they are an important first step to disrupt ingrained patterns of thought."
                                   ],
                                   [
                                       "They don’t really care about us",
                                       "May 21, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/5M3EMMSYG5BFTEXBQBHEXZTK3E.jpg",
                                       [4],
                                       "https://www.columbiaspectator.com/opinion/2019/05/21/they-dont-really-care-about-us/",
                                       "Being in a Spectator that reached out only to Columbia, I felt that, if I could find anything of myself in Spectator, it was only a small fraction of who I was. As I continued to write for this publication, I began to feel that, in the same way that it seemed that my value to the University administration was as another number in Columbia’s diversity statistics, I too was tokenized at Spectator.  I was the Black kid from the Black neighborhood in Los Angeles writing about the Black kids at Columbia and our Black neighbors here in Harlem."
                                   ],
                                   [
                                       "A slice of modern racism",
                                       "January 22, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7GAXQSUWDJHIPAEK6VERGLCL7Y.jpg",
                                       [2, 3, 4],
                                       "https://www.columbiaspectator.com/opinion/2019/01/23/a-slice-of-modern-racism/",
                                       "If the Core claims to provoke nuanced thought, it has an obligation to incorporate more thoughtful conversations about race into its courses. There needs to be more than just a few chapters by Du Bois here, one by Fanon there, a few pieces of jazz music, and some paintings by Manet that depict black people. We need to stop treating these pieces of work like throwaways simply meant to appease those who criticize the homogenous nature of the Core."
                                   ],
                                   [
                                       "Letter to the Editor: Racism re-re-examined",
                                       "April 29, 2019",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/4EDU67YKSBBIJPHSRFNJ3OCC6U.jpeg",
                                       [3, 4],
                                       "https://www.columbiaspectator.com/opinion/2019/04/29/letter-to-the-editor-racism-re-re-examined-3/",
                                       "Racists are not racist because of one “single scary encounter with Black people.” Through exposure to negative media portrayals of Black people, prevailing stereotypes, and ongoing subjugation, people internalize systemic racism and then implicitly, Black people are thought of as scary, encounter or not. As stated before, the system enables this internalization and if it didn’t, racism, as Hughes knows it, would not pervade society."
                                   ]
                               ]
                           }
                    />
                    <Event year={"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UNEVBVKOCNDENARSELRFZZE2ZA.png"}
                           opeds={
                               [
                                   [
                                       "Actions speak louder than words: Columbia’s deeply rooted anti-Blackness problem",
                                       "January 27, 2020",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/FPXUKSO44ZBELLDWBEIH7EYKWU.jpg",
                                       [2, 3],
                                       "https://www.columbiaspectator.com/opinion/2020/01/27/actions-speak-louder-than-words-columbias-deeply-rooted-anti-blackness-problem/",
                                       "In order to help create a community that is truly safe for all students and all people, Columbia must recognize the want of better safety for the Harlem community and Black students on campus. It must also acknowledge its own violence and make a commitment to redressing the harm that it has caused to the historically Black community in which it resides. Until then, we believe that the University will continue to fail in its mission to “stand together against hate"
                                   ],
                                   [
                                       "Marginalized students have always called for accommodations. Will it take a pandemic for their voices to be heard?",
                                       "April 14, 2020",
                                       "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/IBOQGVO6KFDAHHBZFW3PR3DZHQ.png",
                                       [2, 3],
                                       "https://www.columbiaspectator.com/opinion/2020/04/14/marginalized-students-have-always-called-for-accommodations-will-it-take-a-pandemic-for-their-voices-to-be-heard/",
                                       "Fortunately, Columbia’s administration and many professors have been especially accommodating during these times, taking into account the extreme conditions of this unprecedented moment to make policies that best support as many students as possible. However, the fact that it took a pandemic to provide accommodations that students from low-income backgrounds and students with disabilities have historically been begging for should not be lost on us."
                                   ],
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
