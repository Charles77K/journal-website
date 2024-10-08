// import React from 'react'
import { JOURNALS_INDEX } from '../DOCS';

export default function ActiveJournals() {
  return (
    <div className="flex p-4 gap-2 overflow-hidden flex-col items-start justify-center text-slate-700  max-w-[60rem] bg-white ">
      <section className="p-3 flex-col items-start flex gap-3">
        <h1 className="text-3xl font-bold">MDPI Journal List</h1>
        <h2 className="text-xl font-bold">427 Journals</h2>
        <p className="text-xs">
          MDPI currently publishes 418 peer-reviewed journals, and 9 conference
          journals which are dedicated to publishing outputs from academic
          conferences
        </p>
        <h1 className="text-xl font-bold">Journal Proposal</h1>
        <p className="text-xs">
          As an open access pioneer and innovative publisher, MDPI is always
          interested in exploring new opportunities for collaboration, including
          the launch of new journals and the transfer of existing journals.
          Researchers interested in submitting a proposal for a new journal for
          consideration, or interested in having their journal published by
          MDPI, can submit their proposal here.
        </p>
      </section>
      <div className="overflow-x-auto p-3">
        <table className="min-w-full bg-white border-gray-200 rounded-md shadow-md">
          <thead className=" border-gray-200 text-[8px] sm:text-xs  md:text-sm">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">#</th>
              <th className="px-6 py-3 text-left text-gray-600">
                Journal Name
              </th>
              <th className="px-6 py-3 text-left text-gray-600">ISSN</th>
              <th className="px-6 py-3 text-left text-gray-600">Launch Date</th>
              <th className="px-6 py-3 text-left text-gray-600 hidden lg:table-cell">
                Impact Factor
              </th>
              <th className="px-6 py-3 text-left text-gray-600 hidden lg:table-cell">
                Cite Score
              </th>
              <th className="px-6 py-3 text-left text-gray-600 hidden lg:table-cell">
                Current Issue
              </th>
              <th className="px-6 py-3 text-left text-gray-600">
                Total Articles
              </th>
            </tr>
          </thead>
          <tbody>
            {JOURNALS_INDEX.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 text-[8px] sm:text-[10px] md:text-xs"
              >
                <td className="px-6 py-4 text-gray-600">{item.id}</td>
                <td className="px-6 py-4 flex items-center space-x-2 text-gray-600">
                  <img
                    src={item.name.img}
                    alt={item.name.title}
                    className="w-8 h-8 object-cover rounded-sm"
                  />
                  <span>{item.name.title}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{item.issn}</td>
                <td className="px-6 py-4 text-gray-600">{item.launchDate}</td>
                <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">
                  {item.if}
                </td>
                <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">
                  {item.citeScore}
                </td>
                <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">
                  {item.currentIssue}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {item.totalArticles}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
