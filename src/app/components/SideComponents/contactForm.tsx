export default function ContactForm() {
  return (
    <div className="text-lg sm:text-xl text-white w-full max-w-4xl mx-auto p-4">
      <p>
        Do you have a project you would like to work on? Or perhaps a few
        questions?
      </p>
      <p className="mt-4">Here's my contacts, feel free to reach out!</p>

      <form className="w-full flex flex-col gap-4 mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" className="w-full border-b-4 border-white bg-transparent p-3 focus:outline-none" placeholder="Name"/>
          <input type="email" className="w-full border-b-4 border-white bg-transparent p-3 focus:outline-none" placeholder="Email"/>
        </div>

        <textarea rows={4} className="border-b-4 border-white bg-transparent p-3 focus:outline-none" placeholder="Your Message..."/>

        <button type="submit" className="bg-white text-black font-semibold mt-4 py-2 transition-all hover:bg-gray-300">
          Submit
        </button>
      </form>
    </div>
  );
}
