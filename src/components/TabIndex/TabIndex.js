import React, {useState} from "react";

const TabIndex = () => {

    const [showAnswers, setShowAnswers] = useState(false);

    const changeShowAnswers = () => {
        setShowAnswers(!showAnswers);
    };

    const renderAnswer = (text) => {
        if (!showAnswers) {
            return '';
        }
        return (
            <span>
                <b>[{text}]</b>
            </span>
        );
    };

    return (
        <div>
            <div tabIndex='0'>
                Div TabIndex 0 {renderAnswer(1)}
                <div tabIndex='0'>Div (nested in 0) TabIndex 0 {renderAnswer(2)}</div>
            </div>
            <div tabIndex='0'>TabIndex 0 {renderAnswer(3)}</div>
            <div tabIndex='2'>
                TabIndex 2 {renderAnswer(8)}
                <div tabIndex='0'>Div (nested in 2) TabIndex 0 {renderAnswer(4)}</div>
                <div tabIndex='1'>Div (nested in 2) TabIndex 1 {renderAnswer(6)}</div>
                <div tabIndex='2'>Div (nested in 2) TabIndex 2 {renderAnswer(9)}</div>
                <div tabIndex='3'>Div (nested in 2) TabIndex 3 {renderAnswer(10)}</div>
            </div>
            <div tabIndex='1'>TabIndex 1 {renderAnswer(7)}</div>
            <div tabIndex='3'>TabIndex 3 {renderAnswer(11)}</div>
            <div>No TabIndex {renderAnswer('NO FOCUS!')}</div>

            <p>
                Focus will be applied from the smallest tabIndex.
                Firstly the container then the nested elements.
            </p>

            <p>
                <button onClick={changeShowAnswers}>{showAnswers ? 'Hide' : 'Show'} Answers</button>
                {renderAnswer(5)}
            </p>
        </div>
    );

};

export default TabIndex;