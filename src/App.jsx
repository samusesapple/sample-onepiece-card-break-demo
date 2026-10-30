import { useEffect, useState } from "react";
import cardOne from "./assets/official-card-01.png";
import cardTwo from "./assets/official-card-02.png";
import cardThree from "./assets/official-card-03.png";
import cardFour from "./assets/official-card-04.png";

const breaks = [
  {
    id: "law",
    label: "OPK-14 SEA OF LEGENDS",
    name: "칠걸 프리미엄 브레이크",
    price: "32,000",
    slots: 8,
    total: 20,
    image: cardOne,
  },
  {
    id: "bege",
    label: "OPK-14 LIVE SELECT",
    name: "트레저 카드 셀렉트",
    price: "18,000",
    slots: 13,
    total: 30,
    image: cardTwo,
  },
  {
    id: "urouge",
    label: "OPK-14 NIGHT DROP",
    name: "미드나잇 히트 브레이크",
    price: "25,000",
    slots: 4,
    total: 16,
    image: cardThree,
  },
  {
    id: "cavendish",
    label: "OPK-14 LAST CALL",
    name: "라스트 찬스 셀렉션",
    price: "15,000",
    slots: 19,
    total: 40,
    image: cardFour,
  },
];

function ChevronRight() {
  return (
    <svg className="chevron-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m6 3 5 5-5 5" />
    </svg>
  );
}

export function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [remainingSlots, setRemainingSlots] = useState(() =>
    Object.fromEntries(breaks.map((item) => [item.id, item.slots])),
  );
  const [message, setMessage] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(18 * 60 + 42);

  useEffect(() => {
    const timer = window.setInterval(
      () => setSecondsLeft((current) => Math.max(current - 1, 0)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!message) return undefined;
    const timeout = window.setTimeout(() => setMessage(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [message]);

  const formattedTime = `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(secondsLeft % 60).padStart(2, "0")}`;
  const scrollToBreaks = () =>
    document
      .querySelector("#open-breaks")
      ?.scrollIntoView({ behavior: "smooth" });
  const addToCart = (item) => {
    if (!remainingSlots[item.id]) {
      setMessage("이 브레이크는 마감되었습니다.");
      return;
    }
    setRemainingSlots((current) => ({
      ...current,
      [item.id]: current[item.id] - 1,
    }));
    setCartCount((current) => current + 1);
    setMessage(`${item.name} 카드를 담았습니다.`);
  };

  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SAMPLE 홈">
          SAMPLE
        </a>
        <nav
          className={isMenuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="주요 메뉴"
        >
          <button type="button" onClick={scrollToBreaks}>
            LIVE BREAKS
          </button>
          <a href="#open-breaks">COLLECTION</a>
          <a href="#how-it-works">HOW IT WORKS</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="cart-button"
            onClick={() =>
              setMessage(
                cartCount
                  ? `장바구니에 ${cartCount}개의 상품이 있습니다.`
                  : "장바구니가 비어 있습니다.",
              )
            }
          >
            CART <b>{cartCount}</b>
          </button>
          <div className="user-menu">
            <button
              type="button"
              className="user-button"
              aria-label="사용자 메뉴"
              aria-expanded={isUserMenuOpen}
              onClick={() => setIsUserMenuOpen((current) => !current)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c.7-4.1 3.2-6.2 7.5-6.2s6.8 2.1 7.5 6.2" />
              </svg>
            </button>
            {isUserMenuOpen && (
              <div
                className="user-popover"
                role="dialog"
                aria-label="사용자 메뉴"
              >
                <b>WELCOME TO SAMPLE</b>
                <button type="button">마이페이지</button>
                <button type="button">로그인</button>
                <small>제안용 UI입니다.</small>
              </div>
            )}
          </div>
          <button
            type="button"
            className="menu-button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      <a className="promo-banner" href="#open-breaks">
        <span>NEW DROP</span>
        <b>OPK-14 LIVE BREAK NOW OPEN</b>
        <small>오늘 20:00 / LIMITED SLOTS</small>
        <i>
          VIEW BREAKS <ChevronRight />
        </i>
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span></span> LIVE CARD BREAK
          </p>
          <h1 id="hero-title">
            OPEN THE
            <br />
            UNSEEN.
          </h1>
          <p className="hero-description">
            실시간 개봉의 긴장감
            <br />
            히트 카드의 주인공이 되어보세요
          </p>
          <button
            type="button"
            className="primary-button"
            onClick={scrollToBreaks}
          >
            라이브 브레이크 보기 <ChevronRight />
          </button>
        </div>
        <div className="hero-cards" aria-label="공식 원피스 카드 샘플 이미지">
          <div className="burst"></div>
          {[cardOne, cardTwo, cardThree, cardFour].map((image, index) => (
            <img
              key={image}
              className={`hero-card hero-card-${index + 1}`}
              src={image}
              alt="공식 원피스 카드 샘플"
            />
          ))}
        </div>
        <aside className="live-panel" aria-label="현재 라이브 상태">
          <p>
            <span></span> ON AIR
          </p>
          <small>다음 브레이크 시작까지</small>
          <b>{formattedTime}</b>
          <div className="live-meta">
            <span>1,248 VIEWERS</span>
            <span>ROOM 021</span>
          </div>
        </aside>
        <p className="hero-note">SAMPLE / OFFICIAL CARD IMAGE BASED CONCEPT</p>
      </section>

      <section className="ticker" aria-label="서비스 안내">
        <div className="ticker-track">
          <div className="ticker-group">
            <span>LIVE BREAKS</span>
            <i>/</i>
            <span>REAL-TIME REVEALS</span>
            <i>/</i>
            <span>COLLECT THE MOMENT</span>
            <i>/</i>
            <span>LIVE BREAKS</span>
            <i>/</i>
          </div>
          <div className="ticker-group" aria-hidden="true">
            <span>LIVE BREAKS</span>
            <i>/</i>
            <span>REAL-TIME REVEALS</span>
            <i>/</i>
            <span>COLLECT THE MOMENT</span>
            <i>/</i>
            <span>LIVE BREAKS</span>
            <i>/</i>
          </div>
        </div>
      </section>

      <section
        className="open-breaks"
        id="open-breaks"
        aria-labelledby="breaks-title"
      >
        <div className="section-heading">
          <p>NOW OPEN</p>
          <h2 id="breaks-title">
            LIVE
            <br />
            BREAKS.
          </h2>
          <button
            type="button"
            onClick={() =>
              setMessage("진행 중인 브레이크 4개를 표시하고 있습니다.")
            }
          >
            모두 보기 <ChevronRight />
          </button>
        </div>
        <div className="break-grid">
          {breaks.map((item, index) => {
            const slots = remainingSlots[item.id];
            const filled = ((item.total - slots) / item.total) * 100;
            return (
              <article className="break-card" key={item.id}>
                <div className="card-visual">
                  <img
                    src={item.image}
                    alt={`${item.name}에 쓰인 공식 원피스 카드 샘플`}
                  />
                  <span>0{index + 1}</span>
                </div>
                <div className="break-detail">
                  <p>{item.label}</p>
                  <h3>{item.name}</h3>
                  <div className="slot-row">
                    <span>재고 현황</span>
                    <b>
                      {slots} / {item.total}
                    </b>
                  </div>
                  <div className="progress-track">
                    <i style={{ width: `${filled}%` }}></i>
                  </div>
                  <div className="purchase-row">
                    <strong>₩ {item.price}</strong>
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      disabled={!slots}
                    >
                      {slots ? (
                        <>
                          카드 담기 <ChevronRight />
                        </>
                      ) : (
                        "마감"
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="how-it-works"
        id="how-it-works"
        aria-labelledby="guide-title"
      >
        <p>HOW IT WORKS</p>
        <h2 id="guide-title">
          {/* 라이브 카드 오픈
          <br /> */}
          진행 방식
        </h2>
        <div className="step-grid">
          <div>
            <span>STEP 1</span>
            <b>브레이크 선택</b>
            <small>원하는 라이브와 상품을 고릅니다.</small>
          </div>
          <div>
            <span>STEP 2</span>
            <b>실시간 개봉</b>
            <small>라이브 화면에서 개봉을 지켜봅니다.</small>
          </div>
          <div>
            <span>STEP 3</span>
            <b>안전 배송</b>
            <small>라이브에서 개봉한 카드를 안전하게 발송합니다.</small>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          SAMPLE
        </a>
        <p>
          공식 카드 이미지 기반의 외주 제안용 SAMPLE 메인 화면입니다.
          <br />
          실제 판매·결제·재고·라이브 연동은 포함하지 않습니다.
        </p>
        <span>© SAMPLE CONCEPT</span>
      </footer>
      <a
        className="youtube-float"
        href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube에서 SAMPLE 보기"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.2 7.1a2.8 2.8 0 0 0-2-2C17.5 4.6 12 4.6 12 4.6s-5.5 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12a29 29 0 0 0 .5 4.9 2.8 2.8 0 0 0 2 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.9 29 29 0 0 0-.5-4.9ZM10 15.5V8.5l5.8 3.5-5.8 3.5Z" />
        </svg>
        <span>YOUTUBE</span>
      </a>
      <div className={message ? "toast is-visible" : "toast"} role="status">
        {message}
      </div>
    </main>
  );
}
