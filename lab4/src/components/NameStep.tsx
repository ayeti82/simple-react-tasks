import React from "react";
import { useForm } from "react-hook-form";
import PersonalInfo from "../data/PersonalInfo";

// interface
interface NameStepProps {
  nextStep: any;
  handleSubmit: any;
  personalInfo: PersonalInfo;
}

// function
const NameStep: React.FC<NameStepProps> = (props: {
  nextStep: any;
  handleSubmit: any;
  personalInfo: PersonalInfo;
}) => {
  // useForm
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  //return
  return (
    <form>
      <div className="mainTextStyle larger">Personal Information Section</div>

      {/* First Name  */}
      <div className="blockStyle">
        <label htmlFor="firstNameLabel" className="labelStyle">
          First Name
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.firstName}
          id="firstName"
          name="firstName"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "First Name is required",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.firstName && (
          <p className="errorStyle">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name  */}
      <div className="blockStyle">
        <label htmlFor="lastNameLabel" className="labelStyle">
          Last Name
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.lastName}
          id="lastName"
          name="lastName"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "Last Name is required",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.lastName && (
          <p className="errorStyle">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email Address  */}
      <div className="blockStyle">
        <label htmlFor="emailAddressLabel" className="labelStyle">
          Email Address
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.emailAddress}
          id="emailAddress"
          name="emailAddress"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "Email Address is required",
            },
            pattern: {
              value: /[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}/,
              message: "Enter valid Email Address",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.emailAddress && (
          <p className="errorStyle">{errors.emailAddress.message}</p>
        )}
      </div>

      {/* Buttons  */}
      <button
        disabled={!isValid}
        onClick={() => {
          props.nextStep();
          props.handleSubmit(getValues());
        }}
        type="button"
        className="buttonStyle"
      >
        Next Step
      </button>

      <div>
        {/* General Error Comment  */}
        {!isValid ? (
          <div className="errorStyle yellow">Enter all details correctly</div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default NameStep;
