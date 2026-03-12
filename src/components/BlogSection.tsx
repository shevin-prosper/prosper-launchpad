import { Gallery4, type Gallery4Props } from "@/components/ui/gallery4";

const blogData: Gallery4Props = {
  title: "From Our Blog",
  description:
    "Expert tips, visa updates, and real success stories to guide your study abroad journey — straight from the Prosper team.",
  items: [
    {
      id: "uk-student-visa-2024",
      title: "UK Student Visa 2025: Complete Guide for Sri Lankan Students",
      description:
        "Everything you need to know about the UK Student visa — from CAS letters to biometrics — updated for 2025 with the latest Home Office requirements.",
      href: "#blog",
      image:
        "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "australia-study",
      title: "Studying in Australia: Universities, Costs & Scholarships",
      description:
        "A practical breakdown of Australia's top universities, living costs, and scholarship opportunities that Sri Lankan students can apply for right now.",
      href: "#blog",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "canada-pgwp",
      title: "Canada PGWP: Turn Your Degree Into a Work Permit",
      description:
        "After graduating in Canada, the Post-Graduation Work Permit opens a direct path to permanent residency. Here's how to make the most of it.",
      href: "#blog",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "ielts-tips",
      title: "7 Proven IELTS Strategies That Got Our Students Band 7+",
      description:
        "Our counsellors share the exact preparation techniques used by Prosper students who achieved band scores of 7 or above — with free resources included.",
      href: "#blog",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "sop-guide",
      title: "How to Write a Statement of Purpose That Gets You In",
      description:
        "Your SOP is your first impression. Learn the structure, tone, and key elements that top universities expect — with real examples from accepted applicants.",
      href: "#blog",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
  ],
};

const BlogSection = () => {
  return <Gallery4 {...blogData} />;
};

export default BlogSection;
