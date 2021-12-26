import React, { useState } from 'react';
import styles from './questionsAndAnswers.module.css';

function QuestionsAndAnswers({ item }) {

  const [showAnswer, setShowAnswer] = useState(false);

  // if you wanna pass a html tag in props you can alse use /*dangerouslySetInnerHTML={{ __html: item?.answer }}*/ in your tag that you want
  // to show your data,   this way -> <div dangerouslySetInnerHTML={{ __html: item?.answer }}></div>
  // attention: between html tags should be empty

  return (
    <li className={styles.listItem} onClick={() => setShowAnswer(!showAnswer)}>
      <button>{item?.question}</button>
      <span className={`${showAnswer ? styles.trPlus : styles.flPlus}`}>+</span>
      <div className={`${showAnswer ? styles.trueCondition : styles.falseCondition}`}>
        <span dangerouslySetInnerHTML={{ __html: item?.answer }} className={styles.answers}>
        </span>
      </div>
    </li>
  );
}

export default QuestionsAndAnswers;
