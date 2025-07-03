export default function Section4() {
  return (
    <section className='bg-[#F8F9FB] w-full min-h-screen flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 p-12 lg:grid-cols-2 lg:gap-6 place-items-center'>
        <div className='flex flex-col p-8'>
          <h2 className='text-4xl font-bold text-black leading-[140%]'>
            성취감과 재미를 <br /> 함께 얻는,
          </h2>
          <h3 className='text-4xl font-bold text-[#FFCF33] leading-[140%]'>
            게임화 요소
          </h3>
          <p className='text-sm mt-5'>
            <span className='text-black'>코딩 공부가 지루하신가요?</span> <br />
            <div className='h-2' />
            <span className='text-black/50'>
              뱃지&업적 시스템으로 성취감을 더해보세요 <br /> 포인트&시즌
              승급제로 더멀리 나아가보세요
            </span>
          </p>
        </div>
        <GroupBadges />
      </div>
    </section>
  );
}

const GroupBadges = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <img src='images/myPoint.svg' className='size-[214px] -translate-y-12' />
      <img
        src='/images/achievement.svg'
        alt='LV5 업적'
        className='size-[214px] translate-y-12'
      />
      <img
        src='/images/badge.svg'
        alt='1K 뱃지'
        className='size-[214px] -translate-y-12'
      />
      <img
        src='/images/myTier.svg'
        alt='MY TIER'
        className='size-[214px] translate-y-12'
      />
    </div>
  );
};
