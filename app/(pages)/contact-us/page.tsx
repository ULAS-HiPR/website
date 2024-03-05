export default function ContactUs() {
  return (
    <div className="px-8 flex flex-col w-full items-center justify-center">
      <h1 className="text-4xl font-bold pb-8">Get in Touch!</h1>
      <form
        action="https://send.pageclip.co/LKzmlrF6e3DnK96laPtVYHxffKTLJAbP/get-in-touch"
        method="post"
        className="w-1/3"
      >
        <div className="w-full mb-2">
          <label className="block text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="caret-black text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            className="caret-black text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
            className="caret-black text-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Message"
          />
        </div>
        <button
          className="w-full rounded-lg p-3 text-lg font-bold transition-colors bg-black text-white hover:bg-white hover:text-black"
          type="submit"
        >
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}
