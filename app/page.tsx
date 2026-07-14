"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img
              src="/haringharingsoap/images/logo.png"
              alt="하링하링솝 로고"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">하링하링솝</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex gap-8 absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0 border-gray-100`}
          >
            <li>
              <Link href="/story" className="text-gray-700 hover:text-primary">
                Brand Story
              </Link>
            </li>
            <li>
              <Link
                href="/character"
                className="text-gray-700 hover:text-primary"
              >
                Character
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-700 hover:text-primary"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/class" className="text-gray-700 hover:text-primary">
                Class
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-gray-700 hover:text-primary"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/haringharingsoap/images/logo.png"
              alt="하링하링솝 로고"
              className="w-44 h-44 rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            엄마의 마음으로 빚은,
            <br />
            우리 아이 첫 번째 놀이 비누
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            수제비누, 이제 집에서 <span className="text-primary font-bold">'혼비'</span>하세요.
            <br />
            딸 하링이를 위해 고른 정직한 재료만 담았습니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition"
            >
              베스트셀러 키트 보기
            </Link>
            <Link
              href="/story"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              하링하링솝의 이야기
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5만+</div>
              <p className="text-gray-700">누적 판매량</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">9천+</div>
              <p className="text-gray-700">소행성 편 선택</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">⭐ 4.9</div>
              <p className="text-gray-700">평균 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            베스트셀러 키트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "소행성 편",
                description: "가장 인기 있는 입문 키트",
                sold: "9,000명",
                emoji: "🌍",
              },
              {
                name: "토이비누 편",
                description: "재미있는 모양으로 만들기",
                sold: "5,500명",
                emoji: "🎀",
              },
              {
                name: "반짝이는 편",
                description: "글리터로 반짝반짝하게",
                sold: "4,200명",
                emoji: "✨",
              },
            ].map((kit, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{kit.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {kit.name}
                </h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                <div className="text-primary font-semibold mb-6">
                  {kit.sold} 선택
                </div>
                <Link
                  href="/products"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition"
                >
                  자세히 보기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 혼비란? */}
      <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            '혼비(혼자 재밌게 만드는 비누)'란?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                집에서 쉽게 시작
              </h3>
              <p className="text-gray-600">
                추가 장비 없이 우리가 준비한 키트로 바로 시작할 수 있습니다.
                복잡한 준비는 끝!
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                창의력 발휘하기
              </h3>
              <p className="text-gray-600">
                색상 선택부터 모양까지, 당신의 취향대로 만들어보세요.
                나만의 비누 탄생!
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">👨‍👧</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                아이와 함께하기
              </h3>
              <p className="text-gray-600">
                100% 천연 재료로 만들어 아이도 안심하고 사용할 수 있습니다.
                소중한 순간을 함께해요.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                감성 선물하기
              </h3>
              <p className="text-gray-600">
                내 손으로 만든 비누는 어떤 선물보다 소중합니다.
                마음을 담아 전해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            신뢰할 수 있는 이유
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  정식 허가 및 인증
                </h3>
                <p className="text-gray-600">
                  화장품 제조업·제조판매업 정식 허가를 받은 안전한 제품입니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  100% 천연 재료
                </h3>
                <p className="text-gray-600">
                  아이를 위해 고른 정직한 천연 재료만을 사용합니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  10년 차 전문성
                </h3>
                <p className="text-gray-600">
                  뷰티 전문가에서 엄마가 되어 만든 신뢰의 브랜드입니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  5만+ 구매자 검증
                </h3>
                <p className="text-gray-600">
                  누적 5만 개 이상 판매로 검증된 품질과 만족도입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 혼비를 시작해보세요
          </h2>
          <p className="text-lg mb-8 opacity-90">
            준비물은 하링하링솝이 다 챙겼어요. 당신은 '재미'만 챙기세요.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            베스트셀러 키트 주문하기
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
