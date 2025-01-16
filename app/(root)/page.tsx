import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="text-4xl font-black">Hello Next js course</h1>
    </div>
  );
};

export default Home;
