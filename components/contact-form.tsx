"use client";

import { Button } from "@nextui-org/react";
import FloatingTextArea from "./ui/floating-autoheight-textarea";
import FloatingInput from "./ui/floating-input";

function ContactForm() {
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
        <form className="flex flex-col gap-4">
          <FloatingInput
            type="text"
            name="name"
            label="Your Full Name"
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <FloatingInput
              type="email"
              name="email"
              label="Your Email Address"
            />
            <FloatingInput
              type="tel"
              name="phoneNumber"
              label="Your Phone Number"
              required
            />
          </div>
          <FloatingInput
            type="text"
            name="subject"
            label="Subject"
            required
          />
          <FloatingTextArea
            name="message"
            label="Message"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="w-max self-start bg-yellow-700 text-white font-medium hover:bg-yellow-800 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-all duration-300 ease-linear"
          >
            Get In Touch
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
