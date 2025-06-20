
import React, { useState, useEffect } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shrinkNav, setShrinkNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250); // 250px aşağı inince göster
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShrinkNav(window.scrollY > 60); // 60 pikselden fazla scroll varsa true yap
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Temizlik
  }, []);

  return (
    <div className="app-container">
      <header className={`navbar${shrinkNav ? ' shrinked' : ''}`}>
        <div className="logo">MFC</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#anamenu">Ana Menü</a></li>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="hero">
          <div className="hero-flex">
            <h1>Ben Fatih</h1>
            <img
              src="/ppimage.jpg"
              alt="Fatih Ceran Profil Fotoğrafı"
              className="hero-avatar-side"
            />
          </div>
          <p className="hero-desc">
            Teknoloji tutkunu bir&nbsp;
            <TypeAnimation
              sequence={[
                "backend developer",
                2000,
                "front-end developer",
                2000,
                "problem çözücü",
                2000
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </p>
        </div>

        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>
            <strong>Muhammet Fatih CERAN</strong><br />
            Ankara / Mamak<br />
          </p>

          <h3>🎓 Eğitim Bilgileri</h3>
          <p>
            <strong>Ankara Üniversitesi - Bilgisayar Programcılığı (2025 - 2026)</strong>
          </p>

          <h3>💻 Yazılım Dilleri ve Teknolojiler</h3>
          <ul>
            <li><strong>C#:</strong> Temel - Orta düzey</li>
            <li><strong>HTML & CSS:</strong> İleri düzey </li>
            <li><strong>JavaScript:</strong> Orta - İleri düzey</li>
            <li><strong>C++:</strong> Orta - İleri düzey</li>
            <li><strong>Assembly:</strong> Temel düzey</li>
            <li><strong>React:</strong> Orta düzey</li>
            <li><strong>Node.js:</strong> Temel backend bilgisi</li>
            <li><strong>jQuery:</strong> Temel</li>
            <li><strong>Yapay zeka ile verimlilik arttırma ve zaman tasarrufu:</strong> İleri düzey</li>
          </ul>

          <h3>🌍 Yabancı Dil</h3>
          <p>
            <strong>İngilizce:</strong><br />
            - Sözel: Akıcı ve anlaşılabilir seviyede<br />
            - Yazılı: Teknik makale ve doküman okuyabilecek seviyede
          </p>

          <h3>🔄 Kariyer Hedefi</h3>
          <p>
            Yeni teknolojilere ve öğrenmeye açık bir yazılımcı olarak farklı alanlarda çalışma ve tecrübe edinme isteğindeyim. Frontend, backend ya da yazılım test gibi alanlarda gelişim sağlamak amacıyla staj veya proje bazlı işlerde yer almak istiyorum.
          </p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-category">
            <h3>Büyük Projeler</h3>
            <ul className="project-list">
              <li className="project-card">
                Afterlife Bot – Kişilik tabanlı yapay zeka sohbet sistemi (maddi imkanlardan kaynaklı tamamlanamamıştır)
              </li>
              {/* Buraya başka büyük projelerin de eklenir */}
            </ul>
          </div>

          <div className="project-category">
            <h3>Küçük Projeler / Demo Çalışmaları</h3>
            <ul className="project-list">

              {/* Küçük başka örnekler ekle */}
            </ul>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Email: <a href="mailto:ceranfatih608@gmail.com">ceranfatih608@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/fatih-ceran-04890831b/">fatih-ceran</a></p>
        </section>
      </main>
      {
        showScrollTop && (
          <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ⬆️
          </button>
        )
      }
      <footer className="footer">
        <p>&copy; 2025 Muhammet Fatih CERAN. Tüm hakları saklıdır.</p>
      </footer>

    </div>

  );

};

export default App;
