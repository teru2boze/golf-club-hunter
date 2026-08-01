import Link from "next/link";
export const metadata = {
  title: "2026年 初心者におすすめのドライバーランキングTOP5",
  description:
    "2026年版の初心者向けおすすめドライバーをランキング形式で紹介。飛距離・やさしさ・直進性・コスパを比較して、自分に合う1本が見つかります。",
};

export default function BeginnerDrivers2026Page() {
  const drivers = [
    {
      rank: "🥇",
      name: "PING G440 MAX",
      reason: "曲がりにくさ・直進性・やさしさのバランスが非常に優秀。",
      best: "スライスを減らしたい初心者",
    },
    {
      rank: "🥈",
      name: "TaylorMade Qi35 MAX",
      reason: "高弾道で飛ばしやすく、ミスヒットにも強い。",
      best: "とにかく飛距離が欲しい人",
    },
    {
      rank: "🥉",
      name: "Callaway ELYTE X",
      reason: "つかまりが良く、スライスしにくい。",
      best: "ボールが右へ曲がる人",
    },
    {
      rank: "4位",
      name: "Cobra DS-ADAPT MAX-K",
      reason: "高い寛容性で安定したショットが打ちやすい。",
      best: "安定感を重視する人",
    },
    {
      rank: "5位",
      name: "Titleist GT2",
      reason: "飛距離性能と打感を両立。",
      best: "長く使える1本が欲しい人",
    },
  ];

  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold text-green-800">
          2026年 初心者におすすめのドライバーランキングTOP5
        </h1>

        <p className="mt-4 text-gray-700">
          初心者でも曲がりにくく、飛ばしやすいドライバーを厳選しました。
          やさしさ・飛距離・直進性を重視してランキング化しています。
        </p>

        <div className="mt-8 space-y-6">
          {drivers.map((driver) => (
            <div
              key={driver.name}
              className="rounded-xl border bg-gray-50 p-6"
            >
              <h2 className="text-2xl font-bold">
                {driver.rank} {driver.name}
              </h2>

              <p className="mt-3">
                <strong>おすすめ理由：</strong>
                {driver.reason}
              </p>

              <p className="mt-2">
                <strong>こんな人におすすめ：</strong>
                {driver.best}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-3xl font-bold">
          初心者がドライバーを選ぶポイント
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>曲がりにくいモデルを選ぶ</li>
          <li>ヘッドが大きくミスに強いものを選ぶ</li>
          <li>10.5°前後のロフトがおすすめ</li>
          <li>軽めのシャフトを選ぶ</li>
        </ul>

   
    <h2 className="mt-10 text-3xl font-bold">
  人気比較ページ
</h2>

<ul className="mt-4 list-disc pl-6 space-y-2">
  <li><Link href="/compare/g440-max-vs-qi4d">PING G440 MAX vs Qi4D</Link></li>
  <li><Link href="/compare/g440-max-vs-qi35-max">PING G440 MAX vs Qi35 MAX</Link></li>
  <li><Link href="/compare/g440-max-vs-quantum-max">PING G440 MAX vs QUANTUM MAX</Link></li>
  <li><Link href="/compare/g440-max-vs-elyte-x">PING G440 MAX vs ELYTE X</Link></li>
  <li><Link href="/compare/g440-max-vs-zxi-max">PING G440 MAX vs ZXi MAX</Link></li>
  <li><Link href="/compare/g440-max-vs-gt2">PING G440 MAX vs GT2</Link></li>
</ul>
   </div>
    </main>
  );
}