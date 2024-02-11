"use client";

import useFetch from "./useFetch";

type ProductType = {
  id: string;
  name: string;
  about: string;
  price: number;
  category: string;
};

function useDealOfTheDay() {
  const fakeDealOfTheDay = {
    id: "1",
    name: "Laptop",
    about: "Powerful laptop with high-performance features.",
    price: 999,
    category: "Electronics",
  };

  const dealOfTheDay = useFetch({
    fetchFunction: async () => {
      const fakeResponse = new Promise<ProductType>((res) => fakeDealOfTheDay);
      await Promise.resolve(fakeResponse);
      console.log(fakeResponse);

      return fakeResponse;
    },
  });

  return fakeDealOfTheDay;
}

export default useDealOfTheDay;
