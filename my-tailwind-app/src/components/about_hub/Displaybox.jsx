import React from "react";

const Displaybox = ({ read, articleNo }) => {
  const article = read?.find((item) => item.Number === parseInt(articleNo));

  if (!article) {
    return <p>Loading or Article Not Found...</p>; 
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-md font-libra">
        Article {article.Number} of the Indian Constitution states:
      </h1>

      {article.Title && (
        <div>
          <h2 className="text-xl font-libra">“{article.Title}”</h2>
        </div>
      )}

      {article.Description && (
        <div>
          <ul className="list-disc font-libra text-xl ml-10">
            <li>{article.Description}</li>
          </ul>
        </div>
      )}

      {article.Details && article.Details.length > 0 && (
        <div>
          <ul className="list-disc font-libra text-xl ml-10">
            {article.Details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Displaybox;
