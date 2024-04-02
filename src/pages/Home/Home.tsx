import { Modal } from "@mui/material";
import axios from "axios";
import classNames from "classnames/bind";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../component/loading/Loading";
import styles from "./Home.module.scss";
import toPascalCase from "../../utils/toPascalCase";
import btn from "../../assets/images/btn.png";
import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg.png";

const cx = classNames.bind(styles);

interface formValues {
  name: string;
  phone: string;
  mail: string;
  policy: boolean;
}

const Home = () => {
  const [submited, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    defaultValues: {
      name: "",
      phone: "",
      mail: "",
      policy: false,
    },
  });

  const handleSurvey = async (data: formValues) => {
    setLoading(true);
    console.log(toPascalCase(data.name));
    await axios
      .post("https://api.landingpage.tcgh.com.vn/api/jomalone/create", {
        name: data.name,
        phone: data.phone,
        mail: data.mail,
      })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <>
      <div className={cx("container")}>
        <img src={bg} className={cx("bg")} />
        {!submited ? (
          <div className={cx("content")}>
            <img src={logo} className={cx("logo")} />
            <form
              onSubmit={handleSubmit(handleSurvey)}
              className={cx("form-content")}
            >
              <div className={cx("form-item")}>
                <label>Họ và tên: (*)</label>
                <input
                  {...register("name", {
                    required: true,
                    //pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Type your fullname"
                />
              </div>
              {errors.name?.type == "required" && <p>This field is required</p>}
              {errors.name?.type == "pattern" && <p>Please type your name</p>}
              <div className={cx("form-item")}>
                <label>Số điện thoại: (*)</label>
                <input
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 12,
                    pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                  })}
                  placeholder="Type your phone number"
                />
              </div>
              {errors.phone?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.phone?.type === "pattern" && (
                <p>Please type your phone number</p>
              )}
              {errors?.phone?.type === "minLength" && (
                <p>Please type your phone number</p>
              )}
              {errors?.phone?.type === "maxLength" && (
                <p>Please type your phone number</p>
              )}
              <div className={cx("form-item")}>
                <label>Email: (*)</label>
                <input
                  {...register("mail", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  placeholder="Type your email"
                />
              </div>
              {errors.mail?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors.mail?.type === "pattern" && <p>Please type your email</p>}
              <div className={cx("policy")}>
                <div className={cx("checkbox-wrapper-46")}>
                  <input
                    type="checkbox"
                    id="cbx-46"
                    className={cx("inp-cbx")}
                    {...register("policy", {
                      required: true,
                    })}
                  />
                  <label htmlFor="cbx-46" className={cx("cbx")}>
                    <span>
                      <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span className={cx("policy_text")}>
                      <p>Tôi đồng ý chia sẻ thông tin cá nhân và </p>
                      <p>Jo Malone London chỉ được sử dụng thông tin</p>
                      <p>cá nhân của tôi với mục đích lưu trữ và CSKH.</p>
                    </span>
                  </label>
                </div>
                <p className={cx("policy_text-en")}>
                  <p>I agree to share my personal information, and</p>
                  <p>Jo Malone London is only allowed to use</p>
                  <p>my personal information for storage and</p>
                  <p>customer service purposes.</p>
                </p>
              </div>
              <img
                src={btn}
                className={cx("submit_btn")}
                onClick={handleSubmit(handleSurvey)}
              />
            </form>
          </div>
        ) : (
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
        )}
      </div>
      <Modal
        open={loading}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Loading />
      </Modal>
    </>
  );
};

export default Home;
