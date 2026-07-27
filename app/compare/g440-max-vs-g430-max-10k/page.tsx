import Link from "next/link";
export const metadata = {
  title: "PING G440 MAX vs G430 MAX 10K 比較｜どっちがおすすめ？",
description:
  "PING G440 MAXとG430 MAX 10Kを飛距離・やさしさ・操作性で比較。どちらがおすすめかをわかりやすく解説します。",
};
export default function Qi4DvsQuantumMaxPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-green-800">
  PING G440 MAX vs G430 MAX 10K
</h1>

        <p className="mt-4 text-gray-700">
  PING G440 MAXとG430 MAX 10Kの違いを徹底比較します。
飛距離・やさしさ・直進性・操作性を比べ、どちらがおすすめかをわかりやすく解説します。
</p>
<div className="mt-6 grid grid-cols-2 gap-4">
  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
      src="/drivers/ping-g440.jpg"
alt="PING G440 MAX"
      className="mx-auto h-48 w-full object-contain"
    />
    <p className="mt-2 font-bold">PING G440 MAX</p>
  </div>

  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
 src="/drivers/g430-max-10k.webp"
alt="PING G430 MAX 10K"
  className="mx-auto h-48 w-full object-contain"
/>
<p className="mt-2 font-bold">PING G430 MAX 10K</p>
  </div>
</div>
        <h2 className="mt-8 text-2xl font-bold">
          結論：どっちがおすすめ？
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">G440 MAXがおすすめな人</h3>
  <p className="mt-2">
    飛距離だけでなく、やさしさや安定感も重視したい人。
最新モデルを選びたい人や、G430シリーズからの買い替えを検討しているゴルファーにおすすめです。
  </p>
</div>

<div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">G430 MAX 10Kがおすすめな人</h3>
  <p className="mt-2">
    とにかく曲がりを抑えたい人や、ミスヒットへの強さを最優先したい人。
最新モデルにこだわらず、直進性と安心感を重視して選びたいゴルファーにおすすめです。
  </p>
</div>


        </div>

        <h2 className="mt-8 text-2xl font-bold">性能比較</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border text-center">
            <thead>
              <tr>
                <th className="border p-3">比較項目</th>
               <th className="border p-3">G440 MAX</th>
<th className="border p-3">G430 MAX 10K</th>
</tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">飛距離</td>
                <td className="border p-3">★★★★★</td>
                <td className="border p-3">★★★★★</td>
              </tr>
              <tr>
                <td className="border p-3">やさしさ</td>
                <td className="border p-3">★★★★☆</td>
                <td className="border p-3">★★★★☆</td>
              </tr>
              <tr>
  <td className="border p-3">直進性</td>
  <td className="border p-3">★★★★☆</td>
  <td className="border p-3">★★★★★</td>
</tr>
              <tr>
                <td className="border p-3">操作性</td>
                <td className="border p-3">★★★★★</td>
                <td className="border p-3">★★★★☆</td>
              </tr>
            </tbody>
          </table>
        </div>
<p className="mt-4 text-gray-700">
  迷ったら、最新モデルの総合力を重視するならG440 MAX、曲がりにくさと直進性を最優先するならG430 MAX 10Kがおすすめです。
</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/club/1"
            className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
          >
            PING G440 MAXの詳細を見る
          </Link>

          <Link
  href="/club/7"
  className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
>
  PING G430 MAX 10Kの詳細を見る
</Link>
        </div>

        <div className="mt-8">
          <Link href="/" className="font-bold text-green-700">
            ← ゴルフクラブ診断に戻る
          </Link>
        </div>
      
      <div className="mt-6">
  <p className="font-bold text-gray-800">関連記事</p>
  <Link
    href="/compare/g440-max-vs-g430-max"
    className="mt-2 inline-block text-green-700 underline"
  >
    PING G440 MAXとG430 MAXの違いを見る →
  </Link>
</div>
</div>
    </main>
  );
}