(() => {
  const gallery = document.querySelector('[data-cover-gallery]');
  if (!gallery) return;

  const large = gallery.querySelector('[data-cover-large]');
  const small = gallery.querySelector('[data-cover-small]');
  const candidates = Array.from(
    { length: 20 },
    (_, index) => `assets/covers/cover-${String(index + 1).padStart(2, '0')}.jpg`
  );

  const loadImage = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = () => resolve(null);
    image.src = src;
  });

  const exists = async (src) => {
    if (window.location.protocol === 'file:') return loadImage(src);
    try {
      const response = await fetch(src, { method: 'HEAD' });
      return response.ok ? src : null;
    } catch {
      return null;
    }
  };

  const shuffle = (items) => {
    for (let index = items.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
    }
    return items;
  };

  const discoverCovers = async () => {
    const available = [];
    for (const candidate of candidates) {
      const result = await exists(candidate);
      if (!result) break;
      available.push(result);
    }
    return shuffle(available);
  };

  discoverCovers().then((available) => {
    if (available[0]) {
      large.src = available[0];
      large.alt = 'A personal photo of Jing Jin';
    }
    if (available[1]) {
      small.src = available[1];
    }
  });
})();
