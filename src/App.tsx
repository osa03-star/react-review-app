import './App.css'
import Analysys from './contents/Analysys.tsx';
import Review from './contents/Review.tsx';

function App() {
  return (
    <div className='pt-10 p-5'>
      <div className='md:flex items-start justify-center gap-20'>
        <div className='flex-1'>
          <Analysys />
        </div>
        <div className='flex-1'>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default App
