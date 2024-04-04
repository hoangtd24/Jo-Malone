import classNames from "classnames/bind";
import logo from "../../assets/images/logo.png";
import text5 from "../../assets/images/text5.png";
import text6 from "../../assets/images/text6.png";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      <div className={cx("container")}>
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
