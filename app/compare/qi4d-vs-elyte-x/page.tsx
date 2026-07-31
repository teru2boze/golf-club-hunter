import Link from "next/link";
export const metadata = {
  title: "Qi4D vs QUANTUM MAX 比較｜どっちがおすすめ？",
  description:
    "TaylorMade Qi4DとCallaway QUANTUM MAXを飛距離・やさしさ・操作性で比較。どちらがおすすめかをわかりやすく解説します。",
};
export default function Qi4DvsQuantumMaxPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-green-800">
          TaylorMade Qi4D vs Callaway QUANTUM MAX
        </h1>

        <p className="mt-4 text-gray-700">
          最新ドライバーのQi4DとQUANTUM MAXを比較します。
          飛距離、やさしさ、操作性の違いから、どちらが自分に合うかを見ていきましょう。
        </p>
<div className="mt-6 grid grid-cols-2 gap-4">
  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
      src="/drivers/qi4d.jpg"
      alt="TaylorMade Qi4D"
      className="mx-auto h-48 w-full object-contain"
    />
    <p className="mt-2 font-bold">TaylorMade Qi4D</p>
  </div>

  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
      src="/drivers/quantum-max.avif"
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
            <h3 className="text-xl font-bold">Qi4Dがおすすめな人</h3>
            <p className="mt-2">
              飛距離を重視しながら、弾道を自分好みに調整したい人。
              操作性も求める中級者以上におすすめです。
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <h3 className="text-xl font-bold">QUANTUM MAXがおすすめな人</h3>
            <p className="mt-2">
              飛距離を伸ばしつつ、ミスへのやさしさも欲しい人。
              安定感を重視するゴルファーにおすすめです。
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold">性能比較</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border text-center">
            <thead>
              <tr>
                <th className="border p-3">比較項目</th>
                <th className="border p-3">Qi4D</th>
                <th className="border p-3">QUANTUM MAX</th>
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
            href="/club/10"
            className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white"
          >
            Qi4Dの詳細を見る
          </Link>

          <Link
            href="/club/11"
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