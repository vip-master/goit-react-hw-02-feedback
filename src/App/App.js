import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

    total=0

    positivePercentage=0

    createOptions(){
        return Object.keys(this.state).map(option=>({
            title: option,
            id: uuidv4()
        }))
    }

    handlerOfAll = (id)=>{
        id=this.options.find(i=>i.id===id).title
        if(id===undefined) throw Error("Incorrect option ID")
        const handler = ()=>{
            this.setState(prev=>{
                prev[id]++
                this.total=0
                Object.values(prev).forEach(i=>{this.total+=i})
                prev.good===0?
                this.positivePercentage=0:
                this.positivePercentage=(prev.good*100/this.total)
                return prev
            })
        }

        return handler
        
    }

    render() {
        return (
            <>
               <Section title="Buttons to vote (10$ per one, ask Mr. Burke)">
                    <FeedbackOptions options={this.options} onLeaveFeedback={this.handlerOfAll}/>
               </Section>
               <Section title="Incorruptible votes: ">
                    {this.total===0 ?
                    <Notification/>:
                    <Statistics {...this.state} 
                    total={this.total} 
                    positivePercentage={this.positivePercentage}/>}
               </Section>
            </>
        )
    }
}
