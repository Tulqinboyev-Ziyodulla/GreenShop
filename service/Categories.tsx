"use client";
import { Context } from "@/context/Context";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

interface Category {
  category_id: string;
  category_name: string;
}

const Categories = () => {
  const axiosInstance = useAxios();

  async function getData() {
    const response = await axiosInstance.get(`/categories`, {
      params: {
        page: 1,
        limit: 100,
      },
    });
    return response?.data;
  }

  const { setCategoryName, categoryName } = useContext(Context);
  const { data: categories = {}, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getData,
  });

  return (
    <div className="w-[300px]" aria-label="Categories">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
      <p
        className={`flex justify-between items-center text-sm cursor-pointer mb-2 ${
          categoryName === null ? "text-green-600" : "text-gray-600"
        }`}
        onClick={() => setCategoryName(null)}
      >
        All
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col gap-5">
          {categories?.categories?.map((category: Category) => (
            <li key={category.category_id}>
              <p
                className={`flex justify-between items-center py-1 text-sm cursor-pointer ${
                  category.category_name === categoryName
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
                onClick={() => setCategoryName(category.category_name)}
              >
                <span>{category.category_name}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
