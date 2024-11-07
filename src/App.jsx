import CarouselComponent from './components/CarouselComponent';
import Header from './components/Header';
import Vision from './components/Vision';

function App() {
  return (
    <div className="bg-[#fff7ee] w-full h-full pb-44">
    <Header/>
    <Vision/>
    <div className='mt-24'>
    <CarouselComponent/>
    </div>
    </div>
  );
}

export default App;
