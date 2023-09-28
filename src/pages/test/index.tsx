import FeedbackComponents from "@/components/feedback-components";
import { PrismaClient } from "@prisma/client";

export default function Home(props:any) {
  console.log(props)
  return <FeedbackComponents />;
}


export async function getStaticProps() {
  debugger
  const prisma = new PrismaClient();
  const feedbacks = await prisma.feedback.findMany({
    skip:1,
    take: 50,
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      feedbacks,
    },
  };
}