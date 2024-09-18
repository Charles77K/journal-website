import { SPECIAL } from './DUMMY_FILES';
import { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Special() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold my-2">Selected Special Issues</h2>
        <button
          className="md:hidden text-slate-600 hover:underline"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoIosArrowUp size={23} /> : <IoIosArrowDown size={23} />}
        </button>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {SPECIAL.map((item, index) => (
          <ul key={index} className="text-xs">
            <li className="flex flex-col items-start">
              <p className="my-1 ">
                Special Issue in <span className="italic">{item.category}</span>
              </p>
              <p className="font-bold	">{item.topic}</p>
              <p className="text-gray-500 my-1">
                Guest Editors:
                <span>{' ' + item.editors.slice(0, -1).join(', ')}</span> and
                <span>{' ' + item.editors.slice(-1)}</span>
              </p>
              <p className="text-red-500">Deadline: {item.deadline}</p>
            </li>
            <hr className="my-3"></hr>
          </ul>
        ))}
      </div>
    </div>
  );
}