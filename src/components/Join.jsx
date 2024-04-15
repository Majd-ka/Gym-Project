import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fv6n4hn",
        "template_3u4034m",
        form.current,
        "ynY6vl-L0lT0_mVeM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex px-8 xl:gap-40 items-center flex-col xl:flex-row gap-5">
      <div className="text-5xl uppercase font-bold text-white flex-1 leading-relaxed tracking-wide text-center">
        <div>
          <span className="stroke-text border-t-orange-500 border-solid border-t-2 rounded-lg">
            ready to
          </span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="flex-1">
        <form
          ref={form}
          className="flex gap-8 bg-gray-400 py-4 px-8 w-fit rounded-lg"
          onSubmit={sendEmail}
        >
          <input
            className="rounded-lg outline-none p-2"
            type="email"
            name="user-email"
            placeholder="Enter Your Email Address"
          />
          <button className="text-white xl:py-2 xl:px-8 font-bold bg-orange-500 rounded-md py-1 px-6 text-sm xl:text-base">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
