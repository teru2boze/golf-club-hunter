type ShopButtonsProps = {
  amazonUrl?: string;
  rakutenUrl?: string;
  yahooUrl?: string;
};

export default function ShopButtons({
  amazonUrl = "#",
rakutenUrl = "#",
  yahooUrl = "#",
}: ShopButtonsProps) {
  return (
    <div className="mt-8 rounded-2xl bg-yellow-50 p-6">
      <h2 className="text-2xl font-bold">最新価格をチェック</h2>

      <p className="mt-2 text-gray-700">
        在庫や価格はショップによって変わります。購入前に最新価格を確認してください。
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <a
          href={amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="rounded-xl bg-orange-500 px-5 py-4 text-center font-bold text-white"
        >
          Amazonで見る
        </a>

        <a
          href={rakutenUrl}
          rel="nofollow sponsored"
          className="rounded-xl bg-red-600 px-5 py-4 text-center font-bold text-white"
        >
          楽天市場で見る
        </a>

        <a
          href={yahooUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white"
        >
          Yahoo!ショッピングで見る
        </a>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        ※本ページには広告・アフィリエイトリンクが含まれます。
      </p>
    </div>
  );
}