"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactRequest, ContactValidator } from "@/lib/validators/contact";
import { Label } from "./ui/Label";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactRequest>({
    resolver: zodResolver(ContactValidator),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="mt-10 rounded-lg border p-5">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex flex-col">
          <Label htmlFor="name" className="sr-only">
            Name
          </Label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="rounded-lg border p-2"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="rounded-lg border p-2"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message")}
            className="rounded-lg border p-2"
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          className="mt-5 rounded-lg bg-blue-500 p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
