import LayoutSize from '../Layouts/LayoutSize'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MFButton from '../Common/MFButton';

export const Banner = () => {
  return (
    <div className='min-h-[70vh] mt-16 md:mt-0'>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-[60vh] md:h-[450px]  bg-[url(/images/mesh-964.png)] bg-opacity-30 bg-no-repeat bg-cover bg-clip-text grid place-content-center px-5 md:px-0'>

            <LayoutSize>
              <div className='relative flex flex-col md:flex-row gap-10 items-center justify-center'>
                <div className='absolute -right-10 -z-10 opacity-30 -top-5 -rotate-[10px] animate-pulse'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path fill="rgba(14, 183, 190, 0.5)" fill-rule="evenodd" d="M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM3 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h2 className='text-secondary font-bold text-center md:text-left text-3xl md:text-5xl lg:text-7xl text-transparent'>Transform Your Skills and Talents</h2>
                  <div className='mt-4 text-center md:text-left'>
                    <MFButton text='Enroll Now' path="/classes" />
                  </div>
                </div>
                <img src="/images/drum.png" alt="drum" className='-mt-12 md:mt-0 w-[75%] md:w-[60%]' />
              </div>
            </LayoutSize>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[60vh] md:h-[450px] bg-[url(/images/mesh-288.png)] bg-opacity-30 bg-no-repeat bg-cover bg-clip-text  grid place-content-center px-5 md:px-0'>
            <LayoutSize>
              <div className='relative flex flex-col md:flex-row gap-10 items-center justify-center' >
                <div className='absolute right-0 left-[45%]  bottom-0 top-0 -z-10 opacity-30 -rotate-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1099" width="100" height="100" x="0" y="0" version="1.1" viewBox="0 0 402.85 402.851" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M97.158 402.851c.717 0 1.434-.275 1.984-.822l50.721-50.715a2.804 2.804 0 0 0 0-3.962l-46.721-46.718 48.767-48.769c1.086-1.084 1.086-2.867 0-3.961l-46.537-46.523 49.002-49.002a2.805 2.805 0 0 0 0-3.962l-46.715-46.72 48.767-48.766a2.807 2.807 0 0 0 0-3.962L108.276.821a2.799 2.799 0 0 0-3.961 0 2.804 2.804 0 0 0 0 3.961l46.167 46.165-48.739 48.736a2.808 2.808 0 0 0 0 3.961c.08.08.175.107.257.17.096.134.153.285.271.402l46.166 46.172L99.7 199.124c-.696.695-.898 1.653-.715 2.545a2.79 2.79 0 0 0 .808 2.041l46.167 46.183-48.739 48.723c-1.085 1.096-1.085 2.879 0 3.963.08.087.17.114.254.164.094.131.145.284.273.405l46.166 46.161-48.731 48.728c-1.092 1.095-1.092 2.884 0 3.962.533.586 1.258.852 1.975.852zm75.624 0a2.8 2.8 0 0 0 1.982-.822l50.718-50.715a2.822 2.822 0 0 0 0-3.962l-46.712-46.718 48.771-48.769c1.078-1.084 1.078-2.867 0-3.961L181 201.381l49.007-49.002a2.813 2.813 0 0 0 0-3.962l-46.715-46.714 48.769-48.767a2.802 2.802 0 0 0 0-3.961L183.908.832a2.8 2.8 0 1 0-3.961 3.961l46.165 46.165-48.731 48.737a2.804 2.804 0 0 0 0 3.961c.074.074.161.101.246.164.096.134.146.29.274.408l46.171 46.173-48.735 48.736c-.689.69-.892 1.643-.713 2.534a2.806 2.806 0 0 0 .806 2.06l46.184 46.178-48.766 48.721a2.818 2.818 0 0 0 0 3.962c.08.076.17.115.248.153.101.131.152.295.28.405l46.164 46.174-48.734 48.727a2.799 2.799 0 0 0 0 3.961c.533.573 1.25.839 1.976.839zm75.627 0a2.77 2.77 0 0 0 1.983-.822l50.726-50.715a2.804 2.804 0 0 0 0-3.962l-46.72-46.718 48.765-48.769a2.8 2.8 0 0 0 0-3.961l-46.532-46.523 49.007-49.002a2.846 2.846 0 0 0 0-3.962l-46.732-46.72 48.769-48.766a2.814 2.814 0 0 0 0-3.962L259.517.821c-1.094-1.095-2.883-1.095-3.961 0a2.802 2.802 0 0 0 0 3.961l46.155 46.165-48.728 48.736a2.8 2.8 0 0 0 0 3.961c.079.08.159.107.263.17.109.134.139.285.265.402l46.173 46.172-48.746 48.736c-.69.695-.876 1.653-.71 2.545a2.769 2.769 0 0 0 .818 2.041l46.173 46.183-48.742 48.723c-1.083 1.096-1.083 2.879 0 3.963.075.087.164.114.249.164.102.131.134.284.274.405l46.173 46.161-48.731 48.728c-1.097 1.095-1.097 2.884 0 3.962a2.615 2.615 0 0 0 1.967.852z" fill="url(&quot;#SvgjsLinearGradient1100&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1100"><stop stop-opacity=" 1" stop-color="rgba(105, 234, 203)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(234, 204, 248)" offset="0.48"></stop><stop stop-opacity=" 1" stop-color="rgba(250, 74, 111)" offset="1"></stop></linearGradient></defs></svg>
                </div>
                <div>
                  <h2 className='text-secondary font-bold  text-3xl md:text-5xl lg:text-7xl text-center md:text-left text-transparent'>Unleash Your Creativity</h2>
                  <div className='mt-4 text-center md:text-left'>
                    <MFButton text='Enroll Now' path="/classes" />
                  </div>
                </div>
                <img src="/images/piano.png" alt="drum" className='-mt-5 md:mt-0 w-[75%] md:w-[60%]' />
              </div>
            </LayoutSize>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[60vh] md:h-[450px] bg-[url(/images/mesh-288.png)] bg-opacity-30 bg-no-repeat bg-cover bg-clip-text  grid place-content-center px-5 md:px-0'>
            <LayoutSize>
              <div className='relative grid md:grid-cols-2 md:flex-row gap-10 items-center justify-center' >
                <div className='absolute right-0 left-[45%]  bottom-0 top-0 -z-10 opacity-30 -rotate-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1099" width="100" height="100" x="0" y="0" version="1.1" viewBox="0 0 402.85 402.851" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M97.158 402.851c.717 0 1.434-.275 1.984-.822l50.721-50.715a2.804 2.804 0 0 0 0-3.962l-46.721-46.718 48.767-48.769c1.086-1.084 1.086-2.867 0-3.961l-46.537-46.523 49.002-49.002a2.805 2.805 0 0 0 0-3.962l-46.715-46.72 48.767-48.766a2.807 2.807 0 0 0 0-3.962L108.276.821a2.799 2.799 0 0 0-3.961 0 2.804 2.804 0 0 0 0 3.961l46.167 46.165-48.739 48.736a2.808 2.808 0 0 0 0 3.961c.08.08.175.107.257.17.096.134.153.285.271.402l46.166 46.172L99.7 199.124c-.696.695-.898 1.653-.715 2.545a2.79 2.79 0 0 0 .808 2.041l46.167 46.183-48.739 48.723c-1.085 1.096-1.085 2.879 0 3.963.08.087.17.114.254.164.094.131.145.284.273.405l46.166 46.161-48.731 48.728c-1.092 1.095-1.092 2.884 0 3.962.533.586 1.258.852 1.975.852zm75.624 0a2.8 2.8 0 0 0 1.982-.822l50.718-50.715a2.822 2.822 0 0 0 0-3.962l-46.712-46.718 48.771-48.769c1.078-1.084 1.078-2.867 0-3.961L181 201.381l49.007-49.002a2.813 2.813 0 0 0 0-3.962l-46.715-46.714 48.769-48.767a2.802 2.802 0 0 0 0-3.961L183.908.832a2.8 2.8 0 1 0-3.961 3.961l46.165 46.165-48.731 48.737a2.804 2.804 0 0 0 0 3.961c.074.074.161.101.246.164.096.134.146.29.274.408l46.171 46.173-48.735 48.736c-.689.69-.892 1.643-.713 2.534a2.806 2.806 0 0 0 .806 2.06l46.184 46.178-48.766 48.721a2.818 2.818 0 0 0 0 3.962c.08.076.17.115.248.153.101.131.152.295.28.405l46.164 46.174-48.734 48.727a2.799 2.799 0 0 0 0 3.961c.533.573 1.25.839 1.976.839zm75.627 0a2.77 2.77 0 0 0 1.983-.822l50.726-50.715a2.804 2.804 0 0 0 0-3.962l-46.72-46.718 48.765-48.769a2.8 2.8 0 0 0 0-3.961l-46.532-46.523 49.007-49.002a2.846 2.846 0 0 0 0-3.962l-46.732-46.72 48.769-48.766a2.814 2.814 0 0 0 0-3.962L259.517.821c-1.094-1.095-2.883-1.095-3.961 0a2.802 2.802 0 0 0 0 3.961l46.155 46.165-48.728 48.736a2.8 2.8 0 0 0 0 3.961c.079.08.159.107.263.17.109.134.139.285.265.402l46.173 46.172-48.746 48.736c-.69.695-.876 1.653-.71 2.545a2.769 2.769 0 0 0 .818 2.041l46.173 46.183-48.742 48.723c-1.083 1.096-1.083 2.879 0 3.963.075.087.164.114.249.164.102.131.134.284.274.405l46.173 46.161-48.731 48.728c-1.097 1.095-1.097 2.884 0 3.962a2.615 2.615 0 0 0 1.967.852z" fill="url(&quot;#SvgjsLinearGradient1100&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1100"><stop stop-opacity=" 1" stop-color="rgba(105, 234, 203)" offset="0"></stop><stop stop-opacity=" 1" stop-color="rgba(234, 204, 248)" offset="0.48"></stop><stop stop-opacity=" 1" stop-color="rgba(250, 74, 111)" offset="1"></stop></linearGradient></defs></svg>
                </div>
                <div>
                  <h2 className='text-secondary font-bold  text-3xl md:text-5xl lg:text-7xl text-center md:text-left text-transparent'>Ignite Your Musical Journey</h2>
                  <div className='mt-4 text-center md:text-left'>
                    <MFButton text='Enroll Now' path="/classes" />
                  </div>
                </div>
                <img src="/images/pianomax.png" alt="drum" className='-mt-5 md:mt-0 w-[60%] mx-auto md:w-[60%]' />
              </div>
            </LayoutSize>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}
