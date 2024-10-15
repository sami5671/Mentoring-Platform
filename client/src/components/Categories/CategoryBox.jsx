import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, selected }) => {
  // =================================================================
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("clicked", label);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updateQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
      navigate(url);
    }
  };
  // =================================================================
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center cd w-[200px] gap-2 p-3 rounded-lg layout-css shadow-xl hover:bg-slate-900 hover:text-slate-500 transition cursor-pointer ${
        selected ? "border-slate-700 text-neutral-800" : ""
      }`}
    >
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
