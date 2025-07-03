export default function Section3() {
  return (
    <section className='bg-[#F8F9FB] w-full min-h-screen flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 p-12 lg:grid-cols-2 lg:gap-6 w-full'>
        <div className='relative mx-auto'>
          <img src='/images/pre-test.svg' alt='Pre Test Background' />

          <div className='absolute top-1/2 right-1/2 transform translate-x-[120%] -translate-y-[93%] z-30 flex flex-col items-center'>
            <img
              src='/images/confetti.svg'
              alt='Confetti'
              className='translate-y-24'
            />

            <img src='/images/pass-pre-test.svg' alt='Pass Free Test' />
          </div>
        </div>

        <div className='flex flex-col p-8 mt-10'>
          <h2 className='text-4xl font-bold text-black leading-[140%]'>
            나에게 <br /> 딱 맞는 시작,
          </h2>
          <h3 className='text-4xl font-bold text-[#9747FF] leading-[140%]'>
            사전 레벨 테스트
          </h3>
          <p className='text-sm mt-5'>
            <span className='text-black'>코딩 공부가 막막하신가요?</span> <br />
            <div className='h-2' />
            <span className='text-black/50'>
              헬로월드가 맞춤형 학습코스를 추천해드립니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
