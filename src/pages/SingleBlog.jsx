import { useParams } from "react-router-dom";
import {data} from "../data/blog.jsx";

export default function SingleBlog() {
  const { id } = useParams();

  return (
    <div>
      <h2>{data.blog[id].title}</h2>
      <p>{data.blog[id].description}</p>
      <img src={data.blog[id].image} alt="img" />
    </div>
  );
}
