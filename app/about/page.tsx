export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          運営者情報
        </h1>

        <div className="mt-6 space-y-6 leading-8 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-green-700">
              サイト名
            </h2>
            <p className="mt-2">
              ゴルフクラブハンター
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              運営目的
            </h2>
            <p className="mt-2">
              ゴルフクラブハンターは、ゴルファー一人ひとりに合った
              ゴルフクラブ選びをサポートすることを目的としたサイトです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              コンテンツについて
            </h2>
            <p className="mt-2">
              クラブの特徴、使いやすさ、飛距離性能、操作性などをもとに、
              診断や比較を通じてクラブ選びの参考になる情報を掲載しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              運営者
            </h2>
            <p className="mt-2">
              ゴルフクラブハンター運営事務局
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-green-700">
              お問い合わせ
            </h2>
            <p className="mt-2">
              お問い合わせ窓口は現在準備中です。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}