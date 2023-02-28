import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.module.scss';

function Card() {
    return (
        <div styleName='wrapper'>
            <div styleName="card-wrapper" >
                <section styleName='main'>
                    <div styleName='study'>
                        <p>Изучено слов:</p>
                    </div>
                    <div styleName='study_card'>
                        <button styleName='btn_left'>назад</button>
                        <div styleName='word'>
                            <div>
                                <h2>Слово</h2>
                                <p>Transcription</p>
                                <button styleName='btn_translate'>Перевести</button>
                            </div>
                        </div>
                        <button styleName='btn_right'>вперед</button>
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



