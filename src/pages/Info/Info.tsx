import { Modal } from "@mui/material";
//import axios from "axios";
import classNames from "classnames/bind";
//import { useState } from "react";
//import { useForm } from "react-hook-form";
//import { useNavigate } from "react-router-dom";
// import btn from "../../assets/images/btn.png";
// import logo from "../../assets/images/logo.png";
// import nextImg from "../../assets/images/next.png";
// import product from "../../assets/images/product.png";
// import text1 from "../../assets/images/text1.png";
// import text2 from "../../assets/images/text2.png";
// import text3 from "../../assets/images/text3.png";
// import text4 from "../../assets/images/text4.png";
import Loading from "../../component/loading/Loading";
import styles from "./Info.module.scss";

const cx = classNames.bind(styles);

// interface formValues {
//   name: string;
//   phone: string;
//   mail: string;
//   policy: boolean;
// }

const Info = () => {
  //const [next, setNext] = useState<boolean>(false);
  //const [loading, setLoading] = useState<boolean>(false);
  //const [imgLoaded, setImgLoaded] = useState<boolean>(true);
  //const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<formValues>({
  //   defaultValues: {
  //     name: "",
  //     phone: "",
  //     mail: "",
  //     policy: false,
  //   },
  // });

  // const handleSurvey = async (data: formValues) => {
  //   setLoading(true);
  //   await axios
  //     .post("https://api.landingpage.tcgh.com.vn/api/jomalone/create", {
  //       name: data.name,
  //       phone: data.phone,
  //       mail: data.mail,
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         navigate("/success");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setLoading(false);
  // };

  return <div className={cx("container")}></div>;
};

export default Info;
