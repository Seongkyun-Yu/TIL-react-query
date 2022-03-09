import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { GitInfo } from "../types/gitInfo";

async function getUsers() {
  const response = await axios.get("https://api.github.com/repos/tannerlinsley/react-query");
  return response.data;
}

export const GitInfo2Container: React.FC = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery<GitInfo>(
    "repoData2",
    () => fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json()),
    { suspense: true }
  );

  const onClick = () => {
    queryClient.invalidateQueries("repoData2");
  };

  if (error) return <div>{"Error"}</div>;
  return (
    <div>
      <h1 style={{ color: "red" }}>{data?.name}</h1>
      <p onClick={onClick}>{data?.description}</p>
    </div>
  );
};
