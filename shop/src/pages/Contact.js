import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative" style={{marginLeft:'9.2rem',marginRight:'0.2rem'}}>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-center">
              <div class="sm:flex sm:items-center sm:justify-between">
                <div class="text-center sm:text-left">
                  <h1 class="sm:text-4xl text-3xl font-medium title-font text-blue-900 mb-4">
                    Contact Us
                  </h1>
                </div>
               </div>
            </div>
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.8)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d574160.6535481523!2d12.643593246705256!3d55.79644931395657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1692330211742!5m2!1ssv!2sse"
          />
          <div className="bg-blue-900 relative flex flex-wrap py-5 rounded shadow-md con">
            <div className="lg:w-2/2 md:w-1/2 sm:w-1/2 px-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Address
              </h2>
              <p className="mt-1 text-white">
                Country
              </p>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                E-mail
              </h2>
              <a className="text-white leading-relaxed sm-text-4x1">
                LoremIpsum@dolor.sit
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Phone
              </h2>
              <p className="leading-relaxed text-white">********</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            
          </h2>
          <p className="leading-relaxed mb-5 sm:mx-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-ehite-800 rounded border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-900">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white-800 rounded border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white-800 rounded border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="bold-text">      
      <hr class="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>
          <h2 className="text-center pb-4 text-gray-800 italic font-semibold font-mono"></h2>               
      </div>
    </section>
  );
}
