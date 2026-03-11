const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="font-display text-xs font-bold text-primary-foreground">P</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">Prosper</span>
            <span className="text-primary text-xs">.lk</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Your future. Abroad. Sorted.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Prosper.lk · Colombo, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
