interface PostsProps {
  params: { id: string };
  searchParams: {};
}

export default function Posts(props: PostsProps) {
  console.log(props);

  return <div>123</div>;
}
