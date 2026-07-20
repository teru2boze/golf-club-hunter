export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          広告・アフィリエイトについて
        </h1>

        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            ゴルフクラブハンターでは、Amazon、楽天市場、
            ゴルフ用品販売サイトなどの商品リンクを掲載しています。
          </p>

          <p>
            当サイトのリンクを経由して商品が購入された場合、
            当サイトが紹介料を受け取ることがあります。
          </p>

          <p>
            ただし、紹介料の有無によって商品評価や診断結果を
            意図的に変更することはありません。
          </p>

          <p>
            商品価格、在庫、サービス内容などの最新情報については、
            リンク先の販売サイトでご確認ください。
          </p>
        </div>
      </div>
    </main>
  );
}