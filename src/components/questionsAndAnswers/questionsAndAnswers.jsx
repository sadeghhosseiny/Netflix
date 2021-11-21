import React, { useState } from 'react';
import styles from './questionsAndAnswers.module.css';

function QuestionsAndAnswers({ item }) {

  const [wr, setWr] = useState(false);

  // if you wanna pass a html tag in props you can alse use /*dangerouslySetInnerHTML={{ __html: item?.answer }}*/ in your tag that you want
  // to show your data,   this way -> <div dangerouslySetInnerHTML={{ __html: item?.answer }}></div>
  // attention: between html tags should be empty

  return (
    <li className={styles.list} onClick={() => setWr(!wr)}>
      {console.log('item ', item?.br?.type)}
      <button>{item?.question}</button>
      <span className={`${wr ? styles.trPlus : styles.flPlus}`}>+</span>
      <div className={`${wr ? styles.trueCondition : styles.falseCondition}`}>
        <span>
          {item?.answer}
        </span>
      </div>
    </li>
  );
}

export default QuestionsAndAnswers;
