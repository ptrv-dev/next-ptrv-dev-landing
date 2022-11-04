import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import emailjs from '@emailjs/browser';

import Section from '../../Section';
import SectionSubtitle from '../../Section/SectionSubtitle';
import SectionTitle from '../../Section/SectionTitle';

interface GetInTouchForm {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [time, setTime] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const date = new Date();
    console.log();
    setTime(
      `${date.getHours()}:${
        date.getMinutes() < 10 ? 0 : ''
      }${date.getMinutes()} | ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} (UTC +03:00)`
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<GetInTouchForm> = async (data) => {
    try {
      setLoading(true);
      await emailjs.send(
        'service_e7zlxpv',
        'template_tvnxmlc',
        // @ts-ignore-next-line
        data,
        'uY3JdMvbXw62iflNU'
      );
      alert('Success!');
    } catch (error) {
      console.log(error);
      alert('Something going wrong :c');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact-me">
      <SectionTitle className="mb-10">Contact me</SectionTitle>
      <div className="flex flex-col gap-5 md:flex-row-reverse md:gap-7 lg:gap-16">
        <div className="flex flex-col gap-5 md:text-lg flex-1">
          <h4 className="uppercase text-xl md:text-2xl">My contacts</h4>
          <div className="flex flex-col gap-3 items-start">
            <a href="mailto:3gomane@gmail.com" className="md:w-full md:flex">
              <div className="flex gap-2 items-center md:flex-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7348 5.21719C13.8414 5.13242 14 5.21172 14 5.3457V10.9375C14 11.6621 13.4121 12.25 12.6875 12.25H1.3125C0.587891 12.25 0 11.6621 0 10.9375V5.34844C0 5.21172 0.155859 5.13516 0.265234 5.21992C0.877734 5.6957 1.68984 6.3 4.47891 8.32617C5.05586 8.74727 6.0293 9.6332 7 9.62773C7.97617 9.63594 8.96875 8.73086 9.52383 8.32617C12.3129 6.3 13.1223 5.69297 13.7348 5.21719ZM7 8.75C7.63438 8.76094 8.54766 7.95156 9.00703 7.61797C12.6355 4.98477 12.9117 4.75508 13.7484 4.09883C13.907 3.97578 14 3.78437 14 3.58203V3.0625C14 2.33789 13.4121 1.75 12.6875 1.75H1.3125C0.587891 1.75 0 2.33789 0 3.0625V3.58203C0 3.78437 0.0929687 3.97305 0.251563 4.09883C1.08828 4.75234 1.36445 4.98477 4.99297 7.61797C5.45234 7.95156 6.36562 8.76094 7 8.75Z"
                    fill="#F5F5F4"
                  />
                </svg>
                E-Mail
              </div>
              <p className="md:flex-1">3gomane@gmail.com</p>
            </a>
            <a
              href="https://t.me/u000000000000000000000"
              className="md:w-full md:flex"
              target={'_blank'}
              rel="noreferrer"
            >
              <div className="flex gap-2 items-center md:flex-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_533)">
                    <path
                      d="M6.99992 0.21875C3.13512 0.21875 0.00378418 3.25391 0.00378418 7C0.00378418 10.7461 3.13512 13.7812 6.99992 13.7812C10.8647 13.7812 13.996 10.7461 13.996 7C13.996 3.25391 10.8647 0.21875 6.99992 0.21875ZM10.4359 4.86445L9.28776 10.109C9.20313 10.4809 8.97463 10.5711 8.65585 10.3961L6.90682 9.14648L6.06334 9.93398C5.97024 10.0242 5.89125 10.1008 5.71071 10.1008L5.83483 8.37539L9.07619 5.53711C9.21724 5.4168 9.04515 5.34844 8.85897 5.46875L4.85312 7.91328L3.12665 7.39102C2.75146 7.27617 2.743 7.02734 3.20564 6.85234L9.9507 4.33125C10.2638 4.22187 10.5375 4.40508 10.4359 4.86445Z"
                      fill="#F5F5F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_533">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Telegram
              </div>
              <p className="md:flex-1">@u000000000000000000000</p>
            </a>
            <a
              href="https://github.com/ptrv-dev"
              className="md:w-full md:flex"
              target={'_blank'}
              rel="noreferrer"
            >
              <div className="flex gap-2 items-center md:flex-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_539)">
                    <path
                      d="M4.53633 10.8664C4.53633 10.9211 4.47344 10.9648 4.39414 10.9648C4.30391 10.973 4.24102 10.9293 4.24102 10.8664C4.24102 10.8117 4.30391 10.768 4.3832 10.768C4.46523 10.7598 4.53633 10.8035 4.53633 10.8664ZM3.68594 10.7434C3.6668 10.798 3.72148 10.8609 3.80352 10.8773C3.87461 10.9047 3.95664 10.8773 3.97305 10.8227C3.98945 10.768 3.9375 10.7051 3.85547 10.6805C3.78437 10.6613 3.70508 10.6887 3.68594 10.7434ZM4.89453 10.6969C4.81523 10.716 4.76055 10.768 4.76875 10.8309C4.77695 10.8855 4.84805 10.9211 4.93008 10.902C5.00938 10.8828 5.06406 10.8309 5.05586 10.7762C5.04766 10.7242 4.97383 10.6887 4.89453 10.6969ZM6.69375 0.21875C2.90117 0.21875 0 3.09805 0 6.89062C0 9.92305 1.90859 12.518 4.63477 13.4313C4.98477 13.4941 5.10781 13.2781 5.10781 13.1004C5.10781 12.9309 5.09961 11.9957 5.09961 11.4215C5.09961 11.4215 3.18555 11.8316 2.78359 10.6066C2.78359 10.6066 2.47187 9.81094 2.02344 9.60586C2.02344 9.60586 1.39727 9.17656 2.06719 9.18477C2.06719 9.18477 2.74805 9.23945 3.12266 9.89023C3.72148 10.9457 4.725 10.6422 5.11602 10.4617C5.17891 10.0242 5.35664 9.7207 5.55352 9.54023C4.025 9.3707 2.48281 9.14922 2.48281 6.51875C2.48281 5.7668 2.69062 5.38945 3.12812 4.9082C3.05703 4.73047 2.82461 3.99766 3.19922 3.05156C3.7707 2.87383 5.08594 3.78984 5.08594 3.78984C5.63281 3.63672 6.2207 3.55742 6.80312 3.55742C7.38555 3.55742 7.97344 3.63672 8.52031 3.78984C8.52031 3.78984 9.83555 2.87109 10.407 3.05156C10.7816 4.00039 10.5492 4.73047 10.4781 4.9082C10.9156 5.39219 11.1836 5.76953 11.1836 6.51875C11.1836 9.15742 9.57305 9.36797 8.04453 9.54023C8.29609 9.75625 8.50938 10.1664 8.50938 10.809C8.50938 11.7305 8.50117 12.8707 8.50117 13.0949C8.50117 13.2727 8.62695 13.4887 8.97422 13.4258C11.7086 12.518 13.5625 9.92305 13.5625 6.89062C13.5625 3.09805 10.4863 0.21875 6.69375 0.21875ZM2.65781 9.64961C2.62227 9.67695 2.63047 9.73984 2.67695 9.7918C2.7207 9.83555 2.78359 9.85469 2.81914 9.81914C2.85469 9.7918 2.84648 9.72891 2.8 9.67695C2.75625 9.6332 2.69336 9.61406 2.65781 9.64961ZM2.3625 9.42812C2.34336 9.46367 2.3707 9.50742 2.42539 9.53477C2.46914 9.56211 2.52383 9.55391 2.54297 9.51562C2.56211 9.48008 2.53477 9.43633 2.48008 9.40898C2.42539 9.39258 2.38164 9.40078 2.3625 9.42812ZM3.24844 10.4016C3.20469 10.4371 3.22109 10.5191 3.28398 10.5711C3.34687 10.634 3.42617 10.6422 3.46172 10.5984C3.49727 10.5629 3.48086 10.4809 3.42617 10.4289C3.36602 10.366 3.28398 10.3578 3.24844 10.4016ZM2.93672 9.99961C2.89297 10.027 2.89297 10.098 2.93672 10.1609C2.98047 10.2238 3.0543 10.2512 3.08984 10.2238C3.13359 10.1883 3.13359 10.1172 3.08984 10.0543C3.05156 9.99141 2.98047 9.96406 2.93672 9.99961Z"
                      fill="#F5F5F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_539">
                      <rect width="13.5625" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                GitHub
              </div>
              <p className="md:flex-1">ptrv-dev</p>
            </a>
          </div>
          <h4 className="uppercase text-xl md:text-2xl">
            My current local time
          </h4>
          <div className="flex gap-2 items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                stroke="#F5F5F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {time}
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-stone-700 p-5 items-stretch flex-1">
          <SectionSubtitle>Get in Touch</SectionSubtitle>
          <form
            // @ts-ignore-next-line
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 md:px-5"
          >
            <div className="flex flex-col">
              <p className="mb-1">Your Name:</p>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${
                  errors.name
                    ? 'border-red-700 text-red-700'
                    : 'border-stone-50'
                } border`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M9.18753 3.5C9.18753 4.08016 8.95706 4.63656 8.54682 5.0468C8.13659 5.45703 7.58019 5.6875 7.00003 5.6875C6.41987 5.6875 5.86347 5.45703 5.45323 5.0468C5.043 4.63656 4.81253 4.08016 4.81253 3.5C4.81253 2.91984 5.043 2.36344 5.45323 1.9532C5.86347 1.54297 6.41987 1.3125 7.00003 1.3125C7.58019 1.3125 8.13659 1.54297 8.54682 1.9532C8.95706 2.36344 9.18753 2.91984 9.18753 3.5V3.5ZM2.62561 11.7355C2.64436 10.5877 3.11347 9.49326 3.9318 8.68819C4.75012 7.88313 5.85208 7.43194 7.00003 7.43194C8.14798 7.43194 9.24993 7.88313 10.0683 8.68819C10.8866 9.49326 11.3557 10.5877 11.3744 11.7355C10.0021 12.3648 8.50978 12.6896 7.00003 12.6875C5.43903 12.6875 3.95736 12.3468 2.62561 11.7355Z"
                    stroke="#D6D3D1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${errors.name ? 'stroke-red-700' : ''}`}
                  />
                </svg>
                <input
                  type="text"
                  {...register('name', {
                    required: true,
                    minLength: 3,
                    maxLength: 100,
                  })}
                  className="bg-transparent flex-1 outline-none"
                  placeholder="Enter your name..."
                />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="mb-1">Your Email:</p>
              <div
                className={`flex items-center gap-2 px-3 py-2 ${
                  errors.email
                    ? 'border-red-700 text-red-700'
                    : 'border-stone-50'
                } border`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6875 3.9375V10.0625C12.6875 10.4106 12.5492 10.7444 12.3031 10.9906C12.0569 11.2367 11.7231 11.375 11.375 11.375H2.625C2.2769 11.375 1.94306 11.2367 1.69692 10.9906C1.45078 10.7444 1.3125 10.4106 1.3125 10.0625V3.9375M12.6875 3.9375C12.6875 3.5894 12.5492 3.25556 12.3031 3.00942C12.0569 2.76328 11.7231 2.625 11.375 2.625H2.625C2.2769 2.625 1.94306 2.76328 1.69692 3.00942C1.45078 3.25556 1.3125 3.5894 1.3125 3.9375M12.6875 3.9375V4.07925C12.6875 4.30334 12.6302 4.52369 12.5209 4.71934C12.4117 4.91498 12.2541 5.0794 12.0633 5.19692L7.68833 7.889C7.48137 8.01648 7.24307 8.08398 7 8.08398C6.75693 8.08398 6.51863 8.01648 6.31167 7.889L1.93667 5.1975C1.74587 5.07998 1.58834 4.91557 1.47908 4.71992C1.36982 4.52428 1.31248 4.30392 1.3125 4.07983V3.9375"
                    stroke="#D6D3D1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${errors.email ? 'stroke-red-700' : ''}`}
                  />
                </svg>

                <input
                  type="text"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="bg-transparent flex-1 outline-none"
                  placeholder="Enter your E-Mail..."
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mb-1">Your Message:</p>
              <div
                className={`flex items-center gap-2 px-3 py-2 border ${
                  errors.message
                    ? 'border-red-700 text-red-700'
                    : 'border-stone-50'
                }`}
              >
                <textarea
                  rows={5}
                  {...register('message', {
                    required: true,
                    minLength: 5,
                    maxLength: 300,
                  })}
                  placeholder="Enter your message here..."
                  className="bg-transparent flex-1 outline-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0 || loading}
              className="bg-teal-700 py-2 text-lg uppercase disabled:opacity-50 disabled:cursor-no-drop flex items-center justify-center gap-1"
            >
              Send
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#fafaf9"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    ></animateTransform>
                  </circle>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
