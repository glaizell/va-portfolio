import Footer from '../layout/Footer';
import Header from '../layout/Header';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
