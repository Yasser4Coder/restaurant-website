import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">المفتاح لاشهى الاطباق</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> اكثر ما يميز مطعمي المفضل هي النضافة هذا يجعلني اشعر بالاطمئنان المطعم المفل ليس مجرد مكان لتناول الطعام وانما مكان تشعر فيه بالفرحة والراحة </p>
      <button type="button" className="custom__button">تصفح المزيد</button>
    </div>

    
  </div>
);

export default Header;
