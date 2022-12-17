import { useState } from "react";

export default function PopoverFooter() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyClickHandler = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("https://www.oslash.com");
    setTimeout(function () {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="footer_wrapper | flex items-center justify-between border-t p-2">
      <section className="help_wrapper | flex items-center gap-2">
        <img
          src="/assets/Images/circle-question-regular.svg"
          className="w-4 h-4"
          alt="question-mark"
        />
        <p className="text-sm text-gray-600">learn about sharing</p>
      </section>
      <section className="link_wrapper | flex items-center gap-2">
        <img src="/assets/Images/link-solid.svg" className="w-4 h-4" alt="" />
        <p
          className={
            isCopied
              ? "text-green-600 font-bold text-sm"
              : "text-black text-sm cursor-pointer"
          }
          onClick={copyClickHandler}
        >
          {isCopied ? "Copied" : "Copy link"}
        </p>
      </section>
    </div>
  );
}
