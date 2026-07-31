import Link from "next/link";
export const metadata = {
  title: "PING G440 MAX vs QUANTUM MAX  比較｜どっちがおすすめ？",
description:
  "PING G440 MAXとQUANTUM MAX を飛距離・やさしさ・操作性で比較。どちらがおすすめかをわかりやすく解説します。",
};
export default function QG440MaxVsQuantumMaxPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-green-800">
  PING G440 MAX vs QUANTUM MAX 
</h1>

        <p className="mt-4 text-gray-700">
  PING G440 MAXとQUANTUM MAX を比較します。
  飛距離、やさしさ、操作性の違いから、どちらが自分に合うかを見ていきます。
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
 src="/drivers/quantum-max.jpg"
alt="Callaway QUANTUM MAX"
  className="mx-auto h-48 w-full object-contain"
/>
<p className="mt-2 font-bold">Callaway QUANTUM MAX</p>
  </div>
</div>
        <h2 className="mt-8 text-2xl font-bold">
          結論：どっちがおすすめ？
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">G440 MAXがおすすめな人</h3>
  <p className="mt-2">
    直進性と安定感を重視したい人。ミスヒットに強く、やさしく曲がりを抑えたいゴルファーにおすすめです。
  </p>
</div>

<div className="rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold">QUANTUM MAX がおすすめな人</h3>
  <p className="mt-2">
    つかまりの良さと飛距離性能を重視したい人。スライスを抑えながら、しっかり飛ばしたいゴルファーにおすすめです。
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
<th className="border p-3">QUANTUM MAX </th>
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
                <td className="border p-3">★★★☆☆</td>
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
  href="/club/3"
  className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
>
  QUANTUM MAXの詳細を見る
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