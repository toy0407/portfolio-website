"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-[1368px] flex items-center bg-green-500 mx-auto px-8 relative z-10"
    >
      <div className="flex-1">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4">
          Here is some background about my skills, experience, and interests.
        </p>
      </div>
      <div className="flex-1" />
    </section>
  );
}
