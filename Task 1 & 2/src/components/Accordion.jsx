import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'Content for the first accordion item. First Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus corporis tempore blanditiis quas, vero doloribus neque fugit, porro nemo voluptatum? Doloribus blanditiis velit quod ut quos non ea alias hic, dolorum ad? Explicabo id saepe magnam? At illum, sequi repudiandae fugiat porro incidunt dolores. Repellat libero placeat ipsam totam.',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for the second accordion item. Second First Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus corporis tempore blanditiis quas, vero doloribus neque fugit, porro nemo voluptatum? Doloribus blanditiis velit quod ut quos non ea alias hic, dolorum ad? Explicabo id saepe magnam? At illum, sequi repudiandae fugiat porro incidunt dolores. Repellat libero placeat ipsam totam.',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for the third accordion item. Third First Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatibus corporis tempore blanditiis quas, vero doloribus neque fugit, porro nemo voluptatum? Doloribus blanditiis velit quod ut quos non ea alias hic, dolorum ad? Explicabo id saepe magnam? At illum, sequi repudiandae fugiat porro incidunt dolores. Repellat libero placeat ipsam totam.',
    },
  ];

  return (
    <>
    <div className="app ">
       <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg my-40 overflow-hidden" id='accordion'>
       <h1 className='text-3xl text-center text-yellow-600 font-serif'>Accordion Component</h1>
      {accordionItems.map((item, index) => (
        <div key={index} className="border-t border-gray-200">
          <button
            className="w-full text-left px-6 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h3 className="text-lg">{item.title}</h3>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              index === activeIndex ? 'max-h-96 p-6 bg-gray-50' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700 text-justify font-serif">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Accordion;
