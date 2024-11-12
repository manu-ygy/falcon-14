import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

// Impor Globe secara dinamis tanpa server-side rendering
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
});

const DisplayGlobe = () => {
  const globeEl = useRef(null);

  useEffect(() => {
    if (globeEl.current) {
      // Akses kontrol dan atur autoRotate
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1; // Ubah kecepatan rotasi sesuai keinginan Anda
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      />
    </div>
  );
};

export default DisplayGlobe;
