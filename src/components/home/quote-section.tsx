export function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f76f20] text-white">
      <div className="container-wide">
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed max-w-4xl mx-auto">
            "Le Fasting n'est pas un régime, c'est un mode de vie qui vous permet de retrouver votre vitalité naturelle et votre liberté face à la nourriture."
          </p>
          <footer className="mt-6 text-white/80">
            <cite>— Dr. Thomas Laurent, Fondateur de Club Fasting</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
