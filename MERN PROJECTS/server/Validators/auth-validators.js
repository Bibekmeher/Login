const {z}=require("zod")

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(255, { message: "Name must be at most of 255 charcters." }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least of 3 chars." })
    .max(255, { message: "Email must be at most of 255 charcters." }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chars." })
    .max(255, { message: "Phone must be at most of 255 charcters." }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least of 6 chars." })
    .max(1024, { message: "Password must be at most of 1024 charcters." }),
});

module.exports=signupSchema;