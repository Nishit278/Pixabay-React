import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-gray-100 mx-3 my-3 dark:bg-gray-900">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-solid text-indigo-600 text-xl mb-2 dark:text-indigo-300">
          Photo by {image.user}
        </div>
        <ul className="text-gray-900 dark:text-gray-100">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span className="inline-block bg-gray-300  rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 dark:bg-gray-600 dark:text-gray-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
