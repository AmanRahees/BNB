interface MessageProps {
  i: number;
  message: string;
}

export const Message = ({ i, message }: MessageProps) => {
  const isUserMessage = i % 2 === 0;
  return (
    <div className={isUserMessage ? "flex justify-end" : "flex justify-start"}>
      <div
        className={`w-max max-w-[80%] py-3 px-5 rounded-xl ${
          isUserMessage ? "bg-gray-100" : "bg-slate-100"
        }`}
      >
        {isUserMessage ? (
          <p className="font-bold text-primary-dark">You</p>
        ) : (
          <p className="font-bold text-gray-600">John Doe</p>
        )}
        <p className="text-sm">
          Something lsakdjf klasdjf Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id nulla earum totam vel in inventore praesentium
          aliquid possimus autem, fugiat omnis, distinctio nihil mollitia at
          voluptatem culpa incidunt asperiores explicabo?
        </p>
        <small className="block text-zinc-500 float-end">16:06 P.M</small>
      </div>
    </div>
  );
};
