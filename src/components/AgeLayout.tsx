export default function AgeLayout(){
  return(
    <div className="w-[100%] flex flex-col justify-center">
      <DisplayedAge value='' type="years"/>
      <DisplayedAge value='' type="months"/>
      <DisplayedAge value='' type="days"/>
    </div>
  )
}


function DisplayedAge({ value , type}: DisplayedAge){
  const realValue = !value ? '--' : value
  return(
    <p className="font-poppinsBoldItalic text-[42px]"><span className="text-[--Purple]">{realValue}</span> {type}</p>
  )
}