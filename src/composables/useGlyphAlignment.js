import { onBeforeUnmount, onMounted } from 'vue';

export function useGlyphAlignment(tableRef) {
  let canvas;
  let context;
  let observer;
  let frame = 0;
  let disposed = false;

  function align() {
    if (disposed || !context || !tableRef.value) return;
    const characters = [...tableRef.value.querySelectorAll('.glyph-character')];
    characters.forEach(character => character.style.removeProperty('transform'));
    const positions = characters.map(character => {
      const style = getComputedStyle(character);
      const language = character.closest('[lang]').lang;
      canvas.lang = language;
      if ('lang' in context) context.lang = language;
      context.font = [style.fontStyle, style.fontWeight, style.fontSize, style.fontFamily].join(' ');
      context.textAlign = 'left';
      context.textBaseline = 'alphabetic';
      context.direction = 'ltr';
      const metrics = context.measureText(character.firstChild.textContent);
      const box = character.closest('.glyph-box').getBoundingClientRect();
      const rect = character.getBoundingClientRect();
      const baseline = character.querySelector('.glyph-baseline').getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(character.firstChild);
      const text = range.getBoundingClientRect();
      const scaleX = rect.width / parseFloat(style.width);
      const scaleY = rect.height / parseFloat(style.height);
      const inkX = text.left + (metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft) * scaleX / 2;
      const inkY = baseline.top + (metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent) * scaleY / 2;
      return { character, x: (box.left + box.width / 2 - inkX) / scaleX, y: (box.top + box.height / 2 - inkY) / scaleY };
    });
    positions.forEach(({ character, x, y }) => {
      if (Number.isFinite(x) && Number.isFinite(y)) character.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  }

  function schedule() {
    if (disposed || frame) return;
    frame = requestAnimationFrame(() => { frame = 0; align(); });
  }

  onMounted(() => {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(schedule);
      tableRef.value.querySelectorAll('.glyph-box').forEach(box => observer.observe(box));
    }
    window.addEventListener('resize', schedule);
    document.fonts?.ready.then(schedule);
    document.fonts?.addEventListener('loadingdone', schedule);
    schedule();
  });
  onBeforeUnmount(() => {
    disposed = true;
    observer?.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', schedule);
    document.fonts?.removeEventListener('loadingdone', schedule);
  });
  return { schedule, align };
}
