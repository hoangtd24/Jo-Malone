import classNames from "classnames/bind";
import bg from "../../assets/images/fullbg.jfif";
import logo from "../../assets/images/logo.png";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("container")}>
      <img src={bg} className={cx("bg")} />
      <div className={cx("text_content")}>
        <img src={logo} className={cx("logo")} />
        <div className={cx("text_one")}>
          <p>Cảm ơn bạn đã tham gia trải nghiệm</p>
          <p>cùng Jo Malone London. Hãy ghé thăm</p>
          <p></p>
          cửa hàng để nhận phần quà đặc biệt
          <p>từ thương hiệu. Hy vọng bạn sẽ có một trải</p>
          <p>nghiệm mua sắm khó quên!</p>
        </div>
        <div className={cx("text_two")}>
          <p>Thank you for joining Jo Malone London.</p>
          <p>Visit our store for a special gift and enjoy</p>
          <p>our unique experience!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
