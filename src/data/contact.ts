export interface ContactInfo {
  eyebrow: string;
  heading: string;
  description: string;
  availability: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  projectTypes: string[];
}

export const contactData: ContactInfo = {
  eyebrow: 'GET IN TOUCH',
  heading: 'Have a Project\nin Mind?',
  description: "Let's build something useful, modern, and impactful together.",
  availability: 'Currently open to full-time roles & freelance contracts',
  email: 'rakibhossen.dev@gmail.com',
  linkedin: 'linkedin.com/in/rakibhossen917',
  linkedinUrl: 'https://www.linkedin.com/in/rakibhossen917/',
  github: 'github.com/MdRakibHossen917',
  githubUrl: 'https://github.com/MdRakibHossen917',
  projectTypes: [
    'MERN Stack Web Application',
    'Frontend Development',
    'Bubble.io Development',
    'Webflow Development',
    'General Inquiry',
  ],
};
