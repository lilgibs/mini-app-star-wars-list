import { ChevronRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Breadcrumbs({
  menus = [],
}: {
  menus: { name: string; link?: string; active?: boolean }[];
}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-yellow-400">
      <div className="flex items-center gap-2">
        <button onClick={() => navigate(`/home`)} className="flex gap-2 items-center font-semibold">
          <Home size={18} />
          <p>Back to homepage</p>
        </button>

        {menus.map((menu, i) => (
          <div key={i} className="flex items-center gap-2">
            <ChevronRight size={18} className="mt-1" />
            <button
              onClick={() => !!menu.link && navigate(menu.link)}
              className={`text-[16px] ${menu.active ? "text-N200" : "text-N75"
                } font-semibold ${!!menu.link ? "cursor-pointer" : "cursor-default"
                }`}
            >
              {menu.name}
            </button>
          </div>
        ))}
      </div>
      {/* <span className="text-N300">20 April 2022 - 11:12:21</span> */}
    </div>
  );
}
