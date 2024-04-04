import classNames from "classnames/bind";
import bg from "../../assets/images/fullbg.jfif";
import logo from "../../assets/images/logo.png";
import styles from "./Home.module.scss";
import text5 from "../../assets/images/text5.png";
import text6 from "../../assets/images/text6.png";
import { useState } from "react";
import Loading from "../../component/loading/Loading";

const cx = classNames.bind(styles);

const Home = () => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(true);

  return (
    <>
      {imgLoaded && <Loading />}
      <div className={cx("container")}>
        <img src={bg} className={cx("bg")} onLoad={() => setImgLoaded(false)} />
        <div className={cx("text_content")}>
          <div className={cx("logo")}>
            <img src={logo} />
          </div>
          <div className={cx("text5")}>
            <img src={text5} />
          </div>
          <div className={cx("text6")}>
            <img src={text6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
