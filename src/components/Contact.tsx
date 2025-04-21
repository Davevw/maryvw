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
    files: null as File[] | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        files: filesArray
      }));
    }
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
      files: null,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Contact Me</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          You can send me a message or ask me a general question using this form.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="text-xl font-serif mb-6">Get in Touch!</h3>
            
            <div className="mb-8">
              <p>Mary's Fitness and Lifestyle Channel</p>
              <p>Oceanside, California 92054, United States</p>
            </div>
            
            <div className="mb-8">
              <p>Classes are on Zoom and in person. Contact us for a Link to Scheduled Classes.</p>
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
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm uppercase tracking-wider mb-2 block">
                  Email*
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
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              
              <div>
                <label htmlFor="files" className="text-sm uppercase tracking-wider mb-2 block">
                  Attach Files
                </label>
                <Input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="bg-background border-border"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {formData.files ? `Attachments (${formData.files.length})` : "Attachments (0)"}
                </p>
              </div>
              
              <p className="text-xs text-muted-foreground">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
              
              <div className="flex space-x-4">
                <Button 
                  type="submit" 
                  className="uppercase tracking-wider text-sm px-10 py-6"
                >
                  Send
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline"
                  className="uppercase tracking-wider text-sm px-10 py-6"
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      message: "",
                      files: null,
                    });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
