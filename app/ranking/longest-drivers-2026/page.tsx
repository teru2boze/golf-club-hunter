import Link from "next/link";
export const metadata = {
  title: "2026年 飛距離が出るドライバーランキングTOP5",
  description:
    "2026年版の飛距離性能が高いドライバーをランキング形式で紹介。初速・強弾道・ミスへの強さを比較して、飛ばしたい人に合うモデルを選びます。",
};

export default function LongestDrivers2026Page() {
  const drivers = [
  {
    rank: "🥇",
    name: "TaylorMade Qi35 MAX",
    reason: "高初速と高弾道を出しやすく、ミスヒットでも飛距離を落としにくい。",
    best: "キャリーを伸ばしたい人",
  },
  {
    rank: "🥈",
    name: "PING G440 MAX",
    reason: "直進性が高く、安定して総飛距離を伸ばしやすい。",
    best: "曲がりを抑えながら飛ばしたい人",
  },
  {
    rank: "🥉",
    name: "Titleist GT2",
    reason: "強い弾道と打感を両立し、振り切ったときの飛距離性能が高い。",
    best: "操作性も欲しい中上級者",
  },
  {
    rank: "4位",
    name: "Callaway ELYTE X",
    reason: "つかまりが良く、右へのミスを抑えて飛距離につなげやすい。",
    best: "スライスで飛距離を損している人",
  },
  {
    rank: "5位",
    name: "Cobra DS-ADAPT MAX-K",
    reason: "寛容性が高く、芯を外しても飛距離が落ちにくい。",
    best: "安定した飛距離を求める人",
  },
];
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold text-green-800">
  2026年 飛距離が出るドライバーランキングTOP5
</h1>

<p className="mt-4 text-gray-700">
  飛距離性能を重視して、初速・強弾道・ミスへの強さを基準に厳選しました。
  キャリーを伸ばしたい人や、安定して遠くへ飛ばしたい人向けのランキングです。
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
  飛距離が出るドライバーを選ぶポイント
</h2>

<ul className="mt-4 list-disc pl-6 space-y-2">
  <li>ボール初速が出やすいモデルを選ぶ</li>
  <li>自分に合うロフト角を選ぶ</li>
  <li>振り切れる重さのシャフトを選ぶ</li>
  <li>ミスヒットでも飛距離が落ちにくいモデルを選ぶ</li>
</ul>

   
    <h2 className="mt-10 text-3xl font-bold">
  人気比較ページ
</h2>
<h2 className="mt-10 text-3xl font-bold">
  関連ランキング
</h2>

<div className="mt-4 grid gap-3 sm:grid-cols-2">
  <Link
    href="/ranking/beginner-drivers-2026"
    className="rounded-xl border bg-white p-4 font-bold hover:bg-green-50"
  >
    初心者向けランキング
  </Link>

  <Link
    href="/ranking/mid-handicap-drivers-2026"
    className="rounded-xl border bg-white p-4 font-bold hover:bg-green-50"
  >
    中級者向けランキング
  </Link>

  <Link
    href="/ranking/advanced-drivers-2026"
    className="rounded-xl border bg-white p-4 font-bold hover:bg-green-50"
  >
    上級者向けランキング
  </Link>

  <Link
    href="/ranking/longest-drivers-2026"
    className="rounded-xl border bg-white p-4 font-bold hover:bg-green-50"
  >
    飛距離ランキング
  </Link>
</div>
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