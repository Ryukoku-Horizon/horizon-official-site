export default function NewsCards() {
  return (
    <li className="bg-gray-900 h-80 w-full sm:w-64 md:w-80 lg:w-96 text-center flex flex-col">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-0 h-0 
                 border-t-[20px] border-t-slate-300
                 border-r-[20px] border-r-transparent"
        ></div>
      </div>
      <div className="text-white opacity-70 p-5 text-left flex-grow">
        公式サイトをリニューアルしました。
      </div>
      <div className="text-white opacity-55 p-5 text-left">2024/09/28</div>
    </li>
  );
}
