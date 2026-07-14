"use client";

import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const kits = [
    {
      id: 1,
      name: "소행성 편",
      emoji: "🌍",
      price: "28,000",
      sold: "9,000명",
      description: "가장 인기 있는 입문 키트. 가장 추천하는 상품입니다.",
      features: [
        "천연 기유 3종",
        "천연 색소 4가지",
        "소행성 모양 도구",
        "상세한 영상 가이드",
        "아이코닉한 패키지",
      ],
      difficulty: "★★☆☆☆",
      time: "약 30분",
    },
    {
      id: 2,
      name: "토이비누 편",
      emoji: "🎀",
      price: "32,000",
      sold: "5,500명",
      description: "아이가 장난감처럼 가지고 노는 귀여운 미니 비누들",
      features: [
        "천연 기유 4종",
        "천연 향료 3가지",
        "미니 틀 5개",
        "컬러 배치 가이드",
        "선물용 상자 포함",
      ],
      difficulty: "★★★☆☆",
      time: "약 45분",
    },
    {
      id: 3,
      name: "반짝이는 편",
      emoji: "✨",
      price: "35,000",
      sold: "4,200명",
      description: "글리터와 반짝이로 우아함을 더한 프리미엄 키트",
      features: [
        "천연 기유 5종",
        "글리터 & 마이카",
        "프리미엄 색소",
        "천연 향료 5가지",
        "정밀한 층 쌓기 도구",
      ],
      difficulty: "★★★★☆",
      time: "약 60분",
    },
    {
      id: 4,
      name: "롤리롤리 편",
      emoji: "🍭",
      price: "38,000",
      sold: "2,800명",
      description: "롤리팝처럼 달콤하게 색상을 섞어 만드는 최상급 키트",
      features: [
        "천연 기유 6종",
        "프리미엄 색소 8가지",
        "천연 향료 6가지",
        "마스터 마스터 도구",
        "심화 영상 가이드",
        "디자인 아이디어 북",
      ],
      difficulty: "★★★★★",
      time: "약 90분",
    },
  ];

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
              <Link href="/products" className="text-primary font-semibold">
                Products
              </Link>
            </li>
            <li>
              <Link href="/class" className="text-gray-700 hover:text-primary">
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
            우리의 혼비 키트
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            당신의 취향과 난이도에 맞는 키트를 선택해보세요.
            <br />
            준비물은 하링하링솝이 다 챙겼어요.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {kits.map((kit, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Product Header */}
                <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 text-center">
                  <div className="text-6xl mb-4">{kit.emoji}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {kit.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{kit.description}</p>
                  <div className="text-primary font-bold text-lg mb-2">
                    {kit.price}원
                  </div>
                  <div className="text-sm text-gray-600">
                    누적 {kit.sold} 선택
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      📦 구성품
                    </h3>
                    <ul className="space-y-2">
                      {kit.features.map((feature, fidx) => (
                        <li key={fidx} className="text-gray-700 text-sm flex gap-2">
                          <span className="text-primary">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-t border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">난이도</p>
                      <p className="font-bold text-gray-900">
                        {kit.difficulty}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">제작 시간</p>
                      <p className="font-bold text-gray-900">{kit.time}</p>
                    </div>
                  </div>

                  <Link
                    href="https://smartstore.naver.com/haringharing"
                    target="_blank"
                    className="w-full block text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-accent transition"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              키트 비교하기
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="text-left p-4 font-bold text-gray-900">
                      항목
                    </th>
                    {kits.map((kit, idx) => (
                      <th key={idx} className="text-center p-4 font-bold">
                        <div className="text-3xl mb-2">{kit.emoji}</div>
                        <div className="text-sm">{kit.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "가격",
                      values: kits.map((k) => k.price + "원"),
                    },
                    {
                      label: "난이도",
                      values: kits.map((k) => k.difficulty),
                    },
                    {
                      label: "제작 시간",
                      values: kits.map((k) => k.time),
                    },
                    {
                      label: "추천 대상",
                      values: [
                        "입문자",
                        "창의력 발휘",
                        "프리미엄 경험",
                        "마스터",
                      ],
                    },
                  ].map((row, ridx) => (
                    <tr
                      key={ridx}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4 font-bold text-gray-900 bg-gray-50">
                        {row.label}
                      </td>
                      {row.values.map((value, vidx) => (
                        <td
                          key={vidx}
                          className="text-center p-4 text-gray-700"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            왜 하링하링솝의 키트를 선택할까?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                emoji: "🧪",
                title: "과학적으로 검증됨",
                desc: "화장품 제조업 정식 허가를 받은 안전한 성분만 사용합니다.",
              },
              {
                emoji: "🌱",
                title: "100% 천연 재료",
                desc: "우리 아이에게 줄 수 있는 가장 순수한 재료만 선택했습니다.",
              },
              {
                emoji: "📹",
                title: "상세한 영상 가이드",
                desc: "처음 하는 사람도 쉽게 따라할 수 있는 친절한 영상 가이드를 제공합니다.",
              },
              {
                emoji: "🎁",
                title: "프리미엄 패키징",
                desc: "받는 사람이 행복해지는 아이코닉한 디자인의 패키지입니다.",
              },
              {
                emoji: "👩‍💼",
                title: "전문가 노하우",
                desc: "10년 차 뷰티 전문가의 지식이 모든 제품에 담겨있습니다.",
              },
              {
                emoji: "⭐",
                title: "검증된 품질",
                desc: "5만 개 이상의 판매로 증명된 고객 만족도입니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 주문하기</h2>
          <Link
            href="https://smartstore.naver.com/haringharing"
            target="_blank"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            스마트스토어에서 보기 →
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
