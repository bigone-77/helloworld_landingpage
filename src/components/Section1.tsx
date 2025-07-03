export default function Section1() {
  return (
    <section className='min-h-screen grid grid-cols-1 place-items-center bg-gradient-1'>
      <div className='flex flex-col items-center gap-y-4'>
        <img src='images/helloworld_logo.svg' className='w-52 h-40' />
        <p className='flex flex-col gap-y-2 text-center font-semibold'>
          <span>누구나 쉽게 시작하는 개발</span>
          <span>
            입문자에서 개발자로 성장하는 과정을 '헬로월드'와 함께 시작해보세요.
          </span>
        </p>
      </div>
      <div className='animate-bounce flex flex-col items-center translate-y-10'>
        <span>SCROLL DOWN</span>
        <svg
          className='size-6'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M12 21l-12-12h5v-9h14v9h5z' />
        </svg>
      </div>
    </section>
  );
}
