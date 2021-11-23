import React from 'react';
import QuestionsAndAnswers from '../questionsAndAnswers/questionsAndAnswers';
import styles from './frequentlyAskedQuestions.module.css';

function FrequentlyAskedQuestions() {

  const questionsAndAnswers = [
    {
      question: 'What is Netflix?',
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
    },
    {
      question: 'How much does Netflix cost?',
      answer: `Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from $12.98 to $21.98 a month. No extra costs, no contracts.`
    },
    {
      question: 'Where can I watch?',
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question: 'How do I cancel?',
      answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.`
    },
    {
      question: 'What can I watch on Netflix?',
      answer: `Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.`
    },
    {
      question: 'Is Netflix good for children?',
      answer: "The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.<br /><br />Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see."
    },
  ];

  const _questionsAndAnswers = questionsAndAnswers.map((item, i) => (
    <QuestionsAndAnswers key={i} item={item} />
  )
  );

  return (
    <div className={styles.fAndqDiv}>
      <div className={styles.contentOfFAndqDiv}>
        <h1>Frequently Asked Questions</h1>
        <ul className={styles.listsContainer}>
          {
            _questionsAndAnswers
          }
        </ul>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
