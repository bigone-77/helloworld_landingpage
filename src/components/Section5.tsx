export default function Section5() {
  return (
    <section className='bg-[#F8F9FB] w-full min-h-screen flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 p-12 lg:grid-cols-2 lg:gap-6 w-full'>
        <img src='images/learningStatus.svg' alt='Learning Status' />

        <div className='flex flex-col p-8 mt-10'>
          <h2 className='text-4xl font-bold text-black leading-[140%]'>
            나의 학습현황을 한눈에!
          </h2>
          <h3 className='text-4xl font-bold text-[#9747FF] leading-[140%]'>
            개인맞춤 <br /> 실시간 리포트
          </h3>
          <p className='text-sm mt-5'>
            <span className='text-black'>학습기록을 확인해보세요</span> <br />
            <div className='h-2' />
            <span className='text-black/50'>
              성과를 확인하고 <br /> 자신의 경쟁상대와 비교해 <br /> 전략적인
              목표를 세울 수 있어요
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
