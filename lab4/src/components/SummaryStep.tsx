import React, { FC } from "react";
import PersonalInfo from "../data/PersonalInfo";

//interface
interface SummaryStepProps {
  prevStep: any;
  nameStep: any;
  personalInfo: PersonalInfo;
}

//function
const SummaryStep: FC<SummaryStepProps> = (props: {
  prevStep: any;
  nameStep: any;
  personalInfo: PersonalInfo;
}) => {
  //return
  return (
    <div>
      <div className="mainTextStyle larger">Summary</div>
      <div>
        {/* Details  */}
        <div className="blockStyle">
          <span className="summaryStyle">First Name :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.firstName}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Last Name :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.lastName}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Email Address :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.emailAddress}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Delivery City :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.deliveryCity}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Delivery Street :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.deliveryStreet}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Delivery ZIP Code :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.deliveryZipCode}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Invoice City :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.invoiceCity}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Invoice Street :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.invoiceStreet}
          </span>
        </div>
        <div className="blockStyle">
          <span className="summaryStyle">Invoice ZIP Code :</span>
          <span className="summaryValueStyle">
            {props.personalInfo.invoiceZipCode}
          </span>
        </div>
      </div>
      {/* Buttons  */}
      <button onClick={props.nameStep} type="button" className="buttonStyle">
        Go back to Name Section
      </button>
      <button onClick={props.prevStep} type="button" className="buttonStyle">
        Go back to Address Section
      </button>
      <button
        type="submit"
        className="buttonStyle"
        onClick={(event) => {
          alert("Form was submitted");
          event.preventDefault();
        }}
      >
        Submit Form
      </button>
    </div>
  );
};

export default SummaryStep;
