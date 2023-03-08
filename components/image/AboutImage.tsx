import Image from "next/image";
import Pp from "../../public/pp.png";
const AboutImage = () => {
  return (
    <div className="relative block w-full max-w-[300px] overflow-hidden rounded-md ">
      <Image src={Pp} alt="pp" className=" object-cover" width={300} height={300} />

      {/* <div className="h-[250px] w-[250px] rounded-md bg-earth-300/80 bg-[url('/pp.jpeg')] bg-cover bg-blend-overlay"></div> */}
    </div>
  );
};

export default AboutImage;
