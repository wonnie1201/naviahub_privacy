import { Metadata } from 'next';

type Props = {
  params: { part: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const partParam = params.part; // URL에서 part 값을 가져옵니다.

  return {
    title: `Which Meme Girl Are You? 💖 Take the Ultimate Relatable Dating Test! - Step ${partParam}`, // <title> 내용
    description: "You're halfway through the 100% Relatable Meme Dating Test for Girls! Will you end up as the Overthinker 🤯, the Group Chat Queen 💅, or the Ghost 👻? Keep going!", // <meta name="description"> 내용
    alternates: {
      canonical: `https://naviahub.dev/relatablegirl/test/${partParam}`, // <link rel="canonical"> 내용
    },
    robots: {
      index: true,
      follow: true,
    },
    // openGraph 등 필요한 다른 메타데이터도 여기에 추가할 수 있습니다.
  };
}