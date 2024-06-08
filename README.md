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
              <span className="text-red-500">{formErrors.businessName}</span>
            )}
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="industry" className="text-[15px] mb-2">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              placeholder="Enter Industry"
              className={`placeholder:text-gray-500 placeholder:capitalize font-extralight border px-8 py-4 rounded-lg w-full ${
                formErrors.industry ? "border-red-500" : "border-black"
              }`}
            />
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
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
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
              btnText={"Submit"}
              className={
                "bg-myYellow text-black w-full lg:w-[80%] py-4 mx-auto"
              }
            />
          </div>
        </form>