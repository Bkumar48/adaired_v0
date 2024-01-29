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
    Email: z.string().email("Invalid Email"),
    Message: z.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post(scriptUrl, JSON.stringify(data));
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
          <input
            type="text"
            id="name"
            {...register("Name")}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
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
