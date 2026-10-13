import { onBeforeUnmount, onMounted } from 'vue';

export function useWeightNameLayout(tableRef) {
  let observer;
  let frame = 0;
  let disposed = false;

  function layout() {
    const table = tableRef.value;
    if (!table || disposed) return;
    table.classList.remove('names-stacked');
    const measurements = [...table.querySelectorAll('tbody td:nth-child(2)')].map(cell => {
      const probe = document.createElement('span');
      probe.className = 'weight-name-measure';
      probe.setAttribute('aria-hidden', 'true');
      probe.append(...[...cell.childNodes].map(node => node.cloneNode(true)));
      cell.append(probe);
      return { cell, probe };
    });
    const stacked = measurements.some(({ cell, probe }) => probe.getBoundingClientRect().width > cell.getBoundingClientRect().width + .5);
    measurements.forEach(({ probe }) => probe.remove());
    table.classList.toggle('names-stacked', stacked);
  }

  function schedule() {
    if (disposed || frame) return;
    frame = requestAnimationFrame(() => { frame = 0; layout(); });
  }

  onMounted(() => {
    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(schedule);
      observer.observe(tableRef.value);
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
}
