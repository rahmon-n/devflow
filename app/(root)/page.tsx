import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: 1,
    title: "How to use React Router?",
    description:
      "I am trying to use React Router but I don't know how to use it.",
    tags: ["react", "router"],
    author: {
      _id: 1,
      name: "John Doe",
    },
    upvotes: 10,
    aswers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: 2,
    title: "How to use Next.js?",
    description: "I am trying to use Next.js but I don't know how to use it.",
    tags: ["nextjs"],
    author: {
      _id: 2,
      name: "Jane Doe",
    },
    upvotes: 20,
    aswers: 10,
    views: 200,
    createdAt: new Date(),
  },
];
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    return question.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      Home Filter
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <div
            key={question._id}
            className="bg-light800_darkgradient rounded-[10px] p-4"
          >
            <h2 className="h2-bold text-dark100_light900">{question.title}</h2>
            <p className="text-dark200_light800">{question.description}</p>
            <div className="flex gap-2">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-light800_dark200 bg-light800_dark100 rounded-[10px] px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <span>{question.author.name}</span>
              <span>{question.upvotes} upvotes</span>
              <span>{question.aswers} answers</span>
              <span>{question.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
