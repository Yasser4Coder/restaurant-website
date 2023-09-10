import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">نبذة عنا</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">.مرحبا بكم في مطعمنا! نحن نقدم اشهى الاطعمة وافضل الاجواء اكتشف مذاقات لا تنسى واستمتع باوقات ممتعة مع عائلتك واصدقائك نحن نتطلع الى خدمتكم</p>
        <button type="button" className="custom__button">اعرف اكثر</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">تاريخنا</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">.نحن نعتز بتاريخنا الطويل والمثير في عالم الضيافة وتقديم الاطعمة الرائعةانطلقت رحلتنا قبل سنوات ومنذ ذلك الحين ونحن سعداء بتقديم تجارب استثنائية لضيوفنا</p>
        <button type="button" className="custom__button">اعرف اكثر</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
