import emailjs from "emailjs-com";

export const sendInquiry = (e) => {
  e.preventDefault();
  console.log("e.target: ", e.target);
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then(
      (result) => console.log(result.text),
      (error) => console.log(error.text)
    );
  e.target.reset();
  console.log("sendInquiry function ran!");
};
