import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface Syllabus {
  content: string;
  week: number;
  topic: string;
}

const ExpandableDiv = ({ syllabus }: { syllabus: Syllabus }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="border border-gray-400 p-4 mb-2" onClick={toggleExpand}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          Week {syllabus.week} - {syllabus.topic}
        </h2>
        <button className="text-blue-500 focus:outline-none">
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-2 truncate">
          <p>{syllabus.content}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableDiv;
