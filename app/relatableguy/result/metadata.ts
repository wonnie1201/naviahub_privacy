// app/marriageguy/result/metadata.ts
import { Metadata } from 'next';

// page.tsx의 RESULTS 및 PRAISES와 일관된 데이터 매핑
// generateMetadata는 서버에서 실행되므로, 클라이언트 컴포넌트의 useState나 localStorage에 접근할 수 없습니다.
// 따라서 메타데이터를 위한 별도의 데이터 소스를 가지거나, searchParams를 통해 정보를 받아와야 합니다.
const METADATA_RESULTS_MAP = [
  { type: "The Comedian", emoji: "🤣", percent: "Top 4%", praise: "Legendary! You're the rarest meme lord. Everyone wants you in their group chat" },
  { type: "The Rusher", emoji: "🚀", percent: "Top 10%", praise: "Certified MVP! You're the guy everyone screenshots for advice." },
  { type: "The Strategist", emoji: "🧠", percent: "Top 20%", praise: "Elite! Your meme game is strong. People wish they could be you." },
  { type: "The Observer", emoji: "👀", percent: "Top 30%", praise: "Not bad! But you're still lurking in the group chat, aren't you?" },
  { type: "The Simp", emoji: "🥲", percent: "Top 50%", praise: "Classic. You're the average meme enjoyer. Maybe try shooting your shot next time?" },
  { type: "The Ghost", emoji: "👻", percent: "Top 80%", praise: "Bruh… You're basically a ghost. Your friends are still waiting for your reply." },
];

// generateMetadata 함수에 전달될 props 타입 정의
type Props = {
  searchParams: { type?: string; percent?: string }; // URL 쿼리 파라미터를 받아옵니다.
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resultTypeFromParam = searchParams.type;
  const resultPercentFromParam = searchParams.percent;

  // URL 파라미터와 일치하는 결과 데이터를 찾습니다.
  const resultData = METADATA_RESULTS_MAP.find(
    r => r.type === resultTypeFromParam && r.percent === resultPercentFromParam
  );

  // 기본 메타데이터 값 (URL 파라미터가 없거나 일치하는 결과가 없을 경우)
  const defaultTitle = "Why Are You Still Single, Bro? 😂 ";
  const defaultDescription = "Your dating meme type has been revealed! Discover if you're a Comedian 🤣, a Rusher 🚀, or a Ghost 👻 — and share the laughs with friends.";
  const defaultUrl = "https://naviahub.dev/relatableguy/result";
  const defaultImage = "/undraw_love_qypu_1200x630.png"; // page.tsx의 JSON-LD에 있는 이미지 URL

  // 결과 데이터에 따라 동적으로 제목, 설명, URL 등을 설정합니다.
  const title = resultData ? `${resultData.type} ${resultData.emoji} | ${resultData.percent} Meme Dating Type 💀` : defaultTitle;
  const description = resultData ? resultData.praise : defaultDescription;
  // URL에 쿼리 파라미터를 포함하여 정규 URL(canonical URL)을 설정합니다.
  const canonicalUrl = resultData ? `https://naviahub.dev/relatableguy/result?type=${encodeURIComponent(resultData.type)}&percent=${encodeURIComponent(resultData.percent)}` : defaultUrl;
  
  // 만약 결과 유형별로 다른 공유 이미지가 있다면 여기서 imageUrl을 동적으로 설정합니다.
  // 예: const imageUrl = resultData ? `/images/results/${resultData.type.replace(/ /g, '-')}.png` : defaultImage;
  const imageUrl = defaultImage; // 현재는 기본 이미지를 사용합니다.

  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true, // 이 페이지를 검색 엔진이 색인하도록 허용합니다.
      follow: true, // 이 페이지의 링크를 따라가도록 허용합니다.
    },
    openGraph: { // 소셜 미디어 공유 시 미리보기에 사용될 정보
      title: title,
      description: description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: resultData ? `${resultData.type} Result` : "Meme Dating Results for Guys",
        },
      ],
      type: "website",
    },
  };
}