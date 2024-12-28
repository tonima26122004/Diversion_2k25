import React from 'react';

const DisplayBox = ({ queries }) => {
    return (
        <div className="bg-[#E4E2D6] w-[96%] mx-auto mt-4 rounded-lg p-4 ">
            <div className="flex flex-col space-y-4 items-end">
                {queries.map((query, index) => (
                    <div
                        key={index}
                        className="bg-[#9E9776] text-black font-semibold text-lg px-4 py-3 rounded-2xl text-right max-w-[30%] break-words "
                    >
                        {query}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayBox;

