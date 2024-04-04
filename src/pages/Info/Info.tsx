import { Modal } from "@mui/material";
import axios from "axios";
import classNames from "classnames/bind";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import btn from "../../assets/images/btn.png";
import logo from "../../assets/images/logo.png";
import nextImg from "../../assets/images/next.png";
import product from "../../assets/images/product.png";
import text1 from "../../assets/images/text1.png";
import text2 from "../../assets/images/text2.png";
import text3 from "../../assets/images/text3.png";
import text4 from "../../assets/images/text4.png";
import Loading from "../../component/loading/Loading";
import styles from "./Info.module.scss";

const cx = classNames.bind(styles);

interface formValues {
  name: string;
  phone: string;
  mail: string;
  policy: boolean;
}

const Info = () => {
  const [next, setNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(true);
  const navigate = useNavigate();

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
    await axios
      .post("https://api.landingpage.tcgh.com.vn/api/jomalone/create", {
        name: data.name,
        phone: data.phone,
        mail: data.mail,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/success");
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
        <div className={cx("content")}>
          <img
            src={logo}
            className={cx("logo")}
            onLoad={() => setImgLoaded(false)}
          />
          {next ? (
            <form
              onSubmit={handleSubmit(handleSurvey)}
              className={cx("form-content")}
            >
              <div className={cx("form_input")}>
                <div className={cx("form-item")}>
                  <label>Họ và tên: (*)</label>
                  <input
                    {...register("name", {
                      required: true,
                      //pattern: /^[A-Za-z]+$/i,
                    })}
                    placeholder="Full name"
                  />
                  <div className={cx("form-err")}>
                    {errors.name?.type == "required" && (
                      <p>This field is required</p>
                    )}
                    {errors.name?.type == "pattern" && (
                      <p>Please type your name</p>
                    )}
                  </div>
                </div>
                <div className={cx("form-item")}>
                  <label>Số điện thoại: (*)</label>
                  <input
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 12,
                      pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    })}
                    placeholder="Phone number"
                  />
                  <div className={cx("form-err")}>
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
                  </div>
                </div>
                <div className={cx("form-item")}>
                  <label>Email: (*)</label>
                  <input
                    {...register("mail", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    placeholder="Email"
                  />
                  <div className={cx("form-err")}>
                    {errors.mail?.type === "required" && (
                      <p>This field is required</p>
                    )}
                    {errors.mail?.type === "pattern" && (
                      <p>Please type your email</p>
                    )}
                  </div>
                </div>
              </div>
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
                    <span className={cx("svg")}>
                      <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <div className={cx("text3")}>
                      <img src={text3} />
                    </div>
                  </label>
                </div>
              </div>
              <div className={cx("text4")}>
                <img src={text4} />
              </div>
              <div
                className={cx("submit_btn")}
                onClick={handleSubmit(handleSurvey)}
              >
                <img src={btn} />
              </div>
            </form>
          ) : (
            <div className={cx("product-wrapper")}>
              <div className={cx("text1")}>
                <img src={text1} />
              </div>
              <div className={cx("text2")}>
                <img src={text2} />
              </div>
              <div className={cx("product_img")}>
                <img src={product} />
              </div>
              <div className={cx("next_btn")} onClick={() => setNext(true)}>
                <img src={nextImg} />
              </div>
            </div>
          )}
        </div>
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

export default Info;
