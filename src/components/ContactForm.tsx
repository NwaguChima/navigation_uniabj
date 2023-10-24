"use client";
import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactRequest, ContactValidator } from "@/lib/validators/contact";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!, // SERVICE_ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // TEMPLATE_ID
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!, // PUBLIC KEY
      )
      .then(
        (result: any) => {
          toast({
            title: "Email Sent to Admin",
            description: "Your message has been sent successfully.",
          });
          setLoading(false);
          formRef.current!.reset();
        },
        ({ text }: { text: string }) => {
          toast({
            title: "Email Not Sent",
            description: `${text}`,
            variant: "destructive",
          });
          setLoading(false);
        },
      );
  };

  return (
    <div className="formGradient mb-28 mt-10 max-w-xl rounded-lg border p-5">
      <form
        ref={formRef}
        name="uniAbuja_contact_form"
        onSubmit={(e) => {
          handleSubmit((data) => sendEmail(e))(e);
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <Label htmlFor="name" className="mb-2 font-semibold">
            Name
          </Label>
          <Input
            id="name"
            className="bg-transparent pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            size={32}
            {...register("name")}
          />
          {errors.name && (
            <p className="p-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2 font-semibold">
            Email Address
          </Label>
          <Input
            id="email"
            className="bg-transparent pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            size={32}
            {...register("email")}
          />
          {errors.email && (
            <p className="p-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Label htmlFor="message" className="mb-2 font-semibold">
            Message
          </Label>
          <Textarea
            id="message"
            className="bg-transparent pl-2 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            {...register("message")}
          />
          {errors.message && (
            <p className="p-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button
          isLoading={loading}
          type="submit"
          className="mt-4 bg-green-500 transition-all duration-300 hover:bg-green-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
