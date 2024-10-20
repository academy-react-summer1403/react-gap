
import React from "react";

const Footer = () => {
  return (

    <div className="bg-[#A4F6DE;]">
      <footer className="footer bg-green-500- text-base-content p-40  dark:bg-[#22445D;]">
  <nav>
    <h6 className="footer-title text-3xl">خدمات</h6>
    <a className="link link-hover text-xl">آموزش حرفه ای
    </a>
    <a className="link link-hover text-xl">مشاوره رایگان</a>
    <a className="link link-hover text-xl">فرصت های شغلی</a>
    
  </nav>
  <nav>
    <h6 className="footer-title text-3xl">آموزشگاه</h6>
    <a className="link link-hover text-xl"> درباره ما</a>
    <a className="link link-hover text-xl">ارتباط با ما</a>
    <a className="link link-hover text-xl">قوانین آموزشگاه</a>
    
  </nav>
  <nav>
    <h6 className="footer-title  text-3xl">اخبار آموزشگاه</h6>
    <a className="link link-hover text-xl"> برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید. </a>

  </nav>
  <form>
    <h6 className="footer-title text-3xl">اخبار آموزشگاه</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-lg">  آدرس ایمیل خود را وارد کنید</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder=" ... Email"
          className="input input-bordered join-item outline-none" />
        <button className="btn btn-primary join-item">ثبت</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>

  

//      <div className="dark:bg-[#22445D;]  h-[500px] sm:h-[450px] bg-[#A4F6DE;] dark:text-[#ffff]">
// //       <div className="hidden 2xl:block border-t-2 border-t-[#807A7A]  w-[90%] h-[100px] relative top-[341px] -left-[80px]">
// //         <div className="flex justify-start gap-3 h-[66px] mt-6">
// //           <div className="w-[46px] h-[46px]">
// //             <img src="./h11.png" alt="" />
// //           </div>
// //           <div className="w-[70%] h-[56px]">
// //             <h1 className="text-2xl text-[#757474]">
// //               کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است.©
// //             </h1>
// //           </div>
// //           <div className="flex justify-center gap-2 w-[256px] h-[56px] mr-[590px]">
// //             <div className=" w-[56px] h-[56px]">
// //               <img src="./networkicon.png" alt="" />
// //             </div>
// //             <div className=" w-[56px] h-[56px]">
// //               <img src="./network icon (6).png" alt="" />
// //             </div>
// //             <div className=" w-[56px] h-[56px]">
// //               <img src="./network icon.png" alt="" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex h-[342px] relative -top-[100px]">
// //         <div className="w-[20%] mt-40 mr-10 h-[200px] sm:mt-20 sm:mr-28 sm:w-[20%]">
// //           <h1 className="font-inter text-xl text-[#444444;] sm:text-3xl">
// //             {" "}
// //             خدمات{" "}
// //           </h1>
// //           <div className="w-[327px] h-[200px] mt-5 ">
// //             <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl">
// //               آموزش رایگان{" "}
// //             </h2>
// //             <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl ">
// //               {" "}
// //               مشاوره رایگان{" "}
// //             </h2>
// //             <h3 className="text-lg text-[#444444;] m-2 sm:text-2xl">
// //               {" "}
// //               فرصت های شغلی{" "}
// //             </h3>
// //           </div>
// //         </div>

// //         <div className="w-[20%] mt-40 mr-14 h-[200px] sm:mt-20 sm:mr-28 sm:w-[20%]">
// //           <h1 className="font-inter text-xl text-[#444444;] sm:text-3xl">
// //             {" "}
// //             خدمات{" "}
// //           </h1>
// //           <div className="w-[327px] h-[200px] mt-5 ">
// //             <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl">
// //               آموزش رایگان{" "}
// //             </h2>
// //             <h2 className="text-lg text-[#444444;] m-2 sm:text-2xl ">
// //               {" "}
// //               مشاوره رایگان{" "}
// //             </h2>
// //             <h3 className="text-lg text-[#444444;] m-2 sm:text-2xl">
// //               {" "}
// //               فرصت های شغلی{" "}
// //             </h3>
// //           </div>
// //         </div>

        
// //         <div className=" w-[80%] mt-[70%] -mr-60 sm:w-[30%]  sm:mt-20  sm:mr-40">
// //           <h1 className="text-xl text-[#444444;] m-2 sm:text-2xl"> اخبار آموزشگاه </h1>
// //           <h2 className="text-lg text-[#444444;] m-2 text-right sm:2xl">
// //             {" "}
// //             برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.{" "}
// //           </h2>
// //           {/* <input
// //             className="w-[359px] h-[55px] rounded-r-xl relative top-3 outline-none
// //              placeholder:p-6
// //              placeholder:font-medium
// //              "
// //             type="text"
// //             name=""
// //             id=""
// //             placeholder=" example@gmail.com"
// //           /> */}
            
// //     <label class="block">
// //   <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
// //     Email
// //   </span>
// //   <input type="email" name="email" class="mt-1 px-3  py-3 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
// // </label>
// //           <button className="bg-[#41A789;] relative h-11 -top-[44px] right-[95%] text-[#ffffff]
// //           w-20 rounded-l-lg p-4 hover:bg-[#51b199;] placeholder:pr-6">
// //             {" "}
// //             ثبت{" "}
// //           </button>
// //         </div>
// //       </div>
//      </div>
  );
};

export default Footer;
