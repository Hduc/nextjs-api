import TestComponent from "@/components/test";
import { PrismaClient } from "@prisma/client";

export default function Home(props:any) {

  return <div>
    Tesst
    <TestComponent />
  </div>;
}


export async function getStaticProps() {
  debugger
  const prisma = new PrismaClient();
  const feedbacks = [1,2,3,4,5,6]
  // await prisma.feedback.findMany({
  //   skip:0,
  //   take: 50,
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return {
    props: {
      feedbacks,
    },
  };
}