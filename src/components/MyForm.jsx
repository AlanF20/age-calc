import { useForm } from "react-hook-form";
import { MyInput } from "./MyInput";

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.preventDefault
    console.log(data)
  };

  return (
    <form className="flex flex-wrap w-[100%] gap-2" onSubmit={handleSubmit(onSubmit)}>
      <MyInput placeholder="24" name="day" labelText="DAY" />
      <MyInput placeholder="09" name="month" labelText="MONTH" />
      <MyInput placeholder="1984" name="year" labelText="YEAR" />
    </form>
  );
}