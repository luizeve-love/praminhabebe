window.onload = () => {
      // Dispara confetes automaticamente ao carregar a página
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
      });

      // Repetir alguns disparos para dar efeito de festa
      setTimeout(() => {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.7 } });
      }, 1000);

      setTimeout(() => {
        confetti({ particleCount: 180, spread: 140, origin: { y: 0.8 } });
      }, 2000);
    };