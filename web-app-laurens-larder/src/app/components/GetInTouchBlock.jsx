"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(8, "Invalid phone number"),
  email: z.string().email("Invalid email"),
  requestType: z.enum(["quote", "business", "general"]),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function ContactPage() {
  const [success, setSuccess] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (!res.ok) {
        setSuccess(result.message || "Something went wrong");
        return;
      }
  
      setSuccess("Your message has been sent!");
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message");
    }
  }

  return (
    <section className="homepage-section">
        <div className="title-plus-description">
            <div className="title">
                Get in touch with Lauren
            </div>
        </div>

        <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg ">
        {success && <p className="text-green-600">{success}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
            <label className="block">First Name</label>
            <input {...register("firstName")} className="border p-2 w-full rounded" />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>

            <div>
            <label className="block">Last Name</label>
            <input {...register("lastName")} className="border p-2 w-full rounded" />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>

            <div>
            <label className="block">Phone Number</label>
            <input {...register("phone")} className="border p-2 w-full rounded" />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>

            <div>
            <label className="block">Email Address</label>
            <input {...register("email")} type="email" className="border p-2 w-full rounded" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
            <label className="block">Type of Request</label>
            <select {...register("requestType")} className="border p-2 w-full rounded">
                <option value="quote">Quote for Catering</option>
                <option value="business">Business Contact</option>
                <option value="wedding">Wedding catering</option>
                <option value="trailer">Trailer booking</option>
                <option value="other">Other</option>
            </select>
            </div>

            <div>
            <label className="block">Message</label>
            <textarea 
              {...register("message")} 
              className="border p-2 w-full rounded" 
              rows="4" 
              placeholder="Be as precise as possible (day, time, number of people, allergen, pick-up or delivery)"/>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
        </div>
    </section>
  );
}
