import React, { useRef } from "react";
import "../Styles/otp.css";

const OTPVerification = () => {
  const inputRefs = useRef([]);

  const digitValidate = (event, index) => {
    let value = event.target.value.replace(/[^0-9]/g, "");
    event.target.value = value;
  };

  const tabChange = (index) => {
    if (inputRefs.current[index] && inputRefs.current[index].value !== "") {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    } else if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4 text-center">
          <div className="row">
            <div className="col-sm-12 mt-5 bgWhite">
              <div className="title">Verify OTP</div>
              <form className="mt-5">
                {[0, 1, 2, 3].map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="otp"
                    type="text"
                    onInput={(e) => digitValidate(e, index)}
                    onKeyUp={() => tabChange(index)}
                    maxLength={1}
                  />
                ))}
              </form>
              <hr className="mt-4" />
              <button className="btn btn-primary btn-block mt-4 mb-4 customBtn">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
