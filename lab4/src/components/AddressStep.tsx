import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PersonalInfo from "../data/PersonalInfo";

//interface
interface AddressStepProps {
  nextStep: any;
  prevStep: any;
  handleSubmit: any;
  personalInfo: PersonalInfo;
}

//function
const AddressStep: React.FC<AddressStepProps> = (props: {
  nextStep: any;
  prevStep: any;
  handleSubmit: any;
  personalInfo: PersonalInfo;
}) => {
  //useForm
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [isChecked, setIsChecked] = useState(false);

  //invoice address section
  const invoiceAddressSection = props.personalInfo
    .sameAsDeliveryAddress ? null : (
    <section>
      <div className="mainTextStyle larger">Invoice Address Section</div>

      {/* Invoice City  */}
      <div className="blockStyle">
        <label htmlFor="invoiceCity" className="labelStyle">
          Invoice City
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.invoiceCity}
          id="invoiceCity"
          name="invoiceCity"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "Invoice City is required",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.invoiceCity && (
          <p className="errorStyle">{errors.invoiceCity.message}</p>
        )}
      </div>

      {/* Invoice Street  */}
      <div className="blockStyle">
        <label htmlFor="invoiceStreet" className="labelStyle">
          Invoice Street
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.invoiceStreet}
          id="invoiceStreet"
          name="invoiceStreet"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "Invoice Street is required",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.invoiceStreet && (
          <p className="errorStyle">{errors.invoiceStreet.message}</p>
        )}
      </div>

      {/* Invoice ZIP Code  */}
      <div className="blockStyle">
        <label htmlFor="invoiceZipCode" className="labelStyle">
          Invoice ZIP Code
        </label>
        <input
          type="text"
          defaultValue={props.personalInfo.invoiceZipCode}
          id="invoiceZipCode"
          name="invoiceZipCode"
          className="inputStyle"
          ref={register({
            required: {
              value: true,
              message: "Invoice ZIP Code is required",
            },
            pattern: {
              value: /^\d\d-\d\d\d$/,
              message: "Enter valid Invoice ZIP Code",
            },
            maxLength: {
              value: 35,
              message: "Too long! Range 1-35",
            },
          })}
        />
        {errors.invoiceZipCode && (
          <p className="errorStyle">{errors.invoiceZipCode.message}</p>
        )}
      </div>
    </section>
  );

  //return
  return (
    <div>
      {/* Delivery Address */}
      <section>
        <div className="mainTextStyle larger">Delivery Address Section</div>
        {/* Delivery City  */}
        <div className="blockStyle">
          <label htmlFor="deliveryCity" className="labelStyle">
            Delivery City
          </label>
          <input
            type="text"
            defaultValue={props.personalInfo.deliveryCity}
            id="deliveryCity"
            name="deliveryCity"
            className="inputStyle"
            ref={register({
              required: {
                value: true,
                message: "Delivery City is required",
              },
              maxLength: {
                value: 35,
                message: "Too long! Range 1-35",
              },
            })}
          />
          {errors.deliveryCity && (
            <p className="errorStyle">{errors.deliveryCity.message}</p>
          )}
        </div>
        {/* Delivery Street */}
        <div className="blockStyle">
          <label htmlFor="deliveryStreet" className="labelStyle">
            Delivery Street
          </label>
          <input
            type="text"
            defaultValue={props.personalInfo.deliveryStreet}
            id="deliveryStreet"
            name="deliveryStreet"
            className="inputStyle"
            ref={register({
              required: {
                value: true,
                message: "Delivery Street is required",
              },
              maxLength: {
                value: 35,
                message: "Too long! Range 1-35",
              },
            })}
          />
          {errors.deliveryStreet && (
            <p className="errorStyle">{errors.deliveryStreet.message}</p>
          )}
        </div>

        {/* Delivery ZIP Code */}
        <div className="blockStyle">
          <label htmlFor="deliveryZipCode" className="labelStyle">
            Delivery ZIP Code
          </label>
          <input
            type="text"
            defaultValue={props.personalInfo.deliveryZipCode}
            id="deliveryZipCode"
            name="deliveryZipCode"
            className="inputStyle"
            ref={register({
              required: {
                value: true,
                message: "Delivery ZIP Code is required",
              },
              pattern: {
                value: /^\d\d-\d\d\d$/,
                message: "Enter valid Delivery ZIP Code",
              },
              maxLength: {
                value: 35,
                message: "Too long! Range 1-35",
              },
            })}
          />
          {errors.deliveryZipCode && (
            <p className="errorStyle">{errors.deliveryZipCode.message}</p>
          )}
        </div>
      </section>

      {/* Same as delivery address */}
      <div>
        <input
          type="checkbox"
          defaultChecked={props.personalInfo.sameAsDeliveryAddress}
          onChange={() => {
            setIsChecked(!isChecked);
            props.handleSubmit(getValues());
          }}
          id="sameAsDeliveryAddress"
          name="sameAsDeliveryAddress"
          className="checkBoxStyle"
          ref={register}
        />
        <label className="labelStyle">Same as Delivery Address</label>
      </div>

      {/* Invoice Address  */}
      {invoiceAddressSection}

      {/* buttons */}
      <div>
        <button
          onClick={() => {
            props.prevStep();
            props.handleSubmit(getValues());
          }}
          type="button"
          className="buttonStyle"
        >
          Go back to Name Step
        </button>
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
      </div>

      {/* General Error Comment  */}
      {!isValid ? (
        <div className="errorStyle yellow">Enter all details correctly</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddressStep;
