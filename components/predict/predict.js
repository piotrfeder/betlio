import React, { Component } from 'react';
import './predict.css';

export class Predict extends Component {
    

    render() {
        let predict = this.props.predict;
        let type = this.props.type;
        let result = this.props.mresult;
        let predictResult,
        predict25Result,
        scorePredict,
        scoreAwayPredict;
       
        predict25Result = predictResult = scorePredict = scoreAwayPredict = '';

        if((predict === 'under' && result < 1.5) || (predict === 'over' && result > 1.5))
        {
            predictResult = 'match__predict--win';
        }
        else if((predict === 'under' && result > 1.5) || (predict === 'over' && result < 1.5))
        {
            predictResult = 'match__predict--lose';
        }

        if((predict === 'under' && result < 2.5) || (predict === 'over' && result > 2.5))
        {
            predict25Result = 'match__predict--win';
        }
        else  if((predict === 'under' && result > 2.5) || (predict === 'over' && result < 2.5)) {
            predict25Result = 'match__predict--lose';
        }

        if((predict === 'Home Score' && result > 0) || ( predict === 'Away Score' && result > 0))
        {
            scorePredict = 'match__predict--win';
        }
        else if((predict === 'Home Score' && isNaN(result)) || ( predict === 'Away Score' && isNaN(result)))
        {
            scorePredict = '';
        }

        else
        {
            scorePredict = 'match__predict--lose';
        }

        if((predict === 'Away Not Score' && result < 1) || ( predict === 'Home Not Score' && result < 1))
        {
            scoreAwayPredict = 'match__predict--win';
        }
        else if((predict === 'Away Not Score' && isNaN(result)) || ( predict === 'Home Not Score' && isNaN(result)))
        {
            scoreAwayPredict = '';
        }
        else
        {
            scoreAwayPredict = 'match__predict--lose';
        }

        
       
        let classes = 'match__predict ' + predictResult;
        let classe25s = 'match__predict ' + predict25Result;
        let classesScore = 'match__predict ' + scorePredict;
        let classesAScore = 'match__predict ' + scoreAwayPredict;
        
        if(isNaN(result))
        {
            predictResult = predict25Result = classesScore = classesAScore = 'match__predict ';
        }

       if(predict !== '50/50' && result !== ' ')
       {
           if(type === 'over25') {
            return (
                <div className={classe25s}>{ predict } 2.5</div>
               
            )
           }
           else if(type === 'over15') {
            return (
                <div className={classes}>{ predict } 1.5</div>
               
            )
           }
           else if (type === 'hscore') {
            return (
                <div className={classesScore}>{ predict }</div>
               
            )
           }
           if (type === 'ascore') {
            return (
                <div className={classesAScore}>{ predict }</div>
               
            )
           }
           else {
            
           }
           
      
            
       }
       else {
        return (
            <div style={{display: 'none'} }></div>
           
        )
       }

       
    }
}