import PageTop from "@components/PageTop";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [disabled, setDisabled] = useState(false);

  const submitHandler: SubmitHandler<FormData> = async (data) => {
    try {
      setDisabled(true);
      // const response = await fetch('/api/email/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // });

      // if (response.ok) {
      //   alert('Email sent!');
      //   reset();
      // } else {

      //   alert('Error sending email. Please try again.');
      // }
      alert(
        "We can't host the flask api wich is responsible for sending emails. Bcz of vercel functions limits "
      );
    } catch (e) {
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      <PageTop pageTitle="Contact me" />

      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-4/5">
          <form onSubmit={handleSubmit(submitHandler)} noValidate>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="w-full rounded-md border dark:border-[#e0e0e0] border-[#07074D] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#1DBF73] focus:shadow-md"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="w-full rounded-md border dark:border-[#e0e0e0] border-[#07074D] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#1DBF73] focus:shadow-md"
                placeholder="example@domain.com"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Please enter a subject",
                  },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="w-full rounded-md border dark:border-[#e0e0e0] border-[#07074D] bg-transparent py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#1DBF73] focus:shadow-md"
                placeholder="Enter your subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Message
              </label>

              <textarea
                {...register("message")}
                id="message"
                placeholder="Type your message"
                {...register("message", {
                  required: true,
                })}
                className="w-full resize-none rounded-md border dark:border-[#e0e0e0] border-[#07074D] bg-transparent pt-3 pb-24 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#1DBF73] focus:shadow-md"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={disabled}
                className="hover:shadow-form w-full disabled:bg-black disabled:dark:bg-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white disabled:dark:text-black rounded-md bg-[#1DBF73] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
