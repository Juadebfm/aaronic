import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Button from "./Button";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    email: "",
    phoneNumber: "",
    services: "",
    moreInfo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.businessName)
      errors.businessName = "Business Name is required";
    if (!formData.industry) errors.industry = "Industry is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    if (!formData.services) errors.services = "Please select a service";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSubmitting(true);
      submitForm();
      setFormErrors({});
    }
  };

  const submitForm = () => {
    fetch("https://formspree.io/f/moqggaar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully!");
          setFormSubmitted(true);
        } else {
          console.error("Form submission failed!");
        }
      })
      .catch((error) => {
        console.error("Error occurred while submitting form:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-[15px] lg:px-0">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-md shadow-lg z-10 w-full lg:w-[30%] max-h-[70vh] overflow-y-auto py-14 relative px-[30px] lg:px-14">
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-myYellow rounded-full text-black absolute right-5 lg:right-5 top-0 hover:shadow-lg duration-150 ease-linear shadow-black"
        >
          <RiCloseLargeLine className="text-base lg:text-2xl text-white" />
        </button>

        {formSubmitted ? (
          <div className="text-center text-lg font-semibold text-green-600">
            Thanks! We will respond to you shortly.
          </div>
        ) : (
          <>
            <h2 className="text-3xl lg:text-[40px] font-bold text-start text-myYellow my-8">
              Get Started
            </h2>
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="businessName" className="text-[15px] mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                    formErrors.businessName ? "border-red-500" : "border-black"
                  }`}
                />
                {formErrors.businessName && (
                  <span className="text-red-500">
                    {formErrors.businessName}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="industry" className="text-[15px] mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                    formErrors.industry ? "border-red-500" : "border-black"
                  }`}
                >
                  <option value="">Select Industry</option>
                  <option value="Transport">Transportation</option>
                  <option value="Food">Food and Beverage</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Technology">Technology</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Construction">Construction</option>
                  <option value="Hospitality and Tourism">
                    Hospitality and Tourism
                  </option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.industry && (
                  <span className="text-red-500">{formErrors.industry}</span>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="email" className="text-[15px] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                    formErrors.email ? "border-red-500" : "border-black"
                  }`}
                />
                {formErrors.email && (
                  <span className="text-red-500">{formErrors.email}</span>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="phoneNumber" className="text-[15px] mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                    formErrors.phoneNumber ? "border-red-500" : "border-black"
                  }`}
                />
                {formErrors.phoneNumber && (
                  <span className="text-red-500">{formErrors.phoneNumber}</span>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="services" className="text-[15px] mb-2">
                  Services You Want
                </label>
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                    formErrors.services ? "border-red-500" : "border-black"
                  }`}
                >
                  <option value="">Select Services</option>
                  <option value="Oil Trading">Oil Trading</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Marine Logistics">Marine Logistics</option>
                  <option value="Cargo Handling">Cargo Handling</option>
                </select>
                {formErrors.services && (
                  <span className="text-red-500">{formErrors.services}</span>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="moreInfo" className="text-[15px] mb-2">
                  Tell us more about your company
                </label>
                <textarea
                  name="moreInfo"
                  value={formData.moreInfo}
                  onChange={handleChange}
                  placeholder="Leave additional messages"
                  className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full mb-8"
                />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  btnText={isSubmitting ? "Submitting..." : "Submit"}
                  className={
                    "bg-myYellow text-black w-full lg:w-[80%] py-4 mx-auto"
                  }
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
