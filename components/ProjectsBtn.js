//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icon
import { HiArrowDownRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="max-auto xl:max-0">
      <Link href={"/work"}>
        <Image src={'/rounded.png'} width={141} height={148} alt="" className=""/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
