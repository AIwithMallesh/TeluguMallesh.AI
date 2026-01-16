import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgData, setSvgData] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      fontFamily: 'Inter',
      themeVariables: {
        primaryColor: '#06b6d4',
        primaryTextColor: '#0f172a',
        primaryBorderColor: '#06b6d4',
        lineColor: '#334155', // Darker Slate 700 for better print contrast
        secondaryColor: '#2563eb',
        tertiaryColor: '#f1f5f9',
        mainBkg: '#ffffff',
        nodeBorder: '#06b6d4',
      },
    });

    const renderChart = async () => {
      try {
        if (!containerRef.current) return;
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgData(svg);
        setError(false);
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError(true);
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return <div className="text-red-500 text-sm p-4 border border-red-500/20 rounded">Failed to render diagram</div>;
  }

  return (
    <div 
      className="w-full overflow-x-auto p-4 bg-white/50 rounded-lg border border-borderLight flex justify-center print:border-none print:p-0"
      dangerouslySetInnerHTML={{ __html: svgData }}
      ref={containerRef}
    />
  );
};

export default MermaidDiagram;