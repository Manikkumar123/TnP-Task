"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content }])

    if (error) {
      console.error(error)
      alert("Error creating post")
    } else {
      alert("Post created!")
      setTitle("")
      setContent("")
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">✍️ Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Enter post title..."
          className="w-full bg-white text-black border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div data-color-mode="light" className="bg-white rounded-lg border shadow">
          <MDEditor
            value={content}
            onChange={setContent}
            height={400}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-colors"
        >
          🚀 Publish Post
        </button>
      </form>
    </div>
  )
}
