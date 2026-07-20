export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          プライバシーポリシー
        </h1>

        <div className="mt-6 space-y-6 leading-8 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-green-700">
              個人情報の取り扱い
            </h2>
            <p className="mt-2">
              ゴルフクラブハンターでは、お問い合わせなどを通じて取得した
              個人情報を、必要な範囲内で適切に管理します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              アクセス解析について
            </h2>
            <p className="mt-2">
              当サイトでは、サイト改善のためにGoogle Analyticsなどの
              アクセス解析サービスを利用する場合があります。
            </p>
            <p className="mt-2">
              これらのサービスではCookieを使用して利用状況を収集しますが、
              個人を直接特定する情報は含まれません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              広告について
            </h2>
            <p className="mt-2">
              当サイトでは、Amazon、楽天市場、その他の販売サイトへの
              アフィリエイトリンクを掲載しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              免責事項
            </h2>
            <p className="mt-2">
              当サイトに掲載する情報は、できる限り正確な内容を提供するよう
              努めていますが、内容の正確性や安全性を保証するものではありません。
            </p>
            <p className="mt-2">
              商品の購入やサービスの利用は、利用者ご自身の判断と責任で
              行ってください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              プライバシーポリシーの変更
            </h2>
            <p className="mt-2">
              当サイトは、必要に応じて本ポリシーの内容を変更する場合があります。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}