import { useEffect, useState } from "react";
import "./App.css";
import Coffee from "./components/Coffee/Coffee";
import Post from "./components/Post/Post";

import { useAsyncState } from "./hooks/useAsyncState";

import { getHotCoffees, getIcedCoffees } from "./services/coffee-service";
import * as postsService from "./services/posts-service";
import { useAsyncMutate } from "./hooks/useAsyncMutate";

function App() {
  const [temperature, setTemperature] = useState("hot");
  const [route, setRoute] = useState("coffee");

  const fetcher = temperature === "hot" ? getHotCoffees : getIcedCoffees;

  const coffeelist = useAsyncState([], fetcher);

  const postsList = useAsyncState([], postsService.index, {
    mapper:(res) => res.data,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (value) => {
      console.log(value);
    },
    onFinally: () => {
      console.log("it is idle now");
    },
  });

  const postDelete = useAsyncMutate(postsService.remove, {
    onUpdate:(id) => {
      postsList.setData((prev) => prev.filter(item => item.id !== id));
    },
    onError: (error) => {
      console.log(error);
    },
    isOptimistic: true,
  }, 
  postsList
  );

  const handleDelete = (id) => {
    postDelete.execute(id);

  }
  
  return (
    <>
      <button
        onClick={() => {
          if (temperature === "hot") setTemperature("iced");
          if (temperature === "iced") setTemperature("hot");
        }}
      >
        Toggle Temperature
      </button>

      {route === "coffee" && (
        <button onClick={() => setRoute("posts")}>Show Post</button>
      )}
      {route === "posts" && (
        <button onClick={() => setRoute("coffee")}>Show Coffee {postDelete.isMutating ? "siliniyor" : ""} </button>
      )}
      {coffeelist.isLoading || postsList.isLoading && "Loading..."}
      {route === "coffee" &&
        coffeelist.isIdle &&
        coffeelist.data.map((item) => {
          return (
            <Coffee
              // key={item.id} // eslintrc acikken <Coffee.../> tum satirlar kizariyor ama kod calisiyor.
              id={item.id}
              title={item.title}
              description={item.description}
              ingredients={item.ingredients}
              image={item.image}
            />
          );
        })}
      {route === "posts" &&
        postsList.isIdle &&
        postsList.data.map((item) => (
          <Post
          onDelete={() => handleDelete(item.id)}
            id={item.id}
            title={item.title}
            body={item.body}
            userId={item.userId}
          />
        ))}
    </>
  );
}

export default App;
