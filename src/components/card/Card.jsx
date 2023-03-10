import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.module.scss';
import { useState } from "react";

function Card(props) {
    const { english, transcription, russian, id } = props.item;

    let [translation, setIsShowed] = useState("Перевести");

    const changeShow = () => {
        setIsShowed(translation = russian);
    };




    return (
        <div styleName='wrapper'>
            <div styleName="card-wrapper" >
                <section styleName='main'>
                    <div styleName='study'>
                        <p>Изучено слов:</p>
                    </div>
                    <div styleName='study_card'>
                        <button styleName='btn_left'>назад</button>
                        <div id={id} styleName='word'>
                            <h2>{english}</h2>
                            <p>{transcription}</p>
                            <button styleName='btn_translate' onClick={changeShow}>{translation}</button>
                        </div>
                        <button styleName='btn_right' >вперед</button>
                    </div>
                    <p styleName='study_counter'>
                        счетчик
                    </p>
                </section>
            </div>
        </div>
    )
}

export default CSSModules(Card, style);



