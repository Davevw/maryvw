
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // In a real project, here you would send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Connect</h2>
            <p className="text-lg mb-8 max-w-md">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Fill out the form or reach out directly.
            </p>
            
            <div className="mb-12">
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-lg link-underline">
                  hello@example.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2">Social</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg link-underline"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg link-underline"
                  >
                    Twitter
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg link-underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="mt-4 uppercase tracking-wider text-sm px-10 py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
