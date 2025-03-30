// export default function Footer(){

//     return(
//         <div>
//             <h1 >hi</h1>
//         </div>
//     )
// }

export default function Footer() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-500 w-96 h-32 z-10">
        <h1 className="text-white text-center pt-8">مستطیل وسط صفحه</h1>
      </div>

      {/* مستطیل پایین صفحه که عرضش کل صفحه را می‌گیرد و ارتفاعش 370px است */}
      <div className="bg-green-500 w-full h-[370px] absolute bottom-0 left-0 z-0">
        <h1 className="text-white text-center pt-8">مستطیل پایین صفحه</h1>
      </div>
    </div>
  );
}
