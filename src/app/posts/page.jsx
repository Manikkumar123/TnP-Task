"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data, error } = await supabase
        .from("posts")
        .select("id, title, created_at")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <div key={post.id} className="border-b py-2">
          <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
            {post.title}
          </Link>
          <p className="text-gray-500 text-sm">
            {new Date(post.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
