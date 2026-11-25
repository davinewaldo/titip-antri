import { Navigate, Route, Routes } from "react-router-dom";
import MasukPage from "./pages/MasukPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import EksplorPage from "./pages/EksplorPage";
import DetailPage from "./pages/DetailPage";
import PemesanPage from "./pages/PemesanPage";
import CheckoutPage from "./pages/CheckoutPage";
import TiketPage from "./pages/TiketPage";
import MenungguPage from "./pages/MenungguPage";
import DipanggilPage from "./pages/DipanggilPage";
import CheckinPage from "./pages/CheckinPage";

/**
 * Rute aplikasi TitipAntri — alur antrean 11 langkah.
 * 01 Masuk -> 02 Login -> 03 OTP -> 04 Eksplor -> 05 Detail ->
 * 06 Pemesan -> 07 Checkout -> 08 Tiket -> 09 Menunggu ->
 * 10 Dipanggil -> 11 Check-in.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MasukPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/eksplor" element={<EksplorPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/pemesan" element={<PemesanPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/tiket" element={<TiketPage />} />
      <Route path="/menunggu" element={<MenungguPage />} />
      <Route path="/dipanggil" element={<DipanggilPage />} />
      <Route path="/checkin" element={<CheckinPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
