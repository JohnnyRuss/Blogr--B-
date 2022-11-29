import React from "react";

interface ParagraphsListType {
  data: {
    title: string;
    details: string;
    id: string;
  }[];
  containerClasses?: string;
}

const ParagraphsList: React.FC<ParagraphsListType> = ({
  data,
  containerClasses,
}) => {
  return (
    <div
      className={`w-full w-md-half d-flex flex-column gap-5 text-center text-md-start ${
        containerClasses || ""
      }`}
    >
      {data.map(({ details, id, title }) => (
        <div key={id}>
          <h4 className="fs-app-h4 text-heading mb-2rem">
            {title}
          </h4>
          <p className="text-body-copy">{details}</p>
        </div>
      ))}
    </div>
  );
};

export default ParagraphsList;
