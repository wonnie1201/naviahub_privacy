// app/marriageguy/result/metadata.ts
import { Metadata } from 'next';

// page.tsx의 RESULTS 및 PRAISES와 일관된 데이터 매핑
// generateMetadata는 서버에서 실행되므로, 클라이언트 컴포넌트의 useState나 localStorage에 접근할 수 없습니다.
// 따라서 메타데이터를 위한 별도의 데이터 소스를 가지거나, searchParams를 통해 정보를 받아와야 합니다.
const METADATA_RESULTS_MAP = [
  { type: "The Meme Priest", emoji: "🤣", percent: "Top 4%", praise: "You're the Meme Priest — holy vows, unholy memes. Everyone wants you to officiate their wedding (and run the group chat)." },
  { type: "The Speed-Groom", emoji: "🚀", percent: "Top 10%", praise: "Speed-Groom alert! You're halfway to the altar before anyone says 'I do'. Bold, fast, and probably forgot the guest list." },
  { type: "The Spreadsheet Fiancé", emoji: "🧠", percent: "Top 20%", praise: "Spreadsheet Fiancé — you've got color-coded budget tabs and honeymoon timelines. You scare and impress people equally." },
  { type: "The Chill Groomzilla", emoji: "😎", percent: "Top 30%", praise: "Chill Groomzilla — you're laid-back until the cake's wrong. A perfect balance of calm and chaos." },
  { type: "The Maybe Guy", emoji: "🤷‍♂️", percent: "Top 50%", praise: "The Maybe Guy. You're open to the idea… after a few more memes and emotional buffering." },
  { type: "The Escape Artist", emoji: "👻", percent: "Top 80%", praise: "Escape Artist: you're gone before the bouquet hits the ground. Your mom's been calling since 2022." },
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
  const defaultTitle = "Marriage Meme Test Results | Find Your Vibe";
  const defaultDescription = "Find out your hilarious wedding alter ego with this meme quiz for guys.";
  const defaultUrl = "https://naviahub.dev/marriageguy/result";
  const defaultImage = "https://naviahub.dev/undraw_wedding_qt3q_1200x630.png"; // page.tsx의 JSON-LD에 있는 이미지 URL

  // 결과 데이터에 따라 동적으로 제목, 설명, URL 등을 설정합니다.
  const title = resultData ? `${resultData.type} ${resultData.emoji} | ${resultData.percent} Meme Marriage Type 💀💍` : defaultTitle;
  const description = resultData ? resultData.praise : defaultDescription;
  // URL에 쿼리 파라미터를 포함하여 정규 URL(canonical URL)을 설정합니다.
  const canonicalUrl = resultData ? `https://naviahub.dev/marriageguy/result?type=${encodeURIComponent(resultData.type)}&percent=${encodeURIComponent(resultData.percent)}` : defaultUrl;
  
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
          alt: resultData ? `${resultData.type} Result` : "Marriage Meme Test Result",
        },
      ],
      type: "website",
    },
  };
}