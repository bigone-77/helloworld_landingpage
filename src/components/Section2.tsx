export default function Section2() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-2'>
      <div className='grid grid-cols-1 p-12 lg:grid-cols-2 lg:p-52 lg:gap-6 place-items-center w-full'>
        <div className='flex flex-col gap-y-4 text-white text-center'>
          <span className='w-full font-bold text-4xl'>HELLO WORLD의 가치</span>
          <span className='max-w-[410px] text-lg leading-1.6'>
            많은 사람들이 코딩을 배우고 싶어 하지만, 막상 시작하려고 하면
            생각보다 쉽지 않습니다. 무엇부터 시작해야 할지 모르는 막막함, 낯선
            용어들, 지루하고 어려운 학습 방식은 결국 포기로 이어지곤 하죠.
            <br />
            "누구나 재미있게, 자기 속도에 맞춰 코딩을 배울 수는 없을까?" 그
            질문에서 HELLO WORLD는 시작되었습니다.
            <br />
            처음으로 브라우저에 <b>Hello, world</b>를 출력하던 순간을 떠올리며,
            처음의 설렘과 성취감이 이어질 수 있는 공간을 만들었습니다.
          </span>
        </div>
        <video autoPlay loop muted playsInline className='rounded-2xl scale-80'>
          <source src='images/helloworld_main_video.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
}
