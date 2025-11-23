import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      {/* Buttons with different sizes and shapes */}
      <div className="mt-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Small Buttons</h2>
        <div className="flex gap-2 mb-4">
          <Button
            title="Small Rounded-sm"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-sm"
          />
          <Button
            title="Small Rounded-md"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-md"
          />
          <Button
            title="Small Rounded-lg"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg"
          />
          <Button
            title="Small Rounded-full"
            styles="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
          />
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Medium Buttons</h2>
        <div className="flex gap-2 mb-4">
          <Button
            title="Medium Rounded-sm"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-sm"
          />
          <Button
            title="Medium Rounded-md"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-md"
          />
          <Button
            title="Medium Rounded-lg"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-lg"
          />
          <Button
            title="Medium Rounded-full"
            styles="px-4 py-2 text-base bg-green-500 text-white rounded-full"
          />
        </div>
      </div>

      <div className="mt-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Large Buttons</h2>
        <div className="flex gap-2 mb-4">
          <Button
            title="Large Rounded-sm"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-sm"
          />
          <Button
            title="Large Rounded-md"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-md"
          />
          <Button
            title="Large Rounded-lg"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-lg"
          />
          <Button
            title="Large Rounded-full"
            styles="px-6 py-3 text-lg bg-purple-500 text-white rounded-full"
          />
        </div>
      </div>

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
