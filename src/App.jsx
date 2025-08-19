
import React, { useState, useEffect } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shrinkNav, setShrinkNav] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    document.body.className = theme;
    setMobileMenuOpen(false); // Tema değiştiğinde menüyü kapat
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  // Mobil menü açıkken body scroll'unu engelle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className={`app-container ${currentTheme}`}>
      {/* Tema Değiştirici Panel */}
      <div className="theme-switcher">
        <h4>Tasarımlar</h4>
        <button 
          className={`theme-btn ${currentTheme === 'theme1' ? 'active' : ''}`}
          onClick={() => changeTheme('theme1')}
        >
          Tasarım 1
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'theme2' ? 'active' : ''}`}
          onClick={() => changeTheme('theme2')}
        >
          Tasarım 2
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'theme3' ? 'active' : ''}`}
          onClick={() => changeTheme('theme3')}
        >
          Tasarım 3
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'theme4' ? 'active' : ''}`}
          onClick={() => changeTheme('theme4')}
        >
          Tasarım 4
        </button>
        <button 
          className={`theme-btn ${currentTheme === 'theme5' ? 'active' : ''}`}
          onClick={() => changeTheme('theme5')}
        >
          Tasarım 5
        </button>
      </div>

      <header className={`navbar${shrinkNav ? ' shrinked' : ''}`}>
        <div className="logo">MFC</div>
        
        {/* Mobil Menü Butonu */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className="arrow">→</span>
        </button>
        
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#anamenu">Ana Menü</a></li>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Mobil Menü Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Menü</h3>
              <button className="close-btn" onClick={closeMobileMenu}>×</button>
            </div>
            <nav className="mobile-nav">
              <ul>
                <li><a href="#anamenu" onClick={closeMobileMenu}>Ana Menü</a></li>
                <li><a href="#hakkimda" onClick={closeMobileMenu}>Hakkımda</a></li>
                <li><a href="#projeler" onClick={closeMobileMenu}>Projelerim</a></li>
                <li><a href="#iletisim" onClick={closeMobileMenu}>İletişim</a></li>
              </ul>
            </nav>
            
            {/* Mobil Tema Değiştirici */}
            <div className="mobile-theme-switcher">
              <h4>Tasarımlar</h4>
              <div className="mobile-theme-buttons">
                <button 
                  className={`theme-btn ${currentTheme === 'theme1' ? 'active' : ''}`}
                  onClick={() => changeTheme('theme1')}
                >
                  Tasarım 1
                </button>
                <button 
                  className={`theme-btn ${currentTheme === 'theme2' ? 'active' : ''}`}
                  onClick={() => changeTheme('theme2')}
                >
                  Tasarım 2
                </button>
                <button 
                  className={`theme-btn ${currentTheme === 'theme3' ? 'active' : ''}`}
                  onClick={() => changeTheme('theme3')}
                >
                  Tasarım 3
                </button>
                <button 
                  className={`theme-btn ${currentTheme === 'theme4' ? 'active' : ''}`}
                  onClick={() => changeTheme('theme4')}
                >
                  Tasarım 4
                </button>
                <button 
                  className={`theme-btn ${currentTheme === 'theme5' ? 'active' : ''}`}
                  onClick={() => changeTheme('theme5')}
                >
                  Tasarım 5
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        <div className="hero">
          <div className="hero-flex">
            <h1>Ben Fatih</h1>
      
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
          <div className="phone-container" onMouseMove={(e) => {
            const container = e.currentTarget;
            const btn = container.querySelector('.escaping-phone-btn');
            if (!btn) return;
            
            const containerRect = container.getBoundingClientRect();
            const btnRect = btn.getBoundingClientRect();
            
            // Mouse pozisyonunu container'a göre hesapla
            const mouseX = e.clientX - containerRect.left;
            const mouseY = e.clientY - containerRect.top;
            
            // Butonun mevcut pozisyonunu CSS değerlerinden al (eğer set edilmişse)
            let btnX = parseFloat(btn.style.left) || (containerRect.width / 2 - btnRect.width / 2);
            let btnY = parseFloat(btn.style.top) || (containerRect.height / 2 - btnRect.height / 2);
            
            // Buton merkezini hesapla
            const btnCenterX = btnX + btnRect.width / 5;
            const btnCenterY = btnY + btnRect.height / 5;
            
            // Mouse ile buton merkezi arasındaki mesafe ve yön
            const deltaX = mouseX - btnCenterX;
            const deltaY = mouseY - btnCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // Eğer mouse çok uzaktaysa hareket etme
            if (distance > 120) return;
            
            // Kaçma yönü ve hızı - daha hızlı kaçma
            const escapeSpeed = 8; // Daha hızlı kaçma
            const escapeX = distance > 0 ? (-deltaX / distance) * escapeSpeed : 0;
            const escapeY = distance > 0 ? (-deltaY / distance) * escapeSpeed : 0;
            
            // Yeni pozisyon
            let newX = btnX + escapeX;
            let newY = btnY + escapeY;
            
            // Container sınırları kontrolü - sınıra gelince merkeze sıçra
            const margin = 20;
            const maxX = containerRect.width - btnRect.width - margin;
            const maxY = containerRect.height - btnRect.height - margin;
            
            // Sınırlara çok yakınsa merkeze sıçra
            const centerX = containerRect.width / 2 - btnRect.width / 2;
            const centerY = containerRect.height / 2 - btnRect.height / 2;
            
            if (newX <= margin || newX >= maxX || newY <= margin || newY >= maxY) {
              // Merkeze sıçra
              newX = centerX;
              newY = centerY;
            } else {
              // Normal sınır kontrolü
              newX = Math.max(margin, Math.min(newX, maxX));
              newY = Math.max(margin, Math.min(newY, maxY));
            }
            
            // Pozisyonu güncelle
            btn.style.position = 'absolute';
            btn.style.left = newX + 'px';
            btn.style.top = newY + 'px';
            btn.style.transition = 'none';
          }}>
            <button className="escaping-phone-btn">
              📞
            </button>
          </div>
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
