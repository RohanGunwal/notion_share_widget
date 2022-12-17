export default function ModalFooter() {
  return (
    <div className="footer_wrapper | flex items-center justify-between p-2 border-t bg-gray-200">
      <section className="help_wrapper | flex items-center gap-3">
        <img
          src="/assets/Images/circle-question-regular.svg"
          className="w-4 h-4"
          alt="question-mark"
        />
        <p className="text-sm text-gray-600">learn about sharing</p>
      </section>
    </div>
  );
}
