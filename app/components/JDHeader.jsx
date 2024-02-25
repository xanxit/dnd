import Image from "next/image";

const JDHeader = () => {
  const headerObj = [
    { num: 78, text: "Candidates" },
    {
      num: 68,
      text: "Applied w/ Peerlist",
    },
    { num: 2872, text: "Views" },
  ];
  const numbers = [0, 1, 2, 3];
  return (
    <div className="px-6 py-10 w-full h-full bg-[#FAFBFC]">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0">
        <div className="flex flex-row items-center gap-x-4">
          <a className="flex" href="#">
            <div className="border border-primaryBorder bg-white inline-block p-2 rounded-2xl">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 rounded-full">
                  <Image
                    className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-contain hover:opacity-90 transition-opacity"
                    src="/images/p-logo.webp"
                    alt="Peerlist"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
            </div>
          </a>
          <div>
            <h1 className="text-[#0D0D0D] font-semibold text-lg flex items-center">
              Software Engineer, Front End
              <span className="inline-block mt-1 ml-1.5">
                <Image
                  src="/images/icons/drop-down.svg"
                  alt="caret down"
                  width={16}
                  height={16}
                />
              </span>
            </h1>
            <p className="text-[#0D0D0D] font-normal text-sm ">
              at Peerlist<span> • Full-time</span>
              <span className="capitalize">
                {" "}
                • Remote(United States, Canada)
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-x-2.5">
          {numbers.map((number, idx) => (
            <Image
              src={`/images/icons/header/Icon Btn-${number}.svg`}
              width={24}
              height={24}
              alt="share-icons"
              key={idx}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between md:pl-[72px] mt-6 gap-y-4 md:gap-y-0">
        <div className="flex flex-row gap-x-4">
          {headerObj.map((item, idx) => (
            <div className="flex gap-1" key={idx}>
              <p className="font-semibold text-[12px]">{item.num}</p>
              <p className="text-[12px]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex text-[10px] text-[#6A737D]">
          Posted&nbsp;
          <span className="font-semibold text-[#0D0D0D]">1d ago</span>
          &nbsp;by&nbsp;
          <span className="w-4 h-4 inline-block rounded-full overflow-hidden">
            <Image
              className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white -mt-0.5"
              src="/images/akash-img.svg"
              alt="Sanchit Hajela"
              width="18"
              height="18"
            />
          </span>
          &nbsp;
          <span className="font-semibold text-[#0D0D0D]">Sanchit Hajela</span>
        </div>
      </div>
    </div>
  );
};
export default JDHeader;
