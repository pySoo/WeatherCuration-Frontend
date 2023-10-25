import Background from '@/components/Background';
import Loader from '@/components/Common/Loader';

export default function Main() {
  return (
    <div className="w-full h-screen relative">
      <Background>{true ? <div /> : <Loader />}</Background>
    </div>
  );
}
