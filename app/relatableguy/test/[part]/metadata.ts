import { Metadata } from 'next';

type Props = {
  params: { part: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const partParam = params.part; // URL에서 part 값을 가져옵니다.

  return {
    title: `Why Are You Still Single, Bro? 😂 Meme Dating Test for Guys - Step ${partParam}`, // <title> 내용
    description: "Your dating meme type has been revealed! Discover if you're a Comedian 🤣, a Rusher 🚀, or a Ghost 👻 — and share the laughs with friends.", // <meta name="description"> 내용
    alternates: {
      canonical: `https://naviahub.dev/relatableguy/test/${partParam}`, // <link rel="canonical"> 내용
    },
    robots: {
      index: true,
      follow: true,
    },
    // openGraph 등 필요한 다른 메타데이터도 여기에 추가할 수 있습니다.
  };
}