import { useState } from 'react';
import { SelectInput } from './Search';
// import { SUBJECTS } from './DUMMY_FILES';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useFetchJournals } from '../../admin/components/Tanstack';
import { Link } from 'react-router-dom';
import Error from '../../utils/Error';

export default function AccessJournals() {
  const [journal, setJournal] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const { data, isError, isLoading } = useFetchJournals();

  function handleChange(event) {
    setJournal(event.target.value);
  }

  let content;

  if (isLoading) {
    content = (
      <div className="animate-pulse">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 h-6 rounded-md w-full my-4 p-4"
          ></div>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center">
        <Error title="Error!" text="Error fetching journals" />
      </div>
    );
  } else if (data && data.length > 0) {
    content = data.map((journal, index) => (
      <ul key={index} className="border-b border-gray-200 p-2">
        <Link
          to={`/journal/${journal.name.replace(/\s+/g, '-').toLowerCase()}/${
            journal.id
          }`}
        >
          <li className="group flex flex-col gap-2 text-slate-700 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://ogbesomto.pythonanywhere.com/${journal.pic}`}
                  className="h-9 w-9"
                  alt={`${journal.name || 'N/A'}`}
                />
                <p className="text-sm font-bold hover:underline">
                  {journal.name || 'N/A'}
                </p>
              </div>
              <div className="rounded-full h-12 w-12 bg-yellow-400 text-slate-800 opacity-0 group-hover:opacity-100 flex transition-all duration-300 ease-in-out justify-center items-center flex-col">
                <p className="text-[7px] font-bold text-center">
                  IMPACT FACTOR
                </p>
                <p className="text-[8px] font-extrabold">
                  {journal.impact || null}
                </p>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    ));
  } else {
    content = <p className="text-center text-gray-500">No journals found.</p>;
  }

  const journalOptions = [
    { value: 'biology', label: 'Biology' },
    { value: 'english', label: 'English' },
    { value: 'maths', label: 'Maths' },
    { value: 'physics', label: 'Physics' },
  ];

  const inputStyle =
    'my-3 lg:w-50 lg:block hidden w-60 border-slate-800 text-[12px] text-slate-800 border-solid border border-slate-400 placeholder:placeholder-custom-gray placeholder:text-[12px] px-4 py-1 rounded-md items-center focus:outline-none';

  return (
    <div className="p-4 bg-white">
      {/* Header and Toggle Button */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold my-1">Open Access Journals</h2>
        <button
          className="md:hidden text-slate-600 hover:underline"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? <IoIosArrowUp size={23} /> : <IoIosArrowDown size={23} />}
        </button>
      </div>

      {/* Dropdown Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <SelectInput
          value={journal}
          onChange={handleChange}
          placeholder={'All Journals'}
          options={journalOptions}
          className={inputStyle}
        />
        {content}
        {/* {SUBJECTS.map((subject, index) => (
          <ul key={index} className="flex flex-col gap-2 mt-3 text-xs">
            <li className="flex gap-3 items-center">
              <img src={subject.img} className="w-10 h-10" />
              <p>{subject.topic}</p>
            </li>
            <hr />
          </ul>
        ))} */}
        <Link
          to={'/journals'}
          className="my-4 font-bold text-slate-800 hover:cursor-pointer hover:underline text-xs"
        >
          Explore All Journals...
        </Link>
      </div>
    </div>
  );
}
