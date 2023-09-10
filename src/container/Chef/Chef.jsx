import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="كلمة الشاف" />
      <h1 className="headtext__cormorant">ما الذي نؤمن به</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">.الجودة فوق كل شيئ، نحن نؤمن ان الجودة هي العنصر الاساسي لكل تجربة تناول طعام</p>
        </div>
        <p className="p__opensans">خدمة ممتازة، نحن نضع العملاء في المقدمة ونسعى جاهدين لتقديم خدمة ممتازة وضيافة حارة لضمان راحتهم واستمتاعهم بالزيارة ونسعى دائما للتجديد وابتكار اطباق جديدة وتجارب تناول طعام فريدة</p>
      </div>

      <div className="app__chef-sign">
        <p>B.Yasser</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
