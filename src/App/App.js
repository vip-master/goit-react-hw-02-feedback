import React, { Component } from 'react';
import Section from '../Components/section/Section'
import Statistics from '../Components/statistics/Statistics';
import Notification from '../Components/notification/Notification';
import FeedbackOptions from '../Components/feedbackOptions/FeedbackOptions';


export default class App extends Component {

    constructor(){
        super()
        this.options=this.createOptions()
    }

    _ADAM_STATE_={
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    state={...this._ADAM_STATE_};

    options=[]

    createOptions(){
        return Object.keys(this.state)
    }

    handlerOfAll = (e)=>{
        this.setState(p=>({[e.target.id]:p[e.target.id]+1}))
        
    }

    render() {    	

       	let total=0
       	let positivePercentage=0

        this.options.map(o=>total+=this.state[o])

        this.state.good===0?
        positivePercentage=0:
        positivePercentage=(this.state.good*100/total)
        
        return (
            <>
               <Section title="Buttons to vote (10$ per one, ask Mr. Burke)">
                    <FeedbackOptions options={this.options} onLeaveFeedback={this.handlerOfAll}/>
               </Section>
               <Section title="Incorruptible votes: ">
                    {total===0 ?
                    <Notification/>:
                    <Statistics {...this.state} 
                    total={total} 
                    positivePercentage={positivePercentage}/>}
               </Section>
            </>
        )
    }
}
