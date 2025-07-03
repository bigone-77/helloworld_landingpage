import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const members = [
  {
    imgSrc: "images/helloworld_team1.jpg",
    name: "방기윤",
    email: "bky960124@gmail.com",
    job: "UI/UX designer",
    description: `헬로월드의 처음부터 마지막 순간까지 \n 사용자의 경험을 디자인합니다.`,
    color: "bg-[#e63946]",
  },
  {
    imgSrc: "images/helloworld_team2.jpg",
    name: "변인정",
    email: "injung940202@gmail.com",
    job: "Back-end 개발자",
    description: `헬로월드의 보이지 않는 곳에서 \n 데이터와 기능의 흐름을 설계합니다.`,
    color: "bg-[#fca311]",
  },
  {
    imgSrc: "images/helloworld_team3.jpg",
    name: "신태일",
    email: "taeill012@gmail.com",
    job: "Front-end 개발자",
    description: `헬로월드의 화면과 흐름 위에 \n 사용자와의 만남을 구현합니다.`,
    color: "bg-[#a56c56]",
  },
];

export default function Section7() {
  return (
    <section className='bg-white w-full min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-32'>
      <div className='flex flex-col w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
        <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16'>
          우리 팀을 소개합니다
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16 justify-items-center'>
          {members.map((member) => (
            <div
              key={member.name}
              className='flex flex-col items-center text-center max-w-[250px] w-full'
            >
              <div className='size-[150px] mb-5 rounded-full overflow-hidden shadow-md'>
                <img
                  src={member.imgSrc}
                  alt={`${member.name} 이미지`}
                  className='size-full object-cover object-top'
                />
              </div>
              <div
                className={`${member.color} px-6 py-2.5 rounded-full no-underline text-base font-bold mb-5 transition-transform duration-200 ease-in-out hover:scale-105 text-white`}
              >
                {member.job}
              </div>
              <a href={`mailto:${member.email}`} className='block mb-2'>
                <EnvelopeClosedIcon className='w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors' />
              </a>
              <div className='flex flex-col mt-2 text-center gap-y-2'>
                <span className='text-lg sm:text-xl font-bold'>
                  {member.name}
                </span>
                <span className='font-light text-black/80 whitespace-pre-line text-sm sm:text-base'>
                  {member.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// <section className='bg-white w-full min-h-screen flex items-center justify-center py-36'>
//   <div className='flex flex-col w-full px-32'>
//     <p className='text-4xl font-bold text-center'>우리팀을 소개합니다</p>
//     <div className='flex items-center justify-around py-20'>
//       {members.map((member) => (
//         <div
//           key={member.name}
//           className='flex flex-col items-center gap-y-2'
//         >
//           <div className='size-[150px] mx-auto mb-5 rounded-full overflow-hidden shadow-md'>
//             <img
//               src={member.imgSrc}
//               alt='Member'
//               className='size-full object-cover object-top'
//             />
//           </div>
//           <div
//             className={`${member.color} px-6 py-2.5 rounded-full no-underline text-base font-bold mb-5 transition-transform duration-200 ease-in-out hover:scale-105 text-white`}
//           >
//             {member.job}
//           </div>
//           <a href={`mailto:${member.email}`}>
//             <EnvelopeClosedIcon className='w-6 h-6 text-gray-600' />
//           </a>
//           <div className='flex flex-col mt-4 text-center gap-y-3'>
//             <span className='text-xl font-bold'>{member.name}</span>
//             <span className='font-light text-black/80 whitespace-pre-line'>
//               {member.description}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
