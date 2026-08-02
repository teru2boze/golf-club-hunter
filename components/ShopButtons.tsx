type ShopButtonsProps = {
  amazonUrl?: string;
  rakutenUrl?: string;
  yahooUrl?: string;
};

export default function ShopButtons({
  amazonUrl = "#",
rakutenUrl ="https://hb.afl.rakuten.co.jp/ichiba/560d8eec.c926c847.560d8eed.3a3a3391/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjopro%2F010127070150061%2F&link_type=text&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJ0ZXh0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
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
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
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