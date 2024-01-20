import emailjs from 'emailjs-com';

export const sendEmail = async formContent => {
  const response = await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      name: formContent.name,
      email: formContent.email,
      message: formContent.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );

  if (response.status !== 200) {
    throw new Error('Error sending email');
  }
};
