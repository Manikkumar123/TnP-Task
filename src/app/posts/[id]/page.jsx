"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setPost(data);

      setLoading(false);
    };

    if (id) fetchPost();
  }, [id]);

  if (loading) return <p className="p-8">Loading...</p>;

  if (!post) return <p className="p-8">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div className="prose prose-lg dark:prose-invert">
        {post.content}
      </div>
    </div>
  );
}
