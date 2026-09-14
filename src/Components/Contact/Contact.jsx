import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Input handle karna
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Form clear
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-2xl p-6 md:p-8 rounded-lg shadow-lg">

        <h1 className="text-3xl font-bold text-center text-[#0061E0]">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Get in touch with us
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0061E0] hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
}

export default Contact;