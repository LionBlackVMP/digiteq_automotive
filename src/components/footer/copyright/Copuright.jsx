import React from "react";
import style from "./../Footer.module.scss";
const Copyright = () => {
  return (
    <div className={style.copyright}>
      <div className={style.copyright_description}>
        <div>
          {" "}
          2023 © By using this website you agree to the use of cookies. <br />
          This is copy of{" "}
          <a href="https://www.digiteqautomotive.com/en">
            Digiteqautomotive
          </a>{" "}
          created by
          <a href="https://github.com/LionBlackVMP"> LionBlackVMP</a>
        </div>
      </div>
      <div className={style.settings}>
        <div>
          <a href="">Change cookie settings</a>
        </div>
        <div>
          <a href="">Personal Data Protection</a>{" "}
        </div>
        <div>
          <a href="">Compliance</a>
        </div>
        <div>
          <a href="">Terms and conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
