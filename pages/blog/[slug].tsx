import React from "react";

interface BlogProps {
  params: { slug: string };
}

const BlogPost: React.FC<BlogProps> = ({ params }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
      <p>This is a dynamic blog post page for {params.slug}.</p>
    </div>
  );
};

export default BlogPost;
