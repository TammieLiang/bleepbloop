import { useState, useEffect } from "react";
import origOrderStyles from "./OriginalOrderComponent.module.css";

const OriginalOrderComponent = ({origOrder, fillouts}) => {

    const [order, setOrder] = useState(origOrder);
    //const [fillouts, setFillouts] = useState([]);


    // useEffect = (() => {
    //     if (order != undefined && order != null) {
    //         setFillouts(parseFillouts(order.fillouts));
    //     }
    // }, [order]);

    return (
        <div className={origOrderStyles.order_details}>
            <h3><strong>Client name: </strong>{ order && order.clientName }</h3>
            <p><strong> Client contact: </strong>  { order && order.clientContact}</p>
            <p><strong> Request: </strong> { order && order.requestDetail }</p>
            <p><strong> Requested on: </strong> { order && order.dateReqqed }</p>
            <p><strong> Deadline: </strong> { order && order.deadline }</p>
            <div className={origOrderStyles.status}>
                
            </div>

            <div className={origOrderStyles.fillouts}>
                <h4>Form fillouts:</h4>
                {fillouts && fillouts.map((question) => {
                    return <div className={origOrderStyles.question}>
                        <ul>
                            <li><b>{question.questionLabel + ": "}</b>
                                {question.questionAns}
                            </li>
                        </ul>
                    </div> 
                })}
            </div>
            <div><b>Reference images:</b></div>
            <div className={origOrderStyles.images}>
                {order && order.referenceImages.map((refImgURL) => {
                    return <img className={origOrderStyles.refImg} id={refImgURL + order.id} src={refImgURL.imageURL}></img>
                } )}
            </div>

        </div>
    )
}

export default OriginalOrderComponent;

