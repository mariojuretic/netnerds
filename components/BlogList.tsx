type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  console.log("POSTS =====>", posts);

  return <div>BlogList</div>;
}
