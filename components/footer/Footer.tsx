const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-center gap-4 p-5 md:flex-row md:py-3 md:px-20">
      <small className="text-xs text-cinder-700 dark:text-gray-400">
        &copy; {`${new Date().getFullYear()}, Mehmet Eren Çelik. All Rights Reserved.`}
      </small>
    </footer>
  );
};

export default Footer;
