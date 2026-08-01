import Link from "next/link";
export const metadata = {
  title: "PING G440 MAX vs GT2  比較｜どっちがおすすめ？",
description:
  "PING G440 MAXとGT2 を飛距離・やさしさ・操作性で比較。どちらがおすすめかをわかりやすく解説します。",
};
export default function G440MaxVsGT2Page() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-green-800">
  PING G440 MAX vs GT2 
</h1>

        <p className="mt-4 text-gray-700">
  PING G440 MAXとGT2 を比較します。
  飛距離、やさしさ、操作性の違いから、どちらが自分に合うかを見ていきます。
</p>
<div className="mt-6 grid grid-cols-2 gap-4">
  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
      src="/drivers/gt2.avif"
alt="PING G440 MAX"
      className="mx-auto h-48 w-full object-contain"
    />
    <p className="mt-2 font-bold">PING G440 MAX</p>
  </div>

  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
 src="/drivers/GT2.jpg"
alt="Titleist GT2"
  className="mx-auto h-48 w-full object-contain"
/>
<p className="mt-2 font-bold">Titleist GT2</p>
  </div>
</div>
        <h2 className="mt-8 text-2xl font-bold">
          結論：どっちがおすすめ？
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">G440 MAXがおすすめな人</h3>
  <p className="mt-2">
    飛距離と安定性を両立したい人。
    最新モデルの性能を活かして、やさしく飛ばしたいゴルファーにおすすめです。
  </p>
</div>

<div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">GT2 がおすすめな人</h3>
  <p className="mt-2">
    飛距離をしっかり狙いながら、ミスヒットへの強さも重視したい人。
直進性とやさしさのバランスを求めるゴルファーにおすすめです。
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
<th className="border p-3">GT2 </th>
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
                <td className="border p-3">操作性</td>
                <td className="border p-3">★★★★★</td>
                <td className="border p-3">★★★★☆</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/club/1"
            className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
          >
            PING G440 MAXの詳細を見る
          </Link>

          <Link
  href="/club/2"
  className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
>
  GT2の詳細を見る
</Link>
        </div>

        <div className="mt-8">
          <Link href="/" className="font-bold text-green-700">
            ← ゴルフクラブ診断に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}