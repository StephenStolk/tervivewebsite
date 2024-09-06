import React from 'react';

const Intro = () => {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row">
  {/* Left side with text and buttons */}
  <div className="w-full md:w-1/2 flex flex-col mx-auto my-auto justify-center p-6 px-28 text-start">
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-green-900">
      TERVIVE
    </h1>
    <h2 className="scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 mt-2 text-green-900">
        Your One stop solution!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, iste?
    </h2>

    <button className="bg-[#8a9d68]  text-white font-semibold py-3 rounded-lg hover:bg-[#8a9d68] transition mt-4 w-1/4">
      Join
    </button>
  </div>

  {/* Right side with image */}
  <div className="w-full md:w-1/2 flex items-center justify-center p-6">
    <img
      src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzMwN3wwfDF8c2VhcmNofDR8fGFncmljdWx0dXJlfGVufDB8fHx8MTY2MzgyNjc2NA&ixlib=rb-1.2.1&q=80&w=400"
      alt="agriculture"
      className="w-full h-auto rounded-lg shadow-lg animate-[wiggle_1s_ease-in-out_infinite]"
    />
  </div>
</section>

    </>
  );
}

export default Intro;
