import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      {/* 頁面內容區塊 */}
      <div className="pt-32 md:pt-40 max-w-5xl mx-auto px-5">
        <section className="min-h-[380px] flex flex-col justify-center items-center text-center py-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            歡迎造訪富邦建設
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-xl">
            向下滾動查看 Header 動畫縮放與靠左吸附效果
          </p>
        </section>

        <section className="grid gap-6 pb-96">
          <Card className="h-52 flex items-center justify-center shadow-xs border-slate-200">
            <CardContent className="p-0 text-slate-700 font-medium text-lg">
              區塊內容 1
            </CardContent>
          </Card>
          <Card className="h-52 flex items-center justify-center shadow-xs border-slate-200">
            <CardContent className="p-0 text-slate-700 font-medium text-lg">
              區塊內容 2
            </CardContent>
          </Card>
          <Card className="h-52 flex items-center justify-center shadow-xs border-slate-200">
            <CardContent className="p-0 text-slate-700 font-medium text-lg">
              區塊內容 3
            </CardContent>
          </Card>
          <Card className="h-52 flex items-center justify-center shadow-xs border-slate-200">
            <CardContent className="p-0 text-slate-700 font-medium text-lg">
              區塊內容 4
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
