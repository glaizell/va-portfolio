import Footer from '../layout/Footer';
import Header from '../layout/Header';

function MainLayout({ children, className }) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
