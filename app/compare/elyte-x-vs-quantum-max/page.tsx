import Link from "next/link";
import ShopButtons from "@/components/ShopButtons";
export const metadata = {
  title: "Callaway ELYTE X vs QUANTUM MAX  比較｜どっちがおすすめ？",
description:
  "Callaway ELYTE XとQUANTUM MAX を飛距離・やさしさ・操作性で比較。どちらがおすすめかをわかりやすく解説します。",
};
export default function ElyteXVsQuantumMaxPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-green-800">
  Callaway ELYTE X vs QUANTUM MAX 
</h1>

        <p className="mt-4 text-gray-700">
  Callaway ELYTE XとQUANTUM MAX を比較します。
  飛距離、やさしさ、操作性の違いから、どちらが自分に合うかを見ていきます。
</p>
<div className="mt-6 grid grid-cols-2 gap-4">
  <div className="rounded-xl bg-gray-50 p-4 text-center">
    <img
      src="/drivers/elyte-x.avif"
alt="Callaway ELYTE X"
      className="mx-auto h-48 w-full object-contain"
    />
    <p className="mt-2 font-bold">Callaway ELYTE X</p>
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
  <h3 className="text-xl font-bold">Callaway ELEYTE Xがおすすめな人</h3>
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
               <th className="border p-3">Callaway ELEYTE X</th>
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

       <ShopButtons
  rakutenUrl="https://hb.afl.rakuten.co.jp/ichiba/560db221.a55c216e.560db222.00b73eb6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvictoriagolf%2F109041047014%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
/>
        <div className="mt-8">
          <Link href="/" className="font-bold text-green-700">
            ← ゴルフクラブ診断に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}