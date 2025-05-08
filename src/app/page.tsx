"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { supabase } from "@/supabaseClient";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function Home() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: "http://localhost:3000/login",
      },
    });

    if (error) {
      alert(JSON.stringify(error));
    }

    alert(JSON.stringify(data));
  });

  return (
    <form onSubmit={onSubmit} className="w-[300px] grid items-center">
      <div className="flex">
        <label htmlFor="email" className="mr-2">
          email
        </label>
        <input {...register("email")} placeholder="email" />
      </div>
      <div className="flex">
        <label htmlFor="password" className="mr-2">
          password
        </label>
        <input {...register("password")} placeholder="password" />
      </div>
      <div className="w-full grid items-center">
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
