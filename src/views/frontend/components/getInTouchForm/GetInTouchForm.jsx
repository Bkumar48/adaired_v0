import Button from "../buttonComponent/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const GetInTouchForm = () => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxlZy1EuW8TN54wq36DIduhvQYXIy4MzKwg9ITlHH-rzzPNc5UdYHCBtKmrO_z3RqrCqg/exec";

  const schema = z.object({
    formId: z.string(),
    Name: z.string().min(3, { message: "Name is required" }),
    Email: z.string().min(5, { message: "Email is required" }).email(),
    Message: z.string(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data,event) => {
    event.preventDefault();
    console.log(data);
    try {
      await axios.post(scriptUrl, JSON.stringify(data));
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="getInTouch__form aside__cards-border ">
      <h4>Get in Touch</h4>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("formId")} value="getInTouchForm" />
        <div className="form-group">
          {errors.Name && <span className="error">{errors.Name.message}</span>}
          <input
            type="text"
            id="name"
            {...register("Name")}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          {errors.Email && (
            <span className="error">{errors.Email.message}</span>
          )}
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...register("Email")}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Message"
            {...register("Message")}
          ></textarea>
        </div>
        <Button
          title="Send"
          type="submit"
          svgBackgroundColor="#000"
          icon="solar:arrow-right-broken"
          borderColor="#FB9100"
        />
      </form>
    </div>
  );
};

export default GetInTouchForm;
