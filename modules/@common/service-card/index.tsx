import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const ServiceCard = ({ data }: any) => {
  return (
    <Link
      href="services/your-student-consultancy-partner"
      className="w-full mb-5 relative block service_card_parent group/test"
    >
      <div className="w-full h-full absolute service_card_overley rounded-md"></div>
      <Image
        src={data?.imgSrc}
        alt="Expert Consultency"
        width={760}
        height={730}
        blurDataURL="/services/exp-consult-1.png"
        placeholder="blur"
      />

      <div className="absolute left-0 top-0 w-full h-full flex flex-col p-5 max-w-[340px] w-full">
        <div className="flex">
          <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
            {data?.title}
          </div>
        </div>
        <div className="mt-auto ">
          <h2 className="text-white mb-0">{data?.shortDesc}</h2>
          <div className="flex justify-start items-center btn px-0 text-white  mt-auto transition-all">
            <span className="text-base"> Read More</span>
            <RiArrowRightLine className="text-base" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
