import axios from "axios";

const instance = axios.create({
  "baseURL":"https://jsonplaceholder.typicode.com" 
})

//axios sonrasi bu yapiya gerek kalmadi
// const baseUrl = "https://jsonplaceholder.typicode.com" 


export const index = () => instance.get("/posts")
// axios sonrasi try catche gerek kalmadi.instance...kullanildi. async silindi
// { 
//   try {
//     const res = await fetch(`${baseUrl}/posts`);
//     const json = await res.json();

//     console.log(res);

//     if (json.error) throw new Error(json.message);
//     return json;
//   } catch (error) {
//     throw error;
//   }
// }

export const create = (payload) => instance.post("/posts", payload);
// {
//   try {
//     const res = await fetch(`${baseUrl}/posts`, {
//     method: "post" ,
//     body: JSON.stringify(payload),
//   });

//     const json = await res.json();
//     if (json.error) throw new Error(json.message);
//     return json;
//   } catch (error) {
//     throw error;
//   }
// };

export const remove = async (id) => instance.delete(`/posts/${id}`);
// {
//   try{
//     const res = await fetch(`${baseUrl}/posts/${id}`, {
//     method: "delete", 
//     });
//     const json = await res.json();
//     if (json.error) throw new Error(json.message);
//     return json;
//   } catch (error) {
//     throw error;
// }
// };