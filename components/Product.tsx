import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const includedFeatures = [
  "ได้รับตัวสินค้า",
  "ราคาถูก",
  "ช่วยลดขยะ",
  "ส่งเสริมชุมชน",
];

export default function Product() {
  return (
    <div className="bg-white py-24 sm:py-32" id="product">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            สินค้าของเรา
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            สิ่งประดิษฐ์ที่ได้จากการทำ และนำไปประยุกต์ใช้ได้
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              สินค้ายอดนิยม
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              หลอดไฟที่ทำจากถุงพลาสติกและขวดน้ำ
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                มีอะไรบ้าง
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <FaCheck
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-indigo-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  ซื้อตอนนี้
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    120
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    THB
                  </span>
                </p>
                <Link
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ซื้อตอนนี้
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  มีใบแจ้งหนี้และใบเสร็จรับเงินเพื่อการชำระเงินคืนของบริษัทที่ง่ายดาย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
