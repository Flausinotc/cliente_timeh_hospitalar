import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        phone: z.string().min(1, "Telefone é obrigatório"),
        subject: z.string().optional(),
        message: z.string().min(1, "Mensagem é obrigatória")
      }))
      .mutation(async ({ input }) => {
        try {
          await notifyOwner({
            title: "Novo Contato - Time H Hospitalar",
            content: `Novo formulário de contato recebido:\n\nNome: ${input.name}\nEmail: ${input.email}\nTelefone: ${input.phone}\nAssunto: ${input.subject || "Não informado"}\n\nMensagem:\n${input.message}`
          });

          return {
            success: true,
            message: "Mensagem enviada com sucesso"
          };
        } catch (error) {
          console.error("Erro ao enviar formulário de contato:", error);
          throw new Error("Erro ao enviar formulário. Tente novamente.");
        }
      })
  }),
});

export type AppRouter = typeof appRouter;
