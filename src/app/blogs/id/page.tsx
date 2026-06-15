// Next.js App Router note: if you drop this into app/blogs/[slug]/page.tsx,
// add `"use client"` as the very first line (it uses useState/useEffect
// for the reading progress bar and the code copy buttons), and swap the
// <a> tags for next/link's <Link> where they should be internal routes.

"use client";
import { useState, useEffect } from "react";
import {
    Clock,
    ArrowLeft,
    ArrowUpRight,
    Copy,
    Check,
    Github,
    Linkedin,
    Instagram,
    Twitter,
} from "lucide-react";

const POST = {
    tag: "Next.js",
    title: "Type-safe APIs in Next.js 14 with Server Actions and Zod",
    date: "Jun 02, 2026",
    readTime: "8 min",
    slug: "type-safe-apis-nextjs-zod",
    cover: "https://picsum.photos/seed/nextjs-zod/1200/600",
    tags: ["next.js", "typescript", "zod", "server-actions"],
};

const TOC = [
    { id: "the-problem", label: "The problem with duplicated validation" },
    { id: "shared-schema", label: "Defining a shared Zod schema" },
    { id: "server-action", label: "Using the schema in a server action" },
    { id: "client-form", label: "Wiring it up to the client form" },
    { id: "what-broke", label: "What broke the first time" },
    { id: "takeaways", label: "Takeaways" },
];

const RELATED_POSTS = [
    {
        id: 5,
        title: "TypeScript generics that actually earn their complexity",
        tag: "TypeScript",
        date: "Mar 22, 2026",
        readTime: "6 min",
        image: "https://picsum.photos/seed/ts-generics/640/400",
    },
    {
        id: 2,
        title: "JWT auth without the 2am debugging: refresh tokens in Express",
        tag: "Node.js",
        date: "May 18, 2026",
        readTime: "11 min",
        image: "https://picsum.photos/seed/jwt-express/640/400",
    },
    {
        id: 4,
        title: "Adding an AI assistant to a SaaS dashboard with the OpenAI API",
        tag: "AI",
        date: "Apr 09, 2026",
        readTime: "9 min",
        image: "https://picsum.photos/seed/ai-assistant/640/400",
    },
];

function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-[0.85em] accent-text">
            {children}
        </code>
    );
}

function CodeBlock({ filename, code }: { filename: string, code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            // clipboard unavailable in this environment
        }
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden my-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                <span className="font-mono text-xs text-zinc-500">{filename}</span>
                <button
                    onClick={handleCopy}
                    className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
                >
                    {copied ? <Check className="w-3.5 h-3.5 accent-text" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "copied" : "copy"}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-zinc-300">
                <code>{code}</code>
            </pre>
        </div>
    );
}

export default function BlogPostPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
            <style>{`
        html { scroll-behavior: smooth; }
        .accent-text { color: #5dcaa5; }
        .accent-bg-soft { background-color: rgba(93, 202, 165, 0.1); }
        .accent-border-soft { border-color: rgba(93, 202, 165, 0.4); }
        .hover-border-accent:hover { border-color: rgba(93, 202, 165, 0.4); }
        .group:hover .group-accent-text { color: #5dcaa5; }
        .cover-img { filter: grayscale(0.65); transition: filter 0.5s ease, transform 0.5s ease; }
        .group:hover .cover-img { filter: grayscale(0); transform: scale(1.04); }
      `}</style>

            {/* Reading progress bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-50">
                <div
                    className="h-full transition-[width] duration-150"
                    style={{ width: `${progress}%`, backgroundColor: "#5dcaa5" }}
                />
            </div>

            {/* Nav */}
            <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-zinc-800/60 max-w-6xl mx-auto">
                <a href="#" className="font-mono text-lg font-semibold tracking-tight">
                    <span className="accent-text">{"</"}</span>Sweet
                    <span className="accent-text">{">"}</span>
                </a>
                <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
                    <a href="#" className="hover:text-zinc-100 transition-colors">
                        home
                    </a>
                    <a href="#" className="hover:text-zinc-100 transition-colors">
                        projects
                    </a>
                    <a href="#" className="accent-text">
                        blogs
                    </a>
                    <a href="#" className="hover:text-zinc-100 transition-colors">
                        contact
                    </a>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    open to work
                </div>
            </nav>

            {/* Back link + header */}
            <header className="max-w-3xl mx-auto px-6 pt-10 pb-6">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors mb-8"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    back to blog.list()
                </a>

                <p className="font-mono text-sm accent-text mb-3">{`// post.read("${POST.slug}")`}</p>
                <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-400 mb-4">
                    {`[${POST.tag.toLowerCase()}]`}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                    {POST.title}
                </h1>

                <div className="flex items-center gap-4 text-sm font-mono text-zinc-500">
                    <div className="w-8 h-8 rounded-full accent-bg-soft flex items-center justify-center font-bold accent-text text-xs">
                        S
                    </div>
                    <span className="text-zinc-300">dev sweet</span>
                    <span>·</span>
                    <span>{POST.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {POST.readTime}
                    </span>
                </div>
            </header>

            {/* Cover image */}
            <div className="max-w-5xl mx-auto px-6 mb-12">
                <div className="rounded-xl overflow-hidden border border-zinc-800">
                    <img src={POST.cover} alt={POST.title} className="w-full aspect-[2/1] object-cover" />
                </div>
            </div>

            {/* Content + TOC */}
            <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
                <article className="max-w-2xl text-zinc-300 leading-relaxed">
                    <p className="text-lg text-zinc-200 mb-6 leading-relaxed">
                        Every form in this app used to have its validation logic written twice — once on the
                        client for instant feedback, and again on the server because you should never trust
                        the client. Keeping the two in sync was the kind of busywork that quietly eats an
                        afternoon every time a field changes. Here's how I collapsed both into a single Zod
                        schema using Next.js 14's Server Actions, and the handful of things that broke along
                        the way.
                    </p>

                    <h2 id="the-problem" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        The problem with duplicated validation
                    </h2>
                    <p className="mb-5">
                        The split made sense in theory. The client-side schema lived in a form component and
                        handled things like "this field is required" and "this needs to be a valid email."
                        The server-side schema lived in an API route and did the same checks again, plus a
                        few extra ones around things the client shouldn't be trusted with — uniqueness,
                        permissions, rate limits.
                    </p>
                    <p className="mb-5">
                        In practice, the two drifted. Someone would add a new constraint to the API
                        route — say, a maximum tag count — and forget to mirror it on the client. Users would
                        fill out a form, hit submit, and get an error the form itself never warned them
                        about. Nothing was broken exactly, but it felt sloppy.
                    </p>

                    <h2 id="shared-schema" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        Defining a shared Zod schema
                    </h2>
                    <p className="mb-5">
                        The fix was to stop treating validation as two separate concerns and write it once,
                        in a place both the client and server could import from.
                    </p>
                    <CodeBlock
                        filename="lib/validation/post.ts"
                        code={`import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and dashes"),
  content: z.string().min(20, "Content is too short"),
  tags: z.array(z.string()).max(5, "Pick up to 5 tags"),
});

export type PostInput = z.infer<typeof postSchema>;`}
                    />
                    <p className="mb-5">
                        The nice part isn't just that the rules live in one file — it's that{" "}
                        <InlineCode>z.infer</InlineCode> gives you a TypeScript type for free. The form's
                        props, the server action's input, and the database write all reference the same{" "}
                        <InlineCode>PostInput</InlineCode> type, so if the schema changes, TypeScript tells
                        you everywhere that needs updating.
                    </p>

                    <h2 id="server-action" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        Using the schema in a server action
                    </h2>
                    <p className="mb-5">
                        With the schema in place, the server action becomes mostly plumbing: parse the
                        incoming data, bail out with errors if it's invalid, otherwise write to the database.
                    </p>
                    <CodeBlock
                        filename="app/actions/create-post.ts"
                        code={`"use server";

import { postSchema } from "@/lib/validation/post";
import { db } from "@/lib/db";

export async function createPost(formData: FormData) {
  const raw = Object.fromEntries(formData);
  const parsed = postSchema.safeParse(raw);

  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  const post = await db.post.create({ data: parsed.data });
  return { ok: true, post };
}`}
                    />
                    <p className="mb-5">
                        The important bit here is <InlineCode>safeParse</InlineCode> instead of{" "}
                        <InlineCode>parse</InlineCode>. <InlineCode>parse</InlineCode> throws on invalid
                        input, which means a try/catch and some way to turn a thrown error into something a
                        form can display. <InlineCode>safeParse</InlineCode> returns a plain result object
                        instead, so the "invalid input" case is just a normal return value, not an exception.
                    </p>

                    <h2 id="client-form" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        Wiring it up to the client form
                    </h2>
                    <p className="mb-5">
                        On the client, the form doesn't need its own validation schema at all. It just needs
                        to render whatever errors come back from the action.
                    </p>
                    <CodeBlock
                        filename="app/new-post/page.tsx"
                        code={`"use client";

import { useFormState } from "react-dom";
import { createPost } from "@/app/actions/create-post";

const initialState = { ok: false, errors: {} };

export default function NewPostForm() {
  const [state, formAction] = useFormState(createPost, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input name="title" placeholder="Title" />
        {state.errors?.title && (
          <p className="text-red-400 text-sm">{state.errors.title[0]}</p>
        )}
      </div>

      <div>
        <textarea name="content" placeholder="Write something..." />
        {state.errors?.content && (
          <p className="text-red-400 text-sm">{state.errors.content[0]}</p>
        )}
      </div>

      <button type="submit">Publish</button>
    </form>
  );
}`}
                    />
                    <p className="mb-5">
                        That's the whole win, really. The client form has zero validation logic of its own —
                        nothing duplicated, nothing to keep in sync. If a field's constraints change, you
                        edit one file, and both the inferred type and the error messages update everywhere.
                    </p>

                    <h2 id="what-broke" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        What broke the first time
                    </h2>
                    <p className="mb-5">
                        None of this worked perfectly on the first try. Three things tripped me up:
                    </p>
                    <ul className="space-y-4 mb-6">
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <strong className="text-zinc-100">FormData values are always strings.</strong> A
                                field defined as <InlineCode>z.number()</InlineCode> fails validation on a
                                perfectly reasonable input like <InlineCode>"42"</InlineCode>, because it's a
                                string, not a number. The fix is <InlineCode>z.coerce.number()</InlineCode> (or{" "}
                                <InlineCode>z.coerce.boolean()</InlineCode>,{" "}
                                <InlineCode>z.coerce.date()</InlineCode>) wherever the value is coming from a
                                form.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <strong className="text-zinc-100">File inputs don't show up the way you'd expect.</strong>{" "}
                                <InlineCode>Object.fromEntries(formData)</InlineCode> only keeps the last value
                                for a given key, and <InlineCode>File</InlineCode> objects pass straight through{" "}
                                <InlineCode>safeParse</InlineCode> rather than being validated — they need to be
                                pulled out separately with <InlineCode>formData.getAll("files")</InlineCode>.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <strong className="text-zinc-100">Returning errors only helps if the form is listening.</strong>{" "}
                                Without <InlineCode>useFormState</InlineCode> (or{" "}
                                <InlineCode>useActionState</InlineCode> in newer React versions), the action runs,
                                the errors come back, and the form just sits there, looking unchanged.
                            </span>
                        </li>
                    </ul>

                    <h2 id="takeaways" className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">
                        <span className="accent-text font-mono mr-2">##</span>
                        Takeaways
                    </h2>
                    <ul className="space-y-4 mb-6">
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <strong className="text-zinc-100">One schema, two environments.</strong> Write the
                                rules once, infer the TypeScript type from them, and let both the form and the
                                server agree on what "valid" means.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <InlineCode>safeParse</InlineCode> over <InlineCode>parse</InlineCode> in anything
                                that returns state to a UI — validation failures should be data you render, not
                                exceptions you catch.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="accent-text font-mono mt-1 shrink-0">→</span>
                            <span>
                                <strong className="text-zinc-100">Server Actions remove an entire API route.</strong>{" "}
                                For most CRUD forms, there's no longer a meaningful difference between "the
                                endpoint" and "the function the form calls."
                            </span>
                        </li>
                    </ul>

                    <p className="mb-5">
                        If I'm starting a new Next.js project today, this is the first thing I set up —
                        before auth, before the database schema, before anything else. Everything downstream
                        gets easier when the validation rules and the types are the same file.
                    </p>
                </article>

                {/* Table of contents */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <p className="font-mono text-xs text-zinc-500 mb-4">// on this page</p>
                        <nav className="space-y-3 text-sm">
                            {TOC.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block text-zinc-500 hover:text-zinc-100 transition-colors leading-snug"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>

            {/* Tags */}
            <div className="max-w-3xl mx-auto px-6 mt-6 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-zinc-500 mr-1">tags:</span>
                {POST.tags.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 rounded-md text-xs font-mono border border-zinc-800 text-zinc-400"
                    >
                        {`#${t}`}
                    </span>
                ))}
            </div>

            {/* Author card */}
            <div className="max-w-3xl mx-auto px-6 mt-10">
                <div className="flex items-start gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                    <div className="w-12 h-12 rounded-full accent-bg-soft flex items-center justify-center font-mono font-bold text-lg accent-text shrink-0">
                        S
                    </div>
                    <div>
                        <p className="font-semibold text-zinc-100 mb-1">Written by dev sweet</p>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Full-stack developer working mostly in the Next.js / Node / MongoDB stack. Writes
                            about the stuff that took longer to figure out than it should have.
                        </p>
                    </div>
                </div>
            </div>

            {/* Related posts */}
            <section className="max-w-5xl mx-auto px-6 mt-16 mb-16">
                <p className="font-mono text-xs text-zinc-500 mb-5">// related posts</p>
                <div className="grid md:grid-cols-3 gap-5">
                    {RELATED_POSTS.map((post) => (
                        <a
                            key={post.id}
                            href="#"
                            className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent hover:-translate-y-1 transition-all overflow-hidden"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img src={post.image} alt={post.title} className="cover-img w-full h-full object-cover" />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <span className="font-mono text-xs text-zinc-500 mb-3">{`[${post.tag.toLowerCase()}]`}</span>
                                <h3 className="text-sm font-semibold mb-3 leading-snug group-accent-text transition-colors">
                                    {post.title}
                                </h3>
                                <div className="mt-auto flex items-center justify-between text-xs font-mono text-zinc-500">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-800/60">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-zinc-500">
                        <a href="#" className="hover:text-zinc-200 transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-zinc-200 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-zinc-200 transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-zinc-200 transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="flex items-center gap-6 text-sm font-mono text-zinc-400">
                        <a href="#" className="hover:text-zinc-100 transition-colors">
                            home
                        </a>
                        <a href="#" className="hover:text-zinc-100 transition-colors">
                            projects
                        </a>
                        <a href="#" className="accent-text">
                            blogs
                        </a>
                        <a href="#" className="hover:text-zinc-100 transition-colors">
                            contact
                        </a>
                    </div>
                    <p className="text-xs text-zinc-600 font-mono">© 2026 dev sweet. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}