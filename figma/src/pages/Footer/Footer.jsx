import logo from '../../assets/logo.png';
import banner from '../../assets/things.png';

export default function FooterDesign() {
  return (
    <div className="w-full bg-white font-['Noto_Sans']">
      <div className="bg-white text-center px-4 pt-8">
        <div className="text-[1.6rem] font-bold mb-4">
          A world of inspiration for your home.
        </div>
        <img src={logo} alt="IKEA Logo" className="w-[120px] mx-auto my-4" />
        <img src={banner} alt="IKEA Banner" className="w-full max-w-[1000px] mx-auto block" />
      </div>

      <div className="bg-[#0058A3] text-white px-4 py-8 mt-[-4px]">
        <div className="flex justify-center flex-wrap text-[0.95rem] font-medium mb-8">
          <p className="m-0">International Sales</p>
          <span className="mx-4 text-white">|</span>
          <p className="m-0">Inter IKEA Group</p>
          <span className="mx-4 text-white">|</span>
          <p className="m-0">IKEA Foundation</p>
          <span className="mx-4 text-white">|</span>
          <p className="m-0">IKEA Museum</p>
          <span className="mx-4 text-white">|</span>
          <p className="m-0">FAQs</p>
        </div>

        <div className="flex justify-between flex-wrap text-[0.8rem] pt-4 gap-4">
          <span className="flex-1 text-left">Cookie settings</span>
          <span className="flex-1 text-center">© Inter IKEA Systems B.V. 1999 - 2023</span>
          <span className="flex-1 text-right">Privacy & Cookie statement</span>
        </div>
      </div>
    </div>
  );
}
