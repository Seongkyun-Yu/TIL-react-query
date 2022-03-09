import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import useAsync from "../hooks/useAsync";
import { setGitInfo } from "../redux/actions";
import { RootState } from "../redux/reducers";
import { GitInfo } from "../types/gitInfo";

async function getUsers() {
  const response = await axios.get("https://api.github.com/repos/tannerlinsley/react-query");
  return response.data;
}

export const GitInfoContainer: React.FC = () => {
  const { isLoading, error, data, isFetching } = useQuery<GitInfo>(
    "repoData",
    () => fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json()),
    { suspense: true }
  );

  if (error) return <div>{"Error"}</div>;
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  );
};
