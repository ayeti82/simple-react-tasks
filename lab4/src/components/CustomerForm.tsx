import React, { useState } from "react";
import NameStep from "./NameStep";
import AddressStep from "./AddressStep";
import SummaryStep from "./SummaryStep";
import "./ComponentStyles.css";
import PersonalInfo from "../data/PersonalInfo";

interface CustomerFormProps {}

const CustomerForm: React.FC<CustomerFormProps> = () => {
  const [formStep, setFormStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    deliveryZipCode: "",
    deliveryStreet: "",
    deliveryCity: "",
    invoiceStreet: "",
    invoiceZipCode: "",
    invoiceCity: "",
    sameAsDeliveryAddress: false,
  });

  //handle next step
  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  //handle prev step
  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  //go back to name step
  const nameStep = () => {
    setFormStep(0);
  };

  // handle on submit
  const handleSubmit = (values: PersonalInfo) => {
    if (formStep === 0) {
      setPersonalInfo({
        ...personalInfo,
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
      });
    } else if (formStep === 1) {
      setPersonalInfo({
        ...personalInfo,
        deliveryCity: values.deliveryCity,
        deliveryStreet: values.deliveryStreet,
        deliveryZipCode: values.deliveryZipCode,
        sameAsDeliveryAddress: values.sameAsDeliveryAddress,
        invoiceCity: values.sameAsDeliveryAddress
          ? values.deliveryCity
          : values.invoiceCity,
        invoiceStreet: values.sameAsDeliveryAddress
          ? values.deliveryStreet
          : values.invoiceStreet,
        invoiceZipCode: values.sameAsDeliveryAddress
          ? values.deliveryZipCode
          : values.invoiceZipCode,
      });
    }
  };

  //return
  return (
    <div className="mainBody">
      <div className="mainTextStyle xx-large">Customer Details Form</div>
      <div className="container">
        {formStep === 0 && (
          <section>
            <NameStep
              nextStep={nextStep}
              handleSubmit={handleSubmit}
              personalInfo={personalInfo}
            />
          </section>
        )}
        {formStep === 1 && (
          <section>
            <AddressStep
              nextStep={nextStep}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              personalInfo={personalInfo}
            />
          </section>
        )}
        {formStep === 2 && (
          <section>
            <SummaryStep
              prevStep={prevStep}
              personalInfo={personalInfo}
              nameStep={nameStep}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default CustomerForm;
