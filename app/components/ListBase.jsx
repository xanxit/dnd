"use client";
import Image from "next/image";
import CardBase from "./CardBase";
import { Droppable } from "react-beautiful-dnd";

const ListBase = (props) => {
  return (
    <Droppable droppableId={String(props?.id)}>
      {(provided) => (
        <div
          className={`w-[308px] 2xl:w-full bg-gray-50 rounded-lg min-h-max mb-20 border`}
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{ borderColor: `${props?.headerColor}` }}
        >
            <div
              className={`w-full flex items-center gap-x-1 px-2.5 h-8 rounded-t`}
              style={{ background: ` ${props?.headerColor}` }}
            >
              <Image
                src={`/images/list-icons/${props?.title?.toLowerCase()}.svg`}
                height={14}
                width={14}
                alt="status"
              />
              <p
                className={`text-xs font-semibold`}
                style={{ color: `${props?.textColor}` }}
              >
                {props?.title} &nbsp;•&nbsp; {props?.applicants?.length}
              </p>
            </div>
          <div className="p-2 w-full">
            {props?.applicants?.map((applicant, idx) => (
              <CardBase
                applicantData={applicant}
                category={props?.title}
                key={applicant.id}
                id={applicant.id}
                index={idx}
              />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default ListBase;
