export function splitThreadLines(thread: string): string[] {
  return thread
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function downloadMarkdown(thread: string, filename = "thread.md") {
  const blob = new Blob([thread], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export async function downloadPdf(thread: string, filename = "thread.pdf") {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 48;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Blog2Thread — Twitter/X Thread", margin, y);
  y += 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  const lines = splitThreadLines(thread);
  for (const line of lines) {
    const wrapped = doc.splitTextToSize(line, maxWidth) as string[];
    for (const wrapLine of wrapped) {
      if (y > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(wrapLine, margin, y);
      y += 16;
    }
    y += 10;
  }

  doc.save(filename);
}
