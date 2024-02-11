"use client";
import { useEffect, useState } from "react";

type Props<T> = {
  initialValue?: T;
  fetchFunction?: () => Promise<T>;
  fetchUrl?: string;
};

type FetchedValue<T> = {
  isLoading: boolean;
  value?: T;
  error?:
    | {
        message: string;
      }
    | unknown;
};

function useFetch<T>({ initialValue, fetchFunction, fetchUrl }: Props<T>) {
  const [fetchedValue, setFetchedValue] = useState<FetchedValue<T>>({
    value: initialValue || undefined,
    isLoading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = fetchFunction
          ? await fetchFunction()
          : ((await fetch(fetchUrl!)).json as T);

        console.log(result);

        setFetchedValue((prev) => ({
          value: result,
          isLoading: false,
        }));
      } catch (err) {
        setFetchedValue({
          value: undefined,
          isLoading: false,
          error: err || { message: "unknown error" },
        });
      }

      if (!fetchedValue.isLoading) {
        fetchData();
      }
    };
  }, []);

  return fetchedValue;
}

export default useFetch;
