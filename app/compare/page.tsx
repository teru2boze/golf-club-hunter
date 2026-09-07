import Link from "next/link";

export const metadata = {
  title: "ゴルフクラブ ライバル比較 | ゴルフクラブハンター",
  description:
    "人気ドライバーを徹底比較。飛距離・やさしさ・操作性などから、あなたに合うゴルフクラブを見つけます。",
};

const comparisons = [
  {
    href: "/compare/g440-max-vs-zxi-max",
    title: "PING G440 MAX vs SRIXON ZXi MAX",
  },
  {
    href: "/compare/g440-max-vs-qi35-max",
    title: "PING G440 MAX vs TaylorMade Qi35 MAX",
  },
  {
    href: "/compare/g440-max-vs-quantum-max",
    title: "PING G440 MAX vs Callaway QUANTUM MAX",
  },
  {
    href: "/compare/g440-max-vs-gt2",
    title: "PING G440 MAX vs Titleist GT2",
  },
  {
    href: "/compare/g440-max-vs-elyte-x",
    title: "PING G440 MAX vs Callaway ELYTE X",
  },
  {
    href: "/compare/g440-max-vs-ds-adapt-max-k",
    title: "PING G440 MAX vs COBRA DS-ADAPT MAX-K",
  },
  {
    href: "/compare/g440-max-vs-g430-max-10k",
    title: "PING G440 MAX vs PING G430 MAX 10K",
  },
  {
    href: "/compare/g440-max-vs-g430-max",
    title: "PING G440 MAX vs PING G430 MAX",
  },
  {
    href: "/compare/g440-max-vs-qi4d",
    title: "PING G440 MAX vs TaylorMade Qi4D",
  },
  {
    href: "/compare/g430-max-10k-vs-quantum-max",
    title: "PING G430 MAX 10K vs Callaway QUANTUM MAX",
  },
  {
    href: "/compare/g430-max-10k-vs-qi35-max",
    title: "PING G430 MAX 10K vs TaylorMade Qi35 MAX",
  },
  {
    href: "/compare/g430-max-10k-vs-elyte-x",
    title: "PING G430 MAX 10K vs Callaway ELYTE X",
  },
  {
    href: "/compare/g430-max-vs-zxi-max",
    title: "PING G430 MAX vs SRIXON ZXi MAX",
  },
  {
    href: "/compare/g430-max-vs-qi35-max",
    title: "PING G430 MAX vs TaylorMade Qi35 MAX",
  },
  {
    href: "/compare/g430-max-vs-quantum-max",
    title: "PING G430 MAX vs Callaway QUANTUM MAX",
  },
  {
    href: "/compare/g430-max-vs-qi4d",
    title: "PING G430 MAX vs TaylorMade Qi4D",
  },
  {
    href: "/compare/qi4d-vs-qi35-max",
    title: "TaylorMade Qi4D vs Qi35 MAX",
  },
  {
    href: "/compare/qi4d-vs-quantum-max",
    title: "TaylorMade Qi4D vs Callaway QUANTUM MAX",
  },
  {
    href: "/compare/qi4d-vs-elyte-x",
    title: "TaylorMade Qi4D vs Callaway ELYTE X",
  },
  {
    href: "/compare/qi35-max-vs-quantum-max",
    title: "TaylorMade Qi35 MAX vs Callaway QUANTUM MAX",
  },
  {
    href: "/compare/qi35-max-vs-elyte-x",
    title: "TaylorMade Qi35 MAX vs Callaway ELYTE X",
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-5xl">⚔️</div>

          <h1 className="mt-4 text-3xl font-bold text-green-800">
            ゴルフクラブ ライバル比較
          </h1>

          <p className="mt-3 text-gray-600">
            迷っている2本を徹底比較。
            飛距離・やさしさ・操作性の違いをわかりやすく解説します。
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-green-200 bg-white p-5 shadow-sm transition hover:bg-green-50 hover:shadow-md"
            >
              <div className="text-sm font-bold text-green-600">
                ドライバー比較
              </div>

              <h2 className="mt-2 text-lg font-bold text-gray-800">
                {item.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                2本の違いを詳しく見る →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="font-bold text-green-700 hover:underline"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}