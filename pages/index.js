import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>SAM SYSTEMS — Tecnologia para o seu negócio</title>
        <meta
          name="description"
          content="SAM SYSTEMS desenvolve software sob medida para pequenos negócios. Conheça o Ceasinha, nosso PDV para feirantes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.page}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <span style={styles.logoMark}>SS</span>
            <span style={styles.brandName}>SAM SYSTEMS</span>
          </div>
          <nav style={styles.nav}>
            <a href="#produtos" style={styles.navLink}>
              Produtos
            </a>
            <a href="#sobre" style={styles.navLink}>
              Sobre
            </a>
            <a href="#contato" style={styles.navLink}>
              Contato
            </a>
          </nav>
        </header>

        <main style={styles.main}>
          <section style={styles.hero}>
            <h1 style={styles.heroTitle}>
              Software que resolve problemas reais de pequenos negócios.
            </h1>
            <p style={styles.heroSubtitle}>
              Somos uma empresa brasileira de tecnologia focada em construir
              ferramentas simples, acessíveis e eficientes para quem mais
              precisa — começando pelos feirantes.
            </p>
          </section>

          <section id="produtos" style={styles.section}>
            <h2 style={styles.sectionTitle}>Nossos Produtos</h2>

            <div style={styles.productCard}>
              <div style={styles.productHeader}>
                <h3 style={styles.productName}>Ceasinha</h3>
                <span style={styles.badge}>PDV para feirantes</span>
              </div>
              <p style={styles.productDescription}>
                O <strong>Ceasinha</strong> é um sistema de Ponto de Venda (PDV)
                desenhado especificamente para feirantes e pequenos
                comerciantes. Permite registrar vendas, controlar produtos,
                acompanhar o caixa e operar com agilidade no dia a dia da feira
                — tudo em uma interface simples, pensada para funcionar bem em
                ambientes reais de trabalho.
              </p>
              <ul style={styles.productList}>
                <li>Registro rápido de vendas e fechamento de caixa</li>
                <li>Controle de produtos e estoque</li>
                <li>Histórico de vendas e relatórios</li>
                <li>Interface otimizada para o uso prático na feira</li>
              </ul>
              <a
                href="https://ceasinha.app.br"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.productLink}
              >
                Acessar ceasinha.app.br →
              </a>
            </div>
          </section>

          <section id="sobre" style={styles.section}>
            <h2 style={styles.sectionTitle}>Sobre a empresa</h2>
            <p style={styles.paragraph}>
              A SAM SYSTEMS (razão social:{" "}
              <strong>SAMUEL DAMAZIO DA SILVA CUNHA TECNOLOGIA LTDA</strong>) é
              uma empresa brasileira de tecnologia, sediada no Brasil e
              regularmente inscrita no CNPJ sob o nº{" "}
              <strong>65.726.935/0001-03</strong>. Atuamos no desenvolvimento de
              produtos digitais próprios e de soluções sob medida para pequenos
              e médios negócios.
            </p>
          </section>

          <section id="contato" style={styles.section}>
            <h2 style={styles.sectionTitle}>Contato</h2>
            <p style={styles.paragraph}>
              Quer falar com a gente, contratar um projeto ou conhecer melhor o
              Ceasinha? Entre em contato pelos canais abaixo.
            </p>
            <ul style={styles.contactList}>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/sam.damazio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  @sam.damazio
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/samuel-damazio-5a0976274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Samuel Damazio
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <div>
              <strong>SAM SYSTEMS</strong>
              <div style={styles.footerMuted}>
                SAMUEL DAMAZIO DA SILVA CUNHA TECNOLOGIA LTDA
              </div>
              <div style={styles.footerMuted}>CNPJ: 65.726.935/0001-03</div>
            </div>
            <div style={styles.footerMuted}>
              © {new Date().getFullYear()} SAM SYSTEMS. Todos os direitos
              reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0b0d12",
    color: "#e6e8ee",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #1f232c",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoMark: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "#3b82f6",
    color: "white",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
  brandName: {
    fontWeight: 600,
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "24px",
  },
  navLink: {
    color: "#c7ccd6",
    textDecoration: "none",
    fontSize: "14px",
  },
  main: {
    flex: 1,
    maxWidth: "880px",
    width: "100%",
    margin: "0 auto",
    padding: "60px 24px",
  },
  hero: {
    marginBottom: "64px",
  },
  heroTitle: {
    fontSize: "40px",
    lineHeight: 1.2,
    margin: "0 0 16px 0",
    color: "#ffffff",
  },
  heroSubtitle: {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#aab1bd",
    margin: 0,
  },
  section: {
    marginBottom: "56px",
  },
  sectionTitle: {
    fontSize: "22px",
    margin: "0 0 16px 0",
    color: "#ffffff",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#c7ccd6",
    margin: 0,
  },
  productCard: {
    backgroundColor: "#11151c",
    border: "1px solid #1f232c",
    borderRadius: "12px",
    padding: "24px",
  },
  productHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    flexWrap: "wrap",
  },
  productName: {
    margin: 0,
    fontSize: "20px",
    color: "#ffffff",
  },
  badge: {
    fontSize: "12px",
    backgroundColor: "#1d2a44",
    color: "#9bbcff",
    padding: "4px 10px",
    borderRadius: "999px",
  },
  productDescription: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#c7ccd6",
    margin: "0 0 12px 0",
  },
  productList: {
    margin: "0 0 16px 20px",
    padding: 0,
    color: "#c7ccd6",
    lineHeight: 1.7,
  },
  productLink: {
    color: "#7aa7ff",
    textDecoration: "none",
    fontWeight: 500,
  },
  contactList: {
    listStyle: "none",
    padding: 0,
    margin: "12px 0 0 0",
    lineHeight: 2,
    color: "#c7ccd6",
  },
  link: {
    color: "#7aa7ff",
    textDecoration: "none",
  },
  footer: {
    borderTop: "1px solid #1f232c",
    padding: "24px 40px",
  },
  footerInner: {
    maxWidth: "880px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "16px",
    fontSize: "13px",
  },
  footerMuted: {
    color: "#7c8290",
    marginTop: "4px",
  },
};

export default Home;
