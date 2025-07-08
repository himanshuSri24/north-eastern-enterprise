"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  emailPhone: string;
  organization: string;
  subject: string;
  query: string;
}

interface FormErrors {
  name?: string;
  emailPhone?: string;
  organization?: string;
  subject?: string;
  query?: string;
}

const validateEmail = (email: string) => {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string) => {
  // Simple phone regex (10-15 digits, allows +, -, spaces)
  return /^[+]?\d{10,15}$/.test(phone.replace(/[-\s]/g, ""));
};

const Form = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    emailPhone: "",
    organization: "",
    subject: "General Inquiry",
    query: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.emailPhone) {
      newErrors.emailPhone = "Email or phone is required.";
    } else if (
      !validateEmail(form.emailPhone) &&
      !validatePhone(form.emailPhone)
    ) {
      newErrors.emailPhone = "Enter a valid email or phone number.";
    }
    if (!form.organization)
      newErrors.organization = "Organization is required.";
    if (!form.subject) newErrors.subject = "Subject is required.";
    if (!form.query) newErrors.query = "Query is required.";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        // Reset form after successful submission
        setForm({
          name: "",
          emailPhone: "",
          organization: "",
          subject: "General Inquiry",
          query: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="w-[250px] flex flex-col justify-start items-start gap-3.5">
          {/* Name */}
          <div>
            <div className="text-body-1 font-medium">Name</div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border-1 w-[234px] h-[42px]"
            />
          </div>
          {/* Email / Phone */}
          <div>
            <div className="text-body-1 font-medium">
              Email / Phone
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <input
              type="text"
              name="emailPhone"
              value={form.emailPhone}
              onChange={handleChange}
              className="border-1 w-[234px] h-[42px]"
            />
            {errors.emailPhone && (
              <div className="text-red-500 text-xs mt-1">
                {errors.emailPhone}
              </div>
            )}
          </div>
          {/* Organization */}
          <div>
            <div className="text-body-1 font-medium">
              Organization
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              className="border-1 w-[234px] h-[42px]"
            />
            {errors.organization && (
              <div className="text-red-500 text-xs mt-1">
                {errors.organization}
              </div>
            )}
          </div>
          {/* Subject */}
          <div>
            <div className="text-body-1 font-medium">
              Subject
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="border-1 w-[234px] h-[42px]"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Request a Quote">Request a Quote</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <div className="text-red-500 text-xs mt-1">{errors.subject}</div>
            )}
          </div>
        </div>
        <div className="w-[400px] flex flex-col justify-start h-full items-start gap-5.5">
          {/* Enter requested query */}
          <div className="h-full w-full">
            <div className="text-body-1 font-medium">
              Enter requested query
              <span className="text-body-1 font-medium text-red-500"> *</span>
            </div>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              className="border-1 w-full h-[275px]"
            />
            {errors.query && (
              <div className="text-red-500 text-xs mt-1">{errors.query}</div>
            )}
          </div>
        </div>
      </div>
      {/* Status Messages */}
      {submitStatus !== "idle" && (
        <div className="flex justify-center mt-4">
          <div
            className={`text-sm px-4 py-2 rounded-md ${
              submitStatus === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage}
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[670px] mt-9 text-white px-4 py-2 rounded-md transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-secondary hover:cursor-pointer hover:bg-secondary/90"
          }`}
        >
          <span className="text-h5 font-medium">
            {isSubmitting ? "Sending..." : "Submit"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
