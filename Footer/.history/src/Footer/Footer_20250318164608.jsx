// export default function Footer(){



//     return(
//         <div>
//             <h1 >hi</h1>
//         </div>
//     )
// }


export default function Footer() {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-between">
        {/* مستطیل وسط صفحه */}
        <div className="bg-blue-500 w-96 h-32 my-10 z-10">
          <h1 className="text-white text-center pt-8">مستطیل وسط صفحه</h1>
        </div>
  
        {/* مستطیل پایین صفحه که به نصف مستطیل وسط می‌رسد */}
        <div className="bg-green-500 w-96 h-32 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
          <h1 className="text-white text-center pt-8">مستطیل پایین صفحه</h1>
        </div>
      </div>
    );
  }
  