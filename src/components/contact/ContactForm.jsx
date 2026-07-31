import { useState } from "react";
import Field from "../ui/Field";
import Icon from "../ui/Icon";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up the real submission endpoint before going live.
    setSent(true);
  };

  return (
    <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Send us a message
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Fill out the form and our team will get back to you shortly.
        </p>
      </div>

      {sent ? (
        <div
          role="status"
          className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-14 text-center"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
            <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
          </span>
          <h3 className="text-xl font-semibold text-emerald-800">
            Message Sent Successfully!
          </h3>
          <p className="max-w-sm text-sm text-emerald-700">
            Thank you for reaching out. Our team will be in touch soon.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(initialState);
              setSent(false);
            }}
            className="mt-2 text-sm font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-900"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Full Name"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <Field
              id="email"
              label="Email Address"
              type="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="phone"
              label="Phone Number"
              type="tel"
              placeholder="Phone Number"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
            <Field
              id="subject"
              label="Subject"
              placeholder="How can we help?"
              value={values.subject}
              onChange={handleChange}
            />
          </div>

          <Field
            as="textarea"
            id="message"
            label="Message"
            rows={5}
            placeholder="Write your message..."
            value={values.message}
            onChange={handleChange}
            required
            className="[&_textarea]:resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Send Message
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
