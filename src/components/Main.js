import React, { useState } from "react";
import thankYou from "../images/illustration-thank-you.svg";

export default function Main() {
    const [stage, ChangeStage] = useState(1)
    const [rating, ChangeRate] = useState(0)

    const stage1 = (
        <div className="stage1">
            <div className="star-icon"/>
            <div className="rating-state">
                <h1 className="evaluation">How did we do?</h1>
                <p className="evaluation-detail">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="rating-form">
                    <div className="rate"><input type="radio" name="rate" id="rate1" value="1" /><label htmlFor="rate1">1</label></div>
                    <div className="rate"><input type="radio" name="rate" id="rate2" value="2" /><label htmlFor="rate2">2</label></div>
                    <div className="rate"><input type="radio" name="rate" id="rate3" value="3" /><label htmlFor="rate3">3</label></div>
                    <div className="rate"><input type="radio" name="rate" id="rate4" value="4" /><label htmlFor="rate4">4</label></div>
                    <div className="rate"><input type="radio" name="rate" id="rate5" value="5" /><label htmlFor="rate5">5</label></div>
                    <button className="submit" onClick={onClickChangeStage}>Submit</button>
                </div>
            </div>
        </div>
    )
    const stage2 = (
        <div className="stage2">
            <img className="thanks-illustration" src={thankYou} alt="information received" width={150} height={100}></img>
            <p className="rating-container">You selected <span className="rating">{rating}</span> out of 5</p>
            <p className="thanks">Thank you!</p>
            <p className="appreciation">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )

    return (
        <main>
            <div className="container">
                {stage1}
                {stage===2 &&stage2}
            </div>
        </main>
    )

    function onClickChangeStage() {
        document.querySelector('.stage1').style.visibility = 'hidden';
        ChangeStage(2)
        let rates = Array.from(document.querySelectorAll('input[name="rate"]'))
        let custRate = rates.filter(rate => rate.checked)[0].value
        ChangeRate(custRate)

        let tf = 10, animationTime = 1;
        const main = Array.from(document.getElementsByTagName('main'))[0]
        main.style.transform = `translateY(${tf}px)`
        main.style.opacity = "0"
        setInterval(() => {
            if (main.style.opacity < 1) {
                tf-=10/(60*animationTime)
                main.style.transform = `translateY(${tf}px)`
                main.style.opacity = parseFloat(main.style.opacity)+1/(60*animationTime)
            }
        }, parseInt`${1000/60}`)
    }
}