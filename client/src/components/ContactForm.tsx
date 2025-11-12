import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Sucesso!", {
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast.error("Erro", {
        description: error.message || "Ocorreu um erro ao enviar o formulário. Tente novamente."
      });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos obrigatórios."
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">
          Nome *
        </label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">
          Email *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">
          Telefone *
        </label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(11) 99999-9999"
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">
          Assunto
        </label>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Assunto da mensagem"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">
          Mensagem *
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Sua mensagem..."
          className="w-full min-h-32"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </Button>
    </form>
  );
}
