"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const router = useRouter();

  return (
    <>
      <Helmet>
        <script src="https://s.pageclip.co/v1/pageclip.js" />
      </Helmet>
      <div className="px-8 flex flex-col w-full items-center justify-center">
        <h1 className="w-full text-center text-4xl font-bold pb-8">
          Get in Touch!
        </h1>
        <div
          // action="https://send.pageclip.co/LKzmlrF6e3DnK96laPtVYHxffKTLJAbP/get-in-touch"
          // method="post"
          className="md:w-1/2 xl:w-1/3 w-full"
        >
          <div className="w-full mb-2">
            <label className="block text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="caret-black font-medium text-black shadow appearance-none border rounded w-full py-3 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setFormData((previous) => ({
                  ...previous,
                  name: e.target.value,
                }))
              }
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="caret-black font-medium text-black shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setFormData((previous) => ({
                  ...previous,
                  email: e.target.value,
                }))
              }
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="username">
              Message
            </label>
            <textarea
              className="caret-black font-medium text-black shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setFormData((previous) => ({
                  ...previous,
                  message: e.target.value,
                }))
              }
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <button
            className="w-full rounded-lg p-3 text-lg font-bold transition-colors bg-white text-black hover:bg-black hover:text-white"
            // type="submit"
            onClick={() => {
              // @ts-ignore eslint-disable-next-line
              Pageclip.send(
                "LKzmlrF6e3DnK96laPtVYHxffKTLJAbP",
                "get-in-touch",
                formData,
                // @ts-ignore eslint-disable-next-line
                function (error, response) {
                  console.log(error);
                  console.log(response);
                  if (response) {
                    router.push("/contact-us/success");
                  }
                }
              );
            }}
          >
            <span>Send</span>
          </button>
        </div>
      </div>
    </>
  );
}
