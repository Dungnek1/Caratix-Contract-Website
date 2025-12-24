import { Layout } from '../components/Layout';
import { Section } from '../components/Section';

export function Projects() {
  const projects = [
    {
      id: 'project-402zk',
      name: '402zk',
      link: 'https://402zk.com/',
      images: [
        '/image-4.png',
        '/image-3.png'
      ]
    },
    {
      id: 'project-meta-alpha',
      name: 'Meta-alpha',
      link:'https://meta-alpha.com/home',
      images: [
        '/image-1.png',
        '/image-2.png'
      ]
    },
    {
      id: 'project-5200ai',
      name: '5200ai',
      images: [
        '/image.png',
        '/image-5.png'
      ]
    }
  ];

  return (
    <Layout>
      <Section title="Hình ảnh các dự án" subtitle="Tổng hợp hình ảnh từ các dự án đã thực hiện.">
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl mb-[16px] font-bold mb-6 text-[#F9D649]">{project.name}</a>
              <div className="grid grid-cols-1 gap-6">
                {project.images.map((image, idx) => (
                  <div key={idx} className="w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30">
                    <img
                      src={image}
                      alt={`${project.name} - Hình ${idx + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

