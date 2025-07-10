import { Metadata } from 'next';

type Props = {
  params: { part: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const partParam = params.part; // URL에서 part 값을 가져옵니다.

  return {
    title: `Marriage Meme Test for Girls - Step ${partParam} | Discover Your Bridal Alter Ego`, // <title> 내용
    description: "Marriage Meme Test in progress! 💍 Answer brutally relatable questions and reveal your bridal meme energy soon. Are you a Pinterest Bride, Panic Queen, or Commitment Ghost? 😂", // <meta name="description"> 내용
    alternates: {
      canonical: `https://naviahub.dev/marriagegirl/test/${partParam}`, // <link rel="canonical"> 내용
    },
    robots: {
      index: true,
      follow: true,
    },
    // openGraph 등 필요한 다른 메타데이터도 여기에 추가할 수 있습니다.
  };
}