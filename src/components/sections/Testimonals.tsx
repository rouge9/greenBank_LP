import { people } from "@/lib/data";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Button } from "../ui/button";

export default function Testimonals() {
  return (
    <div className="flex flex-col md:flex-row pt-16 md:p-24 justify-between items-center gap-6">
      <div className="backdrop-filter backdrop-blur bg-opacity-5 bg-white rounded-3xl px-7 py-16 space-y-8">
        <Button className="flex py-6  backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-full">
          <img src="/qoute.svg " alt="security" className="w-5 h-5" />
        </Button>

        <h3 className="text-lg text-secondary">
          "Great session! Dani was super helpful. She shared some practical
          advice on how can lorem ip we go about refining our service
          offerings."
        </h3>
        <div className="flex items-center space-x-6">
          <AnimatedTooltip items={people.slice(0, 1)} />
          <div>
            <h4 className="text-lg text-secondary">Jhoe Doe</h4>
            <p className="text-sm text-muted-foreground">Software Enginner</p>
          </div>
        </div>
      </div>
      <div className="backdrop-filter backdrop-blur bg-opacity-5 bg-white rounded-3xl px-7 py-16 space-y-8">
        <Button className="flex py-6  backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-full">
          <img src="/qoute.svg " alt="security" className="w-5 h-5" />
        </Button>

        <h3 className="text-lg text-secondary">
          "It's is both attractive and highly adaptable. It's exactly what I've
          been looking forefinitely wo lorem ipsum dolorth the investment."
        </h3>
        <div className="flex items-center space-x-6">
          <AnimatedTooltip items={people.slice(1, 2)} />
          <div>
            <h4 className="text-lg text-secondary">Robert Jhonson</h4>
            <p className="text-sm text-muted-foreground">Product Manger</p>
          </div>
        </div>
      </div>
      <div className="backdrop-filter backdrop-blur bg-opacity-5 bg-white rounded-3xl px-7 py-16 space-y-8">
        <Button className="flex py-6  backdrop-filter backdrop-blur bg-opacity-15 bg-white rounded-full">
          <img src="/qoute.svg " alt="security" className="w-5 h-5" />
        </Button>

        <h3 className="text-lg text-secondary">
          "I am really satisfied with it. I'm good to go. It really saves me
          time and effort. It's is exactly what our business has been lacking."
        </h3>
        <div className="flex items-center space-x-6">
          <AnimatedTooltip items={people.slice(2, 3)} />
          <div>
            <h4 className="text-lg text-secondary">Jane Smith</h4>
            <p className="text-sm text-muted-foreground">Data Scientist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
