import React from 'react';
import styles from './footer.module.css';
import ItemsOfFooter from '../itemsOfFooter/itemsOfFooter';

function Footer() {

  const items = [
    {
      item: 'FAQ'
    },
    {
      item: 'Help Centre'
    },
    {
      item: 'Account'
    },
    {
      item: 'Media Centre'
    },
    {
      item: 'Investor Relations'
    },
    {
      item: 'Jobs'
    },
    {
      item: 'Ways to Watch'
    },
    {
      item: 'Terms of Use'
    },
    {
      item: 'Privacy'
    },
    {
      item: 'Cookie Preferences'
    },
    {
      item: 'Corporate Information'
    },
    {
      item: 'Contact Us'
    },
    {
      item: 'Speed Test'
    },
    {
      item: 'Legal Notices'
    },
    {
      item: 'Only on Netflix'
    },
  ];

  const _itemsOfFooter = items.map((item, i) => (
    <ItemsOfFooter key={i} item={item} />
  ));

  return (
    <div className={styles.footerContainer}>
      <div className={styles.content}>
        <p>Questions? Call <span>800 852 6334</span></p>
        <div>
          <ul>
            {_itemsOfFooter}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
