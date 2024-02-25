"use client";
import { Draggable } from "react-beautiful-dnd";

const CardBase = ({ applicantData, category, index, id }) => {
  const rejected = category.toLowerCase() === "rejected" ? true : false;
  const applied = category.toLowerCase() === "applied" ? true : false;
  const shortlisted = category.toLowerCase() === "shortlisted" ? true : false;
  return (
    <Draggable draggableId={String(id)} index={index} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-full h-full p-4 mb-2 border border-[#E1E4E8] rounded-lg flex flex-col gap-y-2 bg-white"
        >
          <div className="flex flex-row justify-between items-start">
            <div className="w-8 h-8 relative">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  className="w-8 h-8 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white"
                  src="/images/sanchit-boi.webp"
                  alt="Sanchit Hajela"
                  width="32"
                  height="32"
                />
              </div>
            </div>
            <p className="text-[10px] text-[#6A737D]"> Applied 1d ago</p>
          </div>
          <div className="flex flex-col gap-y-0.5">
            <p className="font-semibold text-sm flex items-center">
              {applicantData.name + " "}
              <span className="ml-0.5 -mt-0.25">
                <img
                  src="/images/icons/verified.svg"
                  alt="verified"
                  height="16"
                  width="16"
                />
              </span>
            </p>
            <p className="text-xs">{applicantData.designation}</p>
            <p></p>
          </div>
          {rejected && (
            <div className="flex text-[10px] text-[#6A737D]">
              <span className="w-[6px] h-[6px] opacity-70 mr-1">&#10060;</span>
              &nbsp; Rejected by{" "}
              <span className="w-4 h-4 inline-block rounded-full overflow-hidden ml-1">
                <img
                  className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white bg-white -mt-0.5"
                  src="/images/sanchit-boi.webp"
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
          {applied && (
            <div className="flex flex-col gap-2">
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
              <div className="flex text-[10px] text-[#6A737D]">
                <span className="w-[6px] h-[6px] !text-[12px] mr-1 !text-green-600">
                  &#10003;
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
      )}
    </Draggable>
  );
};

export default CardBase;
