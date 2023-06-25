const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b to-black from-gray-800 p-4 text-white"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex items-center justify-center">
          <form
            action="https://getform.io/f/3263e0ca-3f43-4ece-9e65-ade6ba125621"
            method="POST"
            className=" flex w-full flex-col md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            ></textarea>

            <button className="mx-auto my-8 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white duration-300 hover:scale-110">
              Let&#39;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
