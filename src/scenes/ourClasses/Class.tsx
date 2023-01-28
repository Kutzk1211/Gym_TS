import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description = "some description", image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col justify-center items-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
        <img alt={`${image}`} src={image} />
      </div>
    </li>
  );
};

export default Class;
