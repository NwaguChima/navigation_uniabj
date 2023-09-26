"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactRequest, ContactValidator } from "@/lib/validators/contact";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";

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
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <Label htmlFor="name" className="mb-2">
            Name
          </Label>
          <Input
            id="name"
            className="pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            size={32}
            {...register("name")}
          />
          {errors.name && (
            <p className="p-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2">
            Email Address
          </Label>
          <Input
            id="email"
            className="pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            size={32}
            {...register("email")}
          />
          {errors.email && (
            <p className="p-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Label htmlFor="message" className="mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            className="pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register("message")}
          />
          {errors.message && (
            <p className="p-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button className="mt-4 bg-green-500 transition-all duration-300 hover:bg-green-600">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
