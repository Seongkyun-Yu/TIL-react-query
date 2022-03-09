import axios from "axios";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "react-query";

const queryClient = new QueryClient();

const Example: FC = () => {
//   const { isLoading, error, data } = useQuery("repoData", () =>
//     fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json())
//   );

  const { data, mutate, mutateAsync, reset } = useMutation((newTodo) => {
    return axios.post("/todos", newTodo);
  }, {
      onSuccess: ()=> queryClient.invalidateQueries('todos')
  });

  console.log(mutate, mutateAsync, reset)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
