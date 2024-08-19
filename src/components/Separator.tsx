import WhiteArrow from '../assets/images/icon-arrow.svg'

export default function Separator() {
  return(
    <div className='w-[100%] flex justify-center items-center p-5'>
      <div className='flex justify-center items-center w-[50px] h-[50px] z-20  bg-[var(--Purple)] rounded-[50%]'>
        <img src={WhiteArrow.src}  className='w-[20px]'/>
      </div>
      <div className='w-[300px] h-[1px] border-t border-[var(--Off-white)] absolute z-10'></div>
    </div>
  )
}