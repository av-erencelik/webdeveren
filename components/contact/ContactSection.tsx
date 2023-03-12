const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-5xl font-bold tracking-wide text-earth-300">Reach Out</h2>
      <p className="max-w-[500px] text-center text-cinder-700 dark:text-gray-400">
        If you&apos;re looking for someone who is eager to learn, work hard, and contribute to a team, I would love to
        discuss any opportunities you have available. Please feel free to reach out!
      </p>
      <a
        href="mailto:av.erencelik@gmail.com"
        className="group relative mt-5 cursor-pointer overflow-hidden rounded-md border border-earth-300 px-8 py-3 font-medium text-earth-300 hover:text-white"
      >
        <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-earth-300 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
        <span className="ease relative font-thin tracking-wider text-earth-300 transition duration-300 group-hover:text-cinder-700">
          Email Me
        </span>
      </a>
    </div>
  );
};

export default ContactSection;
