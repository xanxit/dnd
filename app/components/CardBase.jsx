"use client";
import { Draggable } from "react-beautiful-dnd";
import Image from "next/image";

const CardBase = ({ applicantData, category, index, id }) => {
  const rejected = category.toLowerCase() === "rejected" ? true : false;
  const applied = category.toLowerCase() === "applied" ? true : false;
  const shortlisted = category.toLowerCase() === "shortlisted" ? true : false;
  const external = applicantData.external || false;
  return (
    <Draggable draggableId={String(id)} index={index} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-full h-full p-4 mb-2 border border-[#E1E4E8] rounded-lg flex flex-col gap-y-2 bg-white"
        >
          {!external ? (
            <>
              {" "}
              <div className="flex flex-row justify-between items-start">
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      className="w-8 h-8 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white"
                      src={applicantData.img || "/images/sanchit-boi.webp"}
                      alt="candidate"
                      width="32"
                      height="32"
                    />
                  </div>
                </div>
                {applicantData.refferedBy ? (
                  <p className="flex text-[10px] text-[#6A737D]">
                    Ref by&nbsp;
                    <span className="w-4 h-4 inline-block rounded-full overflow-hidden">
                      <Image
                        className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white -mt-0.5"
                        src="https://i.pravatar.cc/700"
                        alt="referee image"
                        width="16"
                        height="16"
                      />
                    </span>
                    &nbsp;
                    <span className="font-semibold text-[#0D0D0D]">
                      {applicantData.refferedBy}
                    </span>
                  </p>
                ) : applicantData.peerlist ? (
                  <div className="w-[73px] h-5">
                    <Image
                      width={73}
                      height={20}
                      src="/images/p-matched.svg"
                      alt="peerlist-matched"
                    />
                  </div>
                ) : (
                  <p className="text-[10px] text-[#6A737D]"> Applied 1d ago</p>
                )}
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="font-semibold text-sm flex items-center">
                  {applicantData.name + " "}
                  {!external && (
                    <span className="ml-0.5 -mt-0.25">
                      <Image
                        src="/images/icons/verified.svg"
                        alt="verified"
                        height="16"
                        width="16"
                      />
                    </span>
                  )}
                </p>
                {!external && (
                  <p className="text-xs">{applicantData.designation}</p>
                )}
              </div>{" "}
            </>
          ) : (
            <div className="flex justify-between">
              <p className="font-semibold text-sm flex items-center">
                {applicantData.name + " "}
              </p>
              <p className="text-[10px] text-[#6A737D]"> Applied 1d ago</p>
            </div>
          )}
          {external ? (
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-4">
                <div className="flex flex-col gap-y-0.5 w-max">
                  <p className="text-[10px] text-[#6A737D]">Resume</p>
                  <p className="text-xs font-semibold text-[#0D0D0D]">
                    DarrellSteward.pdf&nbsp;
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-[10px] text-[#6A737D]">Notice Period</p>
                  <p className="text-xs font-semibold text-[#0D0D0D]">
                    30 days
                  </p>
                </div>
              </div>
              {rejected && (
                <div className="flex text-[10px] text-[#6A737D] flex-wrap">
                  <span className="w-[6px] h-[6px] opacity-70 mr-1 mt-[1.35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_36677)">
                        <path
                          d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                          stroke="#EB5757"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 6H8"
                          stroke="#EB5757"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_36677">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  &nbsp; Rejected by{" "}
                  <span className="w-4 h-4 inline-block rounded-full overflow-hidden ml-1">
                    <Image
                      className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white -mt-0.5"
                      src="https://i.pravatar.cc/230"
                      alt="Yogini Bende"
                      width="16"
                      height="16"
                    />
                  </span>
                  &nbsp;
                  <span className="font-semibold !text-[#6A737D]">
                    Yogini Bende
                  </span>
                  &nbsp; on 15 Dec 2023
                </div>
              )}
              {shortlisted && (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-x-4">
                    <div className="flex flex-col gap-y-0.5">
                      <p className="text-[10px] text-[#6A737D]"> Experience</p>
                      <p className="text-xs text-[#0D0D0D] font-semibold">
                        {applicantData.exp}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <p className="text-[10px] text-[#6A737D]">
                        {" "}
                        Holding offer?
                      </p>
                      <p className="text-xs text-[#0D0D0D] font-semibold">
                        {applicantData.offer}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <p className="text-[10px] text-[#6A737D]">
                        {" "}
                        Notice Period
                      </p>
                      <p className="text-xs text-[#0D0D0D] font-semibold">
                        {applicantData.notice}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-[10px] text-[#6A737D] flex-wrap">
                    <span className="w-[6px] h-[6px] !text-[12px] mr-1 mt-[1.35px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.25 6.28571L4.5 8.375L9.75 3.5"
                          stroke="#00AA45"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    &nbsp; Shortlisted by &nbsp;
                    <span className="font-semibold !text-[#6A737D]">
                      Yogini Bende
                    </span>
                    &nbsp; on 15 Dec 2023
                  </div>
                </div>
              )}
            </div>
          ) : rejected ? (
            <div className="flex w-max text-[10px] text-[#6A737D]">
              <span className="w-[6px] h-[6px] opacity-70 mr-1 mt-[1.35px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_36677)">
                    <path
                      d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
                      stroke="#EB5757"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6H8"
                      stroke="#EB5757"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_36677">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="flex">
              &nbsp; Rejected by{" "}
              <span className="w-4 h-4 hidden md:inline-block rounded-full overflow-hidden ml-1">
                <Image
                  className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white -mt-0.5"
                  src="https://i.pravatar.cc/230"
                  alt="Yogini Bende"
                  width="16"
                  height="16"
                />
              </span>
              &nbsp;
              <span className="font-semibold flex !text-[#6A737D]">
                Yogini Bende
              </span>
              &nbsp; on 15 Dec 2023
              </p>
            </div>
          ) : applied ? (
            <div className="flex flex-col w-max gap-2">
              <div className="flex gap-x-4">
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-[10px] text-[#6A737D]"> Experience</p>
                  <p className="text-xs text-[#0D0D0D] font-semibold">
                    {applicantData.exp}
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-[10px] text-[#6A737D]"> Holding offer?</p>
                  <p className="text-xs text-[#0D0D0D] font-semibold">
                    {applicantData.offer}
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-[10px] text-[#6A737D]"> Notice Period</p>
                  <p className="text-xs text-[#0D0D0D] font-semibold">
                    {applicantData.notice}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="text-[10px] text-[#6A737D]"> Contact</p>
                <p className="text-xs text-[#0D0D0D] font-semibold">
                  {applicantData.email}
                </p>
                <p className="text-xs text-[#0D0D0D] font-semibold">
                  {applicantData.num}
                </p>
              </div>
            </div>
          ) : (
            shortlisted && (
              <div className="flex w-max flex-col gap-2">
                <div className="flex gap-x-4">
                  <div className="flex flex-col gap-y-0.5">
                    <p className="text-[10px] text-[#6A737D]"> Experience</p>
                    <p className="text-xs text-[#0D0D0D] font-semibold">
                      {applicantData.exp}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                    <p className="text-[10px] text-[#6A737D]">
                      {" "}
                      Holding offer?
                    </p>
                    <p className="text-xs text-[#0D0D0D] font-semibold">
                      {applicantData.offer}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                    <p className="text-[10px] text-[#6A737D]"> Notice Period</p>
                    <p className="text-xs text-[#0D0D0D] font-semibold">
                      {applicantData.notice}
                    </p>
                  </div>
                </div>
                <div className="flex text-[10px] text-[#6A737D] flex-wrap">
                  <span className="w-[6px] h-[6px] !text-[12px] mr-1 mt-[1.35px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.25 6.28571L4.5 8.375L9.75 3.5"
                        stroke="#00AA45"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  &nbsp; Shortlisted by &nbsp;
                  <span className="font-semibold !text-[#6A737D]">
                    Yogini Bende
                  </span>
                  &nbsp; on 15 Dec 2023
                </div>
              </div>
            )
          )}
        </div>
      )}
    </Draggable>
  );
};

export default CardBase;
