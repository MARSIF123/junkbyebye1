"use client";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { BsArrowDown } from "react-icons/bs";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files).slice(0, 6); // limit to 6
    setFiles(selectedFiles);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !phone) {
      alert("Please fill out Name, Email, and Phone.");
      return;
    }

    // TODO: send data/files to info@junkbyebye.com or GoHighLevel CRM
    console.log({ name, email, phone, message, files });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setFiles([]);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-20 mt-[80px] mb-60">
        <div className="w-[90%] max-w-4xl text-center bg-white p-10 rounded-2xl shadow-md">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-6">
            Ready to Say Goodbye to Junk?
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-12 text-gray-800">
            Call, text, or send us your photos and info for a free quote. We’re
            available 24/7!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="tel:855-BYE-BYE5"
              className="bg-primary-red text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
            >
              Call 855-BYE-BYE5
            </a>
            <a
              href="sms:8552932935"
              className="bg-primary-red text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
            >
              Text for a Quote
            </a>
            <button
              onClick={scrollToForm}
              className="bg-primary-red text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
            >
              Book Online
              <BsArrowDown className="inline-block ml-2 mb-1" />
            </button>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="w-full mt-6 text-left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              />
              <input
                type="tel"
                placeholder="Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-red"
                required
              />
              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-red resize-none"
                rows={4}
              />

              {/* Photo upload */}
              <label className="flex flex-col items-center px-4 py-6 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition text-gray-700">
                <span>Select Photos (up to 6)</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {files.length > 0 && (
                <p className="text-gray-800">
                  {files.length} file{files.length > 1 ? "s" : ""} selected
                </p>
              )}

              <button
                type="submit"
                className="bg-primary-red text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
              >
                Send Photos for a Fast Quote
              </button>
            </form>

            {/* Confirmation */}
            {submitted && (
              <p className="mt-6 text-green-600 font-medium">
                Thanks! We got your photos — we’ll text your quote soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
