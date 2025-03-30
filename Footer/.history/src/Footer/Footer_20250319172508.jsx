// export default function Footer() {
//   return (
//     <div className="">
//       <div className="bg-sky-700 w-[1000px] h-[552px] rounded-xl flex justify-center"> </div>
//       <div></div>
//     </div>
//   );
// }

// export default function Footer() {
//   return (
//     <div dir="rtl" className="relative min-h-screen flex flex-col items-center justify-center">
//       <div className="bg-white w-280 h-125 z-10 rounded-2xl border border-[#79899E] absolute bottom-[75px]">
//       <h1 className="text-[60px] font-[800] text-[#3B82F6] p-4 flex justify-center">LOGO</h1>
//       <p className="text-[18px] px-8 text-justify min-h-[100%] text-[#334155] leading-loose  " style={{ wordSpacing: '-1px' }} >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی موری توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
//       <div>
//         <p className="text-[#334155] text-[20px] ">راه های ارتباطی با ما</p>
//         <div>
//           <div>
//             <p>ایمیل</p>
//             <p>ouremailaddress@gmail.com</p>
//           </div>
//           <div>
//             <p>آی‌دی تلگرام</p>
//             <p>@ourtelegramhandle</p>
//           </div>
//           <div>
//             <p>شماره واتسپ</p>
//             <p>0912 345 6789</p>
//           </div>
//         </div>
//       </div>
//       </div>

//       <div className="bg-[#EBF2FE] w-full h-[300px] absolute bottom-0 left-0 z-0">
//       </div>
//     </div>
//   );
// }

export default function Footer() {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-white w-255 h-115 z-10 rounded-2xl border border-[#79899E] relative bottom-[-40px]">
        <h1 className="text-[50px] font-[800] text-[#3B82F6] p-4 flex justify-center">
          LOGO
        </h1>
        <p
          className="text-[17px] px-8 text-justify  text-[#334155] tracking-tight"
          style={{ wordSpacing: "-1px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی موری توان
          امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
          به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div>
          {/* <p className="text-[#334155] text-[16px] flex justify-center pt-18 border-b-2">راه های ارتباطی با ما</p> */}
          <p className="text-[#334155] text-[16px] flex justify-center pt-18 tracking-tight relative">
            راه های ارتباطی با ما
            <span className="absolute top-27 left-106 w-[170px] border-b-3  border-[#3B82F6]"></span>
          </p>

          <div className="flex items-center justify-center min-h-screen">
            <div className="text-[#334155] text-[13px] w-[350px] border-2">
              <div className="flex flex-row">
                <p>ایمیل</p>
                <p>ouremailaddress@gmail.com</p>
              </div>
              <div>
                <p>آی‌دی تلگرام</p>
                <p>@ourtelegramhandle</p>
              </div>
              <div>
                <p>شماره واتسپ</p>
                <p>0912 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF2FE] w-full h-[300px] absolute bottom-0 left-0 z-0"></div>
    </div>
  );
}

// export default function Footer() {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center">
//       {/* مستطیل سفید 20 پیکسل پایین‌تر */}
//       <div className="bg-white w-[250px] h-[100px] z-10 rounded-2xl border border-gray-500 absolute ">
//         <h1>Logo</h1>
//         <p>
//           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
//           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی موری توان
//           امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
//           به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
//           جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
//           گیرد.
//         </p>
//       </div>

//       <div className="bg-[#EBF2FE] w-full h-[300px] absolute bottom-0 left-0 z-0">
//         {/* مستطیل آبی که در پایین صفحه قرار دارد */}
//       </div>
//     </div>
//   );
// }
