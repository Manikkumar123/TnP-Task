"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const PostCard = ({id, title, description, date, importance, image }) => {
  return (
    <Link href={`/posts/${id}`} passHref>
    <div className="post-card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 max-w-sm opacity-0 translate-y-10">
      {image && (
        <div className="w-full h-48 relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-5">
        <p className="text-sm text-gray-500">{date}</p>
        <h2 className="text-lg font-bold mt-1">{title}</h2>
        <p className="text-gray-700 mt-2 text-sm">{description}</p>
        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
            importance === "High"
              ? "bg-red-100 text-red-600"
              : importance === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {importance} Importance
        </span>
      </div>
    </div>
    </Link>
  );
};

const allPosts = [
  {
    id:'1',
    title: "Campus Recruitment Drive 2025",
    description: "Leading companies are visiting campus for recruitment. Register before Sept 20th.",
    date: "Sept 13, 2025",
    importance: "High",
    image: "/images/req.webp",
  },
  {
    id:'3',
    title: "Workshop on AI & ML",
    description: "Join us for an intensive hands-on workshop on Artificial Intelligence and Machine Learning.",
    date: "Sept 18, 2025",
    importance: "Medium",
    image: "/images/Post_2.webp",
  },
  {
    id:'4',
    title: "Holiday Announcement",
    description: "The college will remain closed on Sept 25th for a national holiday.",
    date: "Sept 25, 2025",
    importance: "Low",
    image: "/images/holiday.webp",
  },
  {
    id:'5',
    title: "New Internship Opportunity",
    description: "A new internship opportunity has been posted on the portal.",
    date: "Sept 20, 2025",
    importance: "High",
    image: "/images/Post_4.webp",
  },
  {
    id:'6',
    title: "Guest Lecture on Blockchain",
    description: "Dr. Smith will be giving a talk on the future of blockchain technology.",
    date: "Oct 01, 2025",
    importance: "Medium",
    image: "/images/Post_5.webp",
  },
  {
    id:'7',
    title: "Football Team Tryouts",
    description: "Tryouts for the college football team will be held next week.",
    date: "Sept 28, 2025",
    importance: "Low",
    image: "/images/Post_6.webp",
  },
  {
    id:'8',
    title: "Hackathon 2025 Registration",
    description: "Register for the annual college hackathon, happening next month.",
    date: "Oct 05, 2025",
    importance: "High",
    image: "/images/Post_7.webp",
  },
  {
    id:'9',
    title: "Placement Cell Meeting",
    description: "All final year students are requested to attend a meeting with the placement officer.",
    date: "Oct 10, 2025",
    importance: "Medium",
    image: "/images/Post_8.webp",
  },
];

const Posts = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 3;
  const loadCountRef = useRef(1);

  const filteredAndSearchedData = allPosts.filter((post) => {
    const matchesFilter = filter === "All" || post.importance === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const loadMorePosts = () => {
    const startIndex = (loadCountRef.current - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const newPosts = filteredAndSearchedData.slice(startIndex, endIndex);
    setVisiblePosts((prevPosts) => [...prevPosts, ...newPosts]);
    loadCountRef.current = loadCountRef.current + 1;
    setHasMore(visiblePosts.length + newPosts.length < filteredAndSearchedData.length);
  };

  useEffect(() => {
    setVisiblePosts([]);
    loadCountRef.current = 1;
    loadMorePosts();
  }, [filter, searchQuery]);

  useGSAP(() => {
    gsap.fromTo(
      ".post-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 90%",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, [visiblePosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );
    const triggerElement = document.getElementById("scroll-trigger");
    if (triggerElement) {
      observer.observe(triggerElement);
    }
    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [hasMore, filter, searchQuery]);

  return (
    <>
    <section ref={sectionRef} className="bg-[#e3d3bc] py-16 relative -top-2 overflow-hidden">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          Latest News & Announcements
        </h1>
        <div className="mb-8 flex flex-col items-center">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full max-w-lg px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex justify-center space-x-4">
            {["All", "High", "Medium", "Low"].map((importance) => (
              <button
                key={importance}
                onClick={() => setFilter(importance)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  filter === importance
                    ? "bg-[#7f3b2d] text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {importance}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <PostCard key={index} id={post.id} {...post} />
          ))}
        </div>
        {hasMore && (
          <div id="scroll-trigger" className="h-1 bg-transparent"></div>
        )}
      </div>
    </section>
    </>
  );
};

export default Posts;