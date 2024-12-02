import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
const index = () => {
  return (
    <div>
      <div className="join join-vertical w-full mt-8">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />

          <div className="collapse-title text-xl font-medium flex ">
            <div>
              <FaQuestionCircle fill="blue" size={30} className="" />
            </div>
            <p className="mr-4"> آيا یادگیری CSS سخت است؟</p>
          </div>
          <div className="collapse-content">
            <p className="border-2 p-7 rounded-xl text-lg text-gray-700">
              {" "}
              خیر! یادگیری CSS بسیار ساده‌است، اما تنها نیاز به تمرین و تکرار و
              کسب مهارت در استفاده کردن از ویژگی‌های مختلف این زبان را دارد. شما
              با دوره آموزش رایگان CSS در وبسایت راکت به شکل قدم به قدم
              می‌توانید CSS را به صورت بسیار ساده یاد بگیرید.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <div>
              <FaQuestionCircle fill="blue" size={30} className="" />
            </div>
            <p className="mr-4"> آیا برای طراحی وب، یادگیری CSS الزامی است؟</p>
          </div>
          <div className="collapse-content">
            <p className="border-2 p-7 rounded-xl text-lg text-gray-700">
              {" "}
              جواب این سوال قطعا بله است. این امکان پذیر نیست که شما تصمیم
              بگیرید طراحی وب انجام دهید اما CSS را یاد نگیرید. در واقع CSS
              دومین تکنولوژی مهم در توسعه و طراحی صفحات وب بعد از HTML است و در
              نتیجه حتما باید آن را یاد بگیرید.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <div>
              <FaQuestionCircle fill="blue" size={30} className="" />
            </div>
            <p className="mr-4"> در این دوره چقدر با CSS آشنا می‌شویم؟"</p>
          </div>
          <div className="collapse-content">
            <p className="border-2 p-7 rounded-xl text-lg text-gray-700">
              {" "}
              شما با استفاده از دوره‌ آموزش CSS وبسایت راکت می‌توانید تقریبا بر
              ۹۰ درصد از مباحث موجود CSS تسلط پیدا کنید البته این تسلط تنها با
              تمرین و تکرار در کنار مشاهده جلسات دوره به دست می‌آید.
            </p>
          </div>
        </div>{" "}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <div>
              <FaQuestionCircle fill="blue" size={30} className="" />
            </div>
            <p className="mr-4"> در این دوره چقدر با CSS آشنا می‌شویم؟"</p>
          </div>
          <div className="collapse-content">
            <p className="border-2 p-7 rounded-xl text-lg text-gray-700">
              {" "}
              شما با استفاده از دوره‌ آموزش CSS وبسایت راکت می‌توانید تقریبا بر
              ۹۰ درصد از مباحث موجود CSS تسلط پیدا کنید البته این تسلط تنها با
              تمرین و تکرار در کنار مشاهده جلسات دوره به دست می‌آید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
