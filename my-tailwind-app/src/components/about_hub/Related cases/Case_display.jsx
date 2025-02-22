import React from 'react';

const Case_display = ({ read }) => {
  if (!read || read.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='overflow-y-auto px-4'>
      <div className='flex flex-col'>
        <div className='font-libra text-2xl mt-1'>
          <h1>Here are a few important cases related to Article: {read[0].Number}</h1>
        </div>
        {read[0].Related_Cases.map((caseItem, index) => (
          <div key={index} className='mt-4'>
            <div className='font-libra text-3xl text-[#766C40] flex gap-2'>
              <h1>{index + 1}. {caseItem.Case}</h1>
            </div>
            <div className='font-libra text-xl mt-3 ml-3'>
              <ul>
                <li><strong>Background:</strong> {caseItem.Background}</li>
                <li><strong>Sequence of Events:</strong> {caseItem.Sequence_of_Events}</li>
                <li><strong>Judgment:</strong> {caseItem.Judgment}</li>
                <li><strong>Ultimate Solution:</strong> {caseItem.Ultimate_Solution}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case_display;
