import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "State Management",
    items: ["Redux", "Context API", "React Query", "Zustand"],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Webpack",
      "Vite",
      "REST APIs",
      "Responsive Design",
      "UI/UX",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <Card
              key={index}
              className="p-6 bg-card shadow-card hover:shadow-glow transition-smooth border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
