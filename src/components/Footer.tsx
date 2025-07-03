export default function Footer() {
  return (
    <section className='bg-black w-full min-h-screen flex items-center justify-center py-36'>
      <div className='flex flex-col gap-8 text-center items-center'>
        <p className='font-bold text-5xl text-white'>Hello, World</p>
        <p className='text-white/40'>지금 바로 헬로월드를 시작해보세요.</p>
        <button
          className='w-3/5 inline-flex items-center justify-center gap-x-2 p-4 text-white font-bold text-base rounded-[12px] transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer'
          style={{
            background: "linear-gradient(135deg, #8998f8, #7161d7)",
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-6 h-6 fill-white'
          >
            <path d='M13 2L3 14h9v8l10-12h-9z' />
          </svg>
          <p className='text-center'>사용해보기</p>
        </button>
      </div>
    </section>
  );
}
