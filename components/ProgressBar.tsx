const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className="bg-gray-200 w-full h-4 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
