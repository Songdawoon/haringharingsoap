"use client";

import Link from "next/link";
import Image from "next/image";

export default function Character() {
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
              <Link href="/character" className="text-primary font-semibold">
                Character
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-700 hover:text-primary">
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
          <div className="text-8xl mb-8">👧</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            매번 새롭게 변하는 하링의 세계
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            하링이는 단순한 캐릭터가 아닙니다.
            <br />
            매번 새로운 테마로 우리와 함께 성장하고, 다양한 모습으로 변신합니다.
          </p>
        </div>
      </section>

      {/* 하링의 특징 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            하링을 소개합니다
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center">
              <div className="text-7xl mb-8 text-center">🎀</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                하링의 매력
              </h3>
              <ul className="space-y-4">
                {[
                  "양갈래 머리가 트레이드마크인 귀여운 소녀",
                  "매번 새로운 테마의 옷으로 변신",
                  "선물하고 싶은 아이코닉한 디자인",
                  "아이와 어른 모두에게 사랑받는 캐릭터",
                  "하링하링솝만의 유니크한 아이덴티티",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-primary font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-4">🎨</div>
                <p className="text-gray-700 font-semibold">
                  매달 새로운 하링이 탄생합니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 테마별 하링들 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            테마별 하링의 변신
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🌍", theme: "소행성 편", desc: "우주를 탐험하는 하링" },
              { emoji: "🎀", theme: "토이비누 편", desc: "장난감이 된 하링" },
              { emoji: "✨", theme: "반짝이는 편", desc: "글리터처럼 반짝이는 하링" },
              { emoji: "🍭", theme: "롤리롤리 편", desc: "사탕처럼 달콤한 하링" },
              { emoji: "🌸", theme: "봄 특판", desc: "봄 꽃이 되는 하링" },
              { emoji: "❄️", theme: "겨울 특판", desc: "눈사람 하링" },
              { emoji: "🎄", theme: "크리스마스 편", desc: "산타 하링" },
              { emoji: "🐰", theme: "부활절 편", desc: "토끼 귀 하링" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg hover:border-primary transition"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.theme}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 하링 컬렉션 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            지금 만나볼 수 있는 하링들
          </h2>

          <div className="space-y-12">
            {[
              {
                num: 1,
                title: "하링 #1: 소행성 탐험가",
                image: "🌍",
                description:
                  "가장 먼저 선보인 하링으로, 아기자기한 소행성 위에서 웃고 있는 모습입니다. 우주를 탐험하는 모험심이 담겨있어 아이들에게 가장 인기 있습니다.",
              },
              {
                num: 2,
                title: "하링 #2: 장난감 친구",
                image: "🎀",
                description:
                  "토이비누처럼 귀여운 하링이 장난감이 되어 나타났습니다. 아이와 함께 가지고 놀 수 있는 형태로, 재미와 사용성을 모두 갖추었습니다.",
              },
              {
                num: 3,
                title: "하링 #3: 별의 요정",
                image: "✨",
                description:
                  "글리터와 반짝이로 꾸민 반짝반짝한 하링입니다. 마법 같은 느낌의 우아한 디자인으로 선물하기에 가장 좋습니다.",
              },
              {
                num: 4,
                title: "하링 #4: 롤리팝 요정",
                image: "🍭",
                description:
                  "롤리팝처럼 달콤하고 앙증맞게 꾸민 하링입니다. 정밀한 색상 배치로 한 번 만들면 감탄이 나올 정도의 아름다움을 자랑합니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 border border-gray-200">
                <div className="flex gap-8 items-center">
                  <div className="text-7xl shrink-0">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 하링과 함께 */}
      <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            하링과 함께하는 순간들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                emoji: "👨‍👧‍👦",
                title: "가족과 함께",
                desc: "엄마, 아빠, 아이가 함께 하링을 만들며 행복한 추억을 만들어요.",
              },
              {
                emoji: "🎁",
                title: "특별한 선물",
                desc: "친한 친구나 가족에게 주는 가장 센스 있는 선물이 되어줍니다.",
              },
              {
                emoji: "🎉",
                title: "생일 파티",
                desc: "생일 선물 세트로 충분히 자랑스러운 선택이 됩니다.",
              },
              {
                emoji: "🎨",
                title: "창의력 표현",
                desc: "나만의 색감으로 나만의 하링을 만들어보세요.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            하링과 함께 특별한 비누를 만들어보세요
          </h2>
          <Link
            href="/products"
            className="inline-block bg-white text-secondary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            하링 키트 보러 가기
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
