"use client";

import { Button, Spinner } from "@nextui-org/react";
import FloatingTextArea from "./ui/floating-autoheight-textarea";
import FloatingInput from "./ui/floating-input";
import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm({ name, email }: { name?: string; email?: string }) {
  const [fullName, setFullName] = useState(name);
  const [emailAddress, setEmailAddress] = useState(email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!emailAddress) {
      setEmailAddress("");
    }
    try {
      setLoading(true);
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
          phoneNumber: phoneNumber,
          subject: subject,
          message: message,
          createdAt: new Date().toISOString(),
        }),
      });
      if (!response.ok) {
        toast.error("Something went wrong, please try again later");
      }
      toast.success("Your message was sent successfully");
      setFullName("");
      setEmailAddress("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto flex flex-col gap-6">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-[55ch]">
          Not sure what you&apos;re looking for? Or you have any questions? Our
          team at King&apos;s Watch Zim will be happy to you and even suggest
          the best finishing touches for your style. Feel free to contact us.
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <FloatingInput
            type="text"
            name="name"
            label="Your Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <FloatingInput
              type="email"
              name="email"
              label="Your Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <FloatingInput
              type="tel"
              name="phoneNumber"
              label="Your Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <FloatingInput
            type="text"
            name="subject"
            label="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <FloatingTextArea
            name="message"
            label="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            className="w-max self-start bg-yellow-700 text-white font-medium hover:bg-yellow-800 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-all duration-300 ease-linear"
          >
            {loading ? (
              <>
                {" "}
                <Spinner
                  color="white"
                  size="sm"
                  className="mr-2"
                />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
