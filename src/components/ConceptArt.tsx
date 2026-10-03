type ConceptArtProps = {
  variant?: string;
  className?: string;
  priority?: boolean;
};

const studies = {
  building: {
    file: 'architecture-v2',
    number: '01',
    label: 'Architecture & systems',
    alt: 'AI concept visualization of an illuminated cutaway building with layered stone floors, exposed copper pipework, electrical distribution, and mechanical systems. Not completed company work.',
    width: 1122,
    height: 1402,
  },
  circuit: {
    file: 'electrical-v2',
    number: '02',
    label: 'Electrical detail',
    alt: 'AI concept visualization of a detailed electrical assembly with copper busbars, charcoal breakers, routed wiring, and machined fixings. Not a real installation or wiring guide.',
    width: 1536,
    height: 1024,
  },
  plan: {
    file: 'mechanical-v2',
    number: '03',
    label: 'Materials & mechanics',
    alt: 'AI concept visualization of a silver heat exchanger, curved copper pipes, brass fittings, and a graphite pump on a limestone base. Not completed company work.',
    width: 1536,
    height: 1024,
  },
};

export function ConceptArt({ variant = 'building', className = '', priority = false }: ConceptArtProps) {
  const study = studies[variant as keyof typeof studies] ?? studies.building;
  return (
    <div className={`concept-art concept-art-${variant} ${className}`}>
      <img
        src={`/images/${study.file}-1200.webp`}
        srcSet={`/images/${study.file}-640.webp 640w, /images/${study.file}-1200.webp 1200w`}
        sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 800px) 50vw, 700px"
        width={study.width}
        height={study.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        alt={study.alt}
      />
      <span className="concept-art-detail">{study.label}</span>
    </div>
  );
}
