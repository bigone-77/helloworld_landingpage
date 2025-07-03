export default function Section6() {
  return (
    <section className='bg-[#F8F9FB] w-full min-h-screen flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 p-12 lg:grid-cols-2 lg:gap-6'>
        <div className='flex flex-col p-8 mt-10'>
          <h2 className='text-4xl font-bold text-black leading-[140%]'>
            서로의 성장을 돕는
          </h2>
          <h3 className='text-4xl font-bold text-[#FFCF33] leading-[140%]'>
            배움의 장
          </h3>
          <p className='text-sm mt-5'>
            <span className='text-black'>혼자 끙끙 앓지 말아요</span> <br />
            <div className='h-2' />
            <span className='text-black/50'>
              Q&A 게시판을 통해 함께 묻고 답하며 성장해요. <br />
              관심사나 실력이 비슷한 친구를 추가해 <br /> 피드백을 주고 받아요.
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='w-[436px] h-[377px] relative'>
            <img src='images/question.svg' alt='Question' />
            <img
              src='images/코멘트.svg'
              alt='Comment'
              className='absolute top-0 right-0'
            />
          </div>

          <div className='w-[436px] h-[377px] relative'>
            <img src='images/answer.svg' alt='Answer' />
            <img
              src='images/썸업.svg'
              alt='Thumbs Up'
              className='absolute bottom-0 -left-4'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
