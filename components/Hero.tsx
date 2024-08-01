import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap" id="home">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <div className="container px-4 lg:flex mt-32 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                ยินดีต้อนรับสู่เว็บไซต์ที่นำพาเข้าสู่การทำธุรกิจและ <span className="text-blue-700">รักษ์โลก</span>
                ไปด้วยกัน
                </h1>
                <div className="w-20 h-2 bg-blue-700 my-4"></div>
                <p className="text-xl mb-10">
                การนำความรู้ไปต่อยอดและพัฒนาเพื่อประโยชน์สู่โลกและผู้คน เพื่อโลกที่น่าอยู่
                </p>
                <button className="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  เรียนรู้เกี่ยวกับพวกเราเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default Hero;
