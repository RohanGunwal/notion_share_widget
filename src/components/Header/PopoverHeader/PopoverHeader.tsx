import { Switch } from "@chakra-ui/switch";

export default function PopoverHeader() {
  return (
    <div className="header_wrapper | flex justify-between items-center p-4">
      <section className="flex gap-4 items-center">
        <img src="/assets/Images/web.svg" className="w-9 h-9" />
        <section>
          <h1 className="font-semibold text-xl tracking-wide">Share to web</h1>
          <p className="text-gray-500 text-sm">
            Publish and share link with anyone
          </p>
        </section>
      </section>
      <section>
        <Switch></Switch>
      </section>
    </div>
  );
}
