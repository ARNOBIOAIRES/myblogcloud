import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
 return (
  <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white
    ">
    <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-500 hover:underline">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm text-slate-400">
        {props.date}
      </p>
      <p>{props.subtitle}</p>
</div>
 )

}

export default PostPreview