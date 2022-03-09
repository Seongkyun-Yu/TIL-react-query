import { useReducer, useEffect } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";

type StateType = {
  data: any;
  isLoading: boolean;
  error: AxiosError | null;
};

type ActionType = {
  type: string;
  data?: any;
  error?: AxiosError;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "LOADING":
      return {
        isLoading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        isLoading: false,
        data: null,
        error: action.error as AxiosError,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback: Function, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error as AxiosError });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
