"use client";

import Link from "next/link";
import Image from "next/image";

export default function Class() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src="/images/logo.png"
              alt="하링하링솝 로고"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">하링하링솝</span>
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/story" className="text-gray-700 hover:text-primary">
                Brand Story
              </Link>
            </li>
            <li>
              <Link href="/character" className="text-gray-700 hover:text-primary">
                Character
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-700 hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/class" className="text-primary font-semibold">
                Class
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-700 hover:text-primary">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            혼비 가이드
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            처음 비누를 만드는 분들도 쉽게 따라할 수 있도록
            <br />
            단계별 영상 가이드와 팁을 준비했습니다.
          </p>
        </div>
      </section>

      {/* Guide Videos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            단계별 가이드 영상
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                num: 1,
                title: "제품 준비 및 설명",
                duration: "5분",
                desc: "키트에 들어있는 모든 재료와 도구에 대해 설명합니다. 처음 사용하는 분들을 위해 친절하게 안내합니다.",
              },
              {
                num: 2,
                title: "안전 주의사항 & 준비",
                duration: "3분",
                desc: "비누 만들기 전 반드시 알아야 할 안전 주의사항과 작업 공간 준비 방법을 알려드립니다.",
              },
              {
                num: 3,
                title: "기본 제작 방법 (소행성 편)",
                duration: "15분",
                desc: "가장 인기 있는 소행성 편의 기본 제작 방법을 단계별로 설명합니다. 이 영상을 보면 누구나 만들 수 있어요!",
              },
              {
                num: 4,
                title: "색상 배치 및 디자인 팁",
                duration: "10분",
                desc: "더 예쁜 비누를 만드기 위한 색상 배치 팁과 디자인 아이디어를 소개합니다.",
              },
              {
                num: 5,
                title: "고급 기법 (토이비누 편)",
                duration: "18분",
                desc: "토이비누를 만드는 고급 기법을 배워봅시다. 난이도가 높지만 정말 예쁜 결과물을 만들 수 있습니다.",
              },
              {
                num: 6,
                title: "반짝이는 글리터 활용법",
                duration: "8분",
                desc: "글리터와 마이카를 활용해 반짝반짝한 프리미엄 비누를 만드는 방법입니다.",
              },
            ].map((video, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 flex items-center justify-center h-40">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🎬</div>
                    <p className="text-sm text-gray-600">{video.duration}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {video.num}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{video.desc}</p>
                  <Link
                    href="https://youtube.com"
                    className="text-primary font-semibold hover:text-accent flex items-center gap-2"
                  >
                    영상 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            하링하링솝만의 팁
          </h2>

          <div className="space-y-8">
            {[
              {
                emoji: "💡",
                title: "색상 배치의 기본 원칙",
                tips: [
                  "밝은 색은 아래에, 어두운 색은 위에 배치하면 입체감이 살아납니다.",
                  "3가지 이상의 색을 사용할 때는 명도 차이를 크게 하세요.",
                  "같은 톤의 색상으로 통일하면 고급스러운 느낌이 납니다.",
                ],
              },
              {
                emoji: "🎨",
                title: "기름의 온도 관리",
                tips: [
                  "기유는 실온에서 작업하세요. 너무 뜨거우면 색이 변할 수 있습니다.",
                  "겨울철에는 기유를 미지근한 손으로 잠시 데우면 작업하기 좋습니다.",
                  "하나의 색을 충분히 고정시킨 후 다음 색을 놓으면 색이 섞이지 않습니다.",
                ],
              },
              {
                emoji: "✨",
                title: "글리터와 마이카 활용",
                tips: [
                  "글리터는 마지막에 뿌리세요. 너무 일찍 뿌리면 가라앉을 수 있습니다.",
                  "글리터가 물에 녹지 않도록 기유에 먼저 섞은 후 놓으세요.",
                  "마이카 파우더는 소량만 사용해도 충분합니다. 많으면 너무 진해집니다.",
                ],
              },
              {
                emoji: "🎁",
                title: "보관 및 사용 방법",
                tips: [
                  "완성된 비누는 통풍이 잘 되는 곳에서 3일 이상 건조해야 합니다.",
                  "습한 환경에 보관하면 비누가 물러질 수 있으니 건조한 곳에 보관하세요.",
                  "사용할 때는 물기를 제거한 깨끗한 손이나 비누 거품망을 사용하세요.",
                ],
              },
              {
                emoji: "🧪",
                title: "안전한 재료 선택",
                tips: [
                  "모든 재료는 피부 테스트를 거친 천연 재료만 사용합니다.",
                  "향료는 천연 에센셜 오일 또는 천연 향료만을 사용합니다.",
                  "민감한 피부를 가진 아이도 안심하고 사용할 수 있습니다.",
                ],
              },
              {
                emoji: "🌟",
                title: "창의력 발휘하기",
                tips: [
                  "키트에 나온 색상 외에 다른 색상을 섞어도 좋습니다.",
                  "작은 도구로 무늬를 내면 더 독특한 디자인을 만들 수 있습니다.",
                  "가족 모두가 함께 만들면 서로 다른 개성 있는 비누가 나옵니다.",
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{section.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, tidx) => (
                    <li key={tidx} className="flex gap-3 text-gray-700">
                      <span className="text-primary font-bold mt-1">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            자주 묻는 질문
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "처음 비누를 만들어본 사람도 할 수 있나요?",
                a: "네! 완전 처음이신 분들을 위해 상세한 영상 가이드를 제공합니다. 소행성 편부터 시작하시면 누구나 충분히 만들 수 있습니다.",
              },
              {
                q: "만드는 데 정말 30분이 걸리나요?",
                a: "개인차가 있지만 영상 가이드를 따라가면 평균 30분 정도 걸립니다. 여러 번 만들다 보면 더 빨라집니다.",
              },
              {
                q: "아이가 사용해도 안전한가요?",
                a: "네, 모두 100% 천연 재료이며 화장품 제조업 정식 허가를 받은 안전한 제품입니다. 피부 민감한 아이도 사용할 수 있습니다.",
              },
              {
                q: "상품이 손상되어 도착했어요. 어떻게 하나요?",
                a: "구매 후 5일 이내에 문의해주시면 새 상품으로 교환해드립니다. 고객만족이 최우선입니다.",
              },
              {
                q: "반품/교환이 가능한가요?",
                a: "상품 특성상 수령 후 7일 이내, 미사용 상태여야 반품/교환이 가능합니다. 자세한 사항은 고객지원을 참고해주세요.",
              },
              {
                q: "대량 주문이나 기업 선물용으로 구매할 수 있나요?",
                a: "네, 가능합니다. 문의 페이지에서 연락 주시거나 카카오톡 채널로 말씀해주세요. 맞춤 서비스를 제공해드립니다.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition group"
              >
                <summary className="p-6 cursor-pointer flex justify-between items-center font-bold text-gray-900 hover:bg-gray-50">
                  <span className="flex items-center gap-3">
                    <span className="text-primary text-xl">Q.</span>
                    {item.q}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-700 border-t border-gray-200">
                  <p className="flex gap-3">
                    <span className="text-secondary text-lg shrink-0">A.</span>
                    <span>{item.a}</span>
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">가이드를 보고 따라해보세요</h2>
          <Link
            href="/products"
            className="inline-block bg-white text-secondary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            혼비 키트 주문하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">하링하링솝</h3>
              <p className="text-gray-400 text-sm">
                딸 하링이를 위해 만든 천연 수제비누 브랜드
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/story" className="text-gray-400 hover:text-white">
                    Brand Story
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">
                이메일: info@haringharing.com
              </p>
              <p className="text-gray-400 text-sm">카카오톡: @하링하링솝</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 하링하링솝. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
